import fireworksCells from'../patterns/fireworks'
import flowerCells from '../patterns/flower'
import gosperGunCells from '../patterns/gosperGun'

const cellData = []
const fireworks = []
const flower = []
const gosperGun = []


//load the pattern
for (let i = 1; i <= 2500; i++) {
    if (flowerCells.includes(i)) {
        flower.push(true)
    } else {
        flower.push(false)
    }
}

for (let i = 1; i <= 2500; i++) {
    if (fireworksCells.includes(i)) {
        fireworks.push(true)
    } else {
        fireworks.push(false)
    }
}

for (let i = 1; i <= 2500; i++) {
    if (gosperGunCells.includes(i)) {
        gosperGun.push(true)
    } else {
        gosperGun.push(false)
    }
}

for (let i = 1; i <= 2500; i++) {
    if (i === 0) {
        cellData.push(true)
    } else {
        cellData.push(false)
    }
}

export {fireworks,flower,gosperGun,cellData}
