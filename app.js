

let clickUpgrades = [
    {
        name: 'mallet',
        price: 100,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'sledgehammer',
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
}

function drawTotal() {
    let totalElm = document.getElementById('total')
    totalElm.innerText = `Total Moles: ${mole}`
}


function buyMallet() {
    console.log('buying mallet')
}


