const getItem = require('../src/getItem')

const getItemsMsg = (duplicate_barcodes) => {
    let barcodes = Object.keys(duplicate_barcodes);
    let counts = Object.values(duplicate_barcodes);
    let arr = []
    barcodes.forEach((barcode,index) => {
        let temp = getItem(barcode)[0];
        temp.count = counts[index]
        temp.totalPrice = (temp.count * temp.price).toFixed(2);
        temp.price = (temp.price).toFixed(2)
        arr.push(temp)
    })
    return arr;
}

module.exports = getItemsMsg