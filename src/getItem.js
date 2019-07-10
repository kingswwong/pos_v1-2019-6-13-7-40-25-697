const loadAllItems = require('../test/fixtures').loadAllItems
const getItem = barcode => {
    let allItems = loadAllItems()
    return allItems.filter(item => item.barcode === barcode)
}

module.exports = getItem