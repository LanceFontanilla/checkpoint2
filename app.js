
let clickUpgrades = [
    {
        name: 'mallet',
        price: 100,
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
let molePerSecond = 0
let molePerClick = 0

function mine() {
    moleTotal++
    console.log('this is mining', moleTotal)
    totalClickDmg()
    drawTotals()
}

function drawTotals() {
    document.getElementById('moleTotal').innerText = `Total Moles: ${moleTotal}`
}

function buyClickUpgrades(clickUpgradeName) {
    let purchasedClickUpgrade = clickUpgrades.find(clickUpgrade => clickUpgrade.name == clickUpgradeName)
    if (moleTotal >= purchasedClickUpgrade.price) {
        purchasedClickUpgrade.quantity++
        purchasedClickUpgrade.totalDmg = (purchasedClickUpgrade.multiplier * purchasedClickUpgrade.quantity)
        moleTotal -= purchasedClickUpgrade.price
        purchasedClickUpgrade.price += 100
    } else if (moleTotal < purchasedClickUpgrade.price) {
        window.alert("You don't have enough moles!!")
    }
    drawTotals()
    drawClickUpgrade()
    drawClickUpgradePrice()
}

function buyAutomaticUpgrades(automaticUpgradeName) {
    let purchasedAutomaticUpgrade = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == automaticUpgradeName)
    if (moleTotal >= purchasedAutomaticUpgrade.price) {
        purchasedAutomaticUpgrade.quantity++
        purchasedAutomaticUpgrade.totalDmg = (purchasedAutomaticUpgrade.multiplier * purchasedAutomaticUpgrade.quantity)
        moleTotal -= purchasedAutomaticUpgrade.price
        purchasedAutomaticUpgrade.price += 500
    } else if (moleTotal < purchasedAutomaticUpgrade.price) {
        window.alert("You don't have enough moles!!")
    }
    drawTotals()
    drawAutomaticUpgrade()
    drawAutomaticUpgradePrice()
}

function drawAutomaticUpgradePrice() {
    let automaticUpgradePriceTemplate = ''
    automaticUpgrades.forEach(automaticUpgrade => {
        automaticUpgradePriceTemplate += `
            <div class="col-6 text-center bg-red">
            <p>${automaticUpgrade.name} Price: ${automaticUpgrade.price} Moles</p>
            </div>
        `
    })
    document.getElementById('automaticUpdatePrice').innerHTML = automaticUpgradePriceTemplate
}

function drawClickUpgradePrice() {
    let clickUpgradePriceTemplate = ''
    clickUpgrades.forEach(clickUpgrade => {
        clickUpgradePriceTemplate += `
            <div class="col-6 text-center bg-red">
            <p>${clickUpgrade.name} Price: ${clickUpgrade.price} Moles</p>
            </div>
        `
    })
    document.getElementById('clickUpdatePrice').innerHTML = clickUpgradePriceTemplate
}

function drawClickUpgrade() {
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
    updateMPC()
    drawTotals()
}

function drawAutomaticUpgrade() {
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
        document.getElementById('automaticUpgrade').innerHTML = automaticUpgradeTemplate
        drawTotals()
        updateMPS()
    })
}

function collectAutomaticUpgrades() {
    automaticUpgrades.forEach(automaticUpgrade => {
        let total = (automaticUpgrade.quantity * automaticUpgrade.multiplier)
        moleTotal += total
        //console.log('this is the total autoUpgrades', totalAutomaticUpgrades)
        drawTotals()
    })
}

function totalClickDmg() {
    clickUpgrades.forEach(clickUpgrade => {
        if (clickUpgrade.quantity > 0) {
            let total = (clickUpgrade.quantity * clickUpgrade.multiplier)
            moleTotal += total

        }
    })
}

function updateMPC() {
    clickUpgrades.forEach(clickUpgrade => {
        molePerClick = (clickUpgrade.totalDmg)
        document.getElementById('molePerClick').innerText = `Moles Per Click:${molePerClick}`
    })
}

function updateMPS() {
    automaticUpgrades.forEach(automaticUpgrade => {
        molePerSecond = (automaticUpgrade.totalDmg)
        document.getElementById('molePerSecond').innerText = `Moles Per Second:${molePerSecond}`
    })
}


function debugTool() {
    moleTotal += 2500
    drawTotals()
}

function debugToolZero() {
    moleTotal = 0
    drawTotals()
}

setInterval(collectAutomaticUpgrades, 3000);
updateMPS()
drawAutomaticUpgradePrice()
drawClickUpgradePrice()