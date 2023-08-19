
let clickUpgrades = [
    {
        name: 'mallet',
        price: 250,
        quantity: 0,
        multiplier: 5,
        totalDmg: 0
    },
    {
        name: 'hammer',
        price: 250,
        quantity: 0,
        multiplier: 10,
        totalDmg: 0
    }
]
let automaticUpgrades = [
    {
        name: 'backhoe',
        price: 500,
        quantity: 0,
        multiplier: 50,
        totalDmg: 0
    },
    {
        name: 'excavator',
        price: 1000,
        quantity: 0,
        multiplier: 200,
        totalDmg: 0
    }
]

let moleTotal = 0
let molePerClick = 0
let molePerSecond = 0
let malletPrice = 0
let hammerPrice = 0
let backhoePrice = 0
let excavatorPrice = 0

let moleTotalElm = document.getElementById('moleTotal')
let molePerClickElm = document.getElementById('molePerClick')
let molePerSecondElm = document.getElementById('molePerSecond')
let malletPriceElm = document.getElementById('malletPrice')
let hammerPriceElm = document.getElementById('hammerPrice')
let backhoePriceElm = document.getElementById('backHoePrice')
let excavatorPriceElm = document.getElementById('excavatorPrice')


function mine() {
    moleTotal++
    console.log('this is mining', moleTotal)

    drawTotals()
    //applyClickUpgrade()
}

function drawTotals() {
    moleTotalElm.innerText = `Total Moles: ${moleTotal}`
    molePerClickElm.innerText = `Moles Per Click: ${molePerClick}`
    molePerSecondElm.innerText = `Moles Per Second: ${molePerSecond}`

}

function buyClickUpgrades(clickUpgradeName) {
    let purchasedClickUpgrade = clickUpgrades.find(clickUpgrade => clickUpgrade.name == clickUpgradeName)
    if (moleTotal >= purchasedClickUpgrade.price) {
        purchasedClickUpgrade.quantity++
        purchasedClickUpgrade.totalDmg = (purchasedClickUpgrade.multiplier * purchasedClickUpgrade.quantity)
        purchasedClickUpgrade.price + 100
        moleTotal -= purchasedClickUpgrade.price

        let clickUpgradePriceElm = document.getElementById('updatePrice')
        clickUpgradePriceElm.innerText = `${purchasedClickUpgrade.price}`


    } else if (moleTotal < purchasedClickUpgrade.price) {
        window.alert("You don't have enough moles!!")
    }
    totalClickDmg()
    drawTotals()
    drawClickUpgrade()
}

function buyAutomaticUpgrades(automaticUpgradeName) {
    let purchasedAutomaticUpgrade = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == automaticUpgradeName)
    if (moleTotal >= purchasedAutomaticUpgrade.price) {
        purchasedAutomaticUpgrade.quantity++
        purchasedAutomaticUpgrade.totalDmg = (purchasedAutomaticUpgrade.multiplier * purchasedAutomaticUpgrade.quantity)
        purchasedAutomaticUpgrade.price + 500
        moleTotal -= purchasedAutomaticUpgrade.price

    } else if (moleTotal < purchasedAutomaticUpgrade.price) {
        window.alert("You don't have enough moles!!")
    }
    drawAutomaticUpgrade()
}

function drawClickUpgrade(clickUpgradeName) {
    let clickUpgradeTemplate = ''
    clickUpgrades.forEach(clickUpgrade => {
        if (clickUpgrade.quantity > 0) {
            clickUpgradeTemplate += `                            
            <div class="col-6 bg-red">
            <p> ${clickUpgrade.name} Qty: <span>${clickUpgrade.quantity}</span></p>
            </div>
            <div class="col-6 bg-red">
            <p> ${clickUpgrade.name} DMG: <span>${clickUpgrade.totalDmg}</span></p>
            </div>
            `
        }
    })
    document.getElementById('clickUpgrade').innerHTML = clickUpgradeTemplate

    drawTotals()
}

function drawAutomaticUpgrade(automaticUpgradeName) {
    let automaticUpgradeTemplate = ''
    automaticUpgrades.forEach(automaticUpgrade => {
        if (automaticUpgrade.quantity > 0) {
            automaticUpgradeTemplate += `
            <div class="col-6 bg-red">
            <p> ${automaticUpgrade.name} Qty: <span>${automaticUpgrade.quantity}</span></p>
            </div>
            <div class="col-6 bg-red">
            <p> ${automaticUpgrade.name} DMG: <span>${automaticUpgrade.totalDmg}</span></p>
            </div>
            `
        }
    })
    document.getElementById('automaticUpgrade').innerHTML = automaticUpgradeTemplate
    drawTotals()
}
function totalClickDmg() {
    let clickTotal = []
    clickUpgrades.forEach(clickUpgrade => {
        clickUpgrade.totalDmg = clickTotal
        for (let i = 0; i < clickTotal.length; i++) {

            let num = clickTotal[i]
            console.log('this is clickTotal', clickTotal)
        }

        // clickTotal + molePerClick
        // molePerClick + 1
        console.log('this is total click damage', clickTotal)
    })

}