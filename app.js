

let clickUpgrades = [
    {
        name: 'mallet',
        price: 100,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'hammer',
        price: 250,
        quantity: 0,
        multiplier: 5
    }
];

let automaticUpgrades = [
    {
        name: 'backhoe',
        price: 500,
        quantity: 0,
        multiplier: 25
    },
    {
        name: 'excavator',
        price: 1000,
        quantity: 0,
        multiplier: 50
    }
];



let mole = 0;


function mine() {
    mole++
    console.log('this is mining', mole)
    drawTotal()
    //applyClickUpgrade()
}

function drawTotal() {
    let totalElm = document.getElementById('total')
    totalElm.innerText = `Total Moles: ${mole}`
}

// function applyClickUpgrade() {
//     clickUpgrades.forEach(clickUpgrade => {
//         let totalClick = (mole * clickUpgrade.multiplier)
//         console.log(totalClick, 'this is the total click power')
//     })

// }

// function drawClick() {
//     let totalClick = document.getElementById('totalClick')
//     totalClick.innerText = `Total Mine Power: ${totalClick}`
// }

function buyClickUpgrades(clickUpgradeName) {
    let purchasedClickUpgrade = clickUpgrades.find(clickUpgrade => clickUpgrade.name == clickUpgradeName)
    if (mole >= purchasedClickUpgrade.price) {
        purchasedClickUpgrade.quantity++
        mole -= purchasedClickUpgrade.price
    } else if (mole < purchasedClickUpgrade.price) {
        window.alert("You don't have enough moles!!")
    }
    drawClickUpgrade()
}

function buyAutomaticUpgrades(automaticUpgradeName) {
    let purchasedAutomaticUpgrade = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == automaticUpgradeName)
    if (mole >= purchasedAutomaticUpgrade.price) {
        purchasedAutomaticUpgrade.quantity++
        mole -= purchasedAutomaticUpgrade.price
    } else if (mole < purchasedAutomaticUpgrade.price) {
        window.alert("You don't have enough moles!!")
    }
    drawClickUpgrade()
    drawAutomaticUpgrade()
}

function drawClickUpgrade(clickUpgradeName) {

    let clickUpgradeTemplate = ''

    clickUpgrades.forEach(clickUpgrade => {
        clickUpgradeTemplate += `
                            <div class="col-3 infoCard">
                                <p>${clickUpgrade.quantity}</p>
                            </div>
                            <div class="col-3 infoCard">
                                <p>${clickUpgrade.name}</p>
                            </div>
                            <div class="col-3 infoCard">
                                <p>==></p>
                            </div>
                            <div class="col-3 infoCard">
                                <p>${clickUpgrade.multiplier}*${clickUpgrade.quantity}</p>
                            </div>
            
            `
        document.getElementById('clickUpgradeName').innerHTML = clickUpgradeTemplate
    })
    drawTotal()
}

function drawAutomaticUpgrade(automaticUpgradeName) {

    let automaticUpgradeTemplate = ''

    automaticUpgrades.forEach(automaticUpgrade => {
        automaticUpgradeTemplate += `
                            <div class="col-3 infoCard">
                                <p>${automaticUpgrade.quantity}</p>
                            </div>
                            <div class="col-3 infoCard">
                                <p>${automaticUpgrade.name}</p>
                            </div>
                            <div class="col-3 infoCard">
                                <p>==></p>
                            </div>
                            <div class="col-3 infoCard">
                                <p>${automaticUpgrade.multiplier}*${automaticUpgrade.quantity}</p>
                            </div>
            
            `
        document.getElementById('automaticUpgradeName').innerHTML = automaticUpgradeTemplate
    })
}

let autoMole = 0
function collectAutoUpgrades() {
    automaticUpgrades.forEach(automaticUpgrade => {
        autoMole += automaticUpgrade.quantity * automaticUpgrade.multiplier
        console.log('autoCollect', autoMole)
    })
}

//setInterval(collectAutoUpgrades, 3000)