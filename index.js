import wordList from './words.js'

const table = document.getElementById('table')

const appendNewTrElement = () => {
    const index = table.rows.length;
    const newRow = table.insertRow(index)
    return newRow
}

const insertThreeTdElements = (row, x, index) => {
    const tdDE = document.createElement("TD")
    tdDE.innerHTML = x.de
    const tdKO = document.createElement("TD")
    tdKO.innerHTML = x.ko
    const tdEX = document.createElement("TD")
    tdEX.innerHTML = `<ul><li>${x.ex[index].de}</li><li>${x.ex[index].ko}</li></ul>`
    row.appendChild(tdDE)
    row.appendChild(tdKO)
    row.appendChild(tdEX)
    return row
}



const newRow = appendNewTrElement()
const testTest = insertThreeTdElements(newRow, wordList[0], 0)
const secondNewRow = appendNewTrElement()
const test2 = insertThreeTdElements(secondNewRow, wordList[1],0)

console.log(testTest)
console.log(test2)


