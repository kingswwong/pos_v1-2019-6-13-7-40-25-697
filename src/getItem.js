
const getItem = barcode => {
    return loadAllItems().filter(item => item.barcode === barcode)
}

module.exports = getItem