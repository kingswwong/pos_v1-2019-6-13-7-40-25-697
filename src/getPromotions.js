const loadPromotions = require('../test/fixtures').loadPromotions


const getPromotions = (items) => {
    let temp = loadPromotions();
    let promotionBarcode = temp[0].barcodes;
    return items.map(item => {
        if(promotionBarcode.indexOf(item.barcode) !== -1){
            item.realPrice = (item.totalPrice - parseInt(item.count / 2) * item.price).toFixed(2)
        }else{
            item.realPrice = item.totalPrice
        }
        return item;
    })
}

module.exports = getPromotions