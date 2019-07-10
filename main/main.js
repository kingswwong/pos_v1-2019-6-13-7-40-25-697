'use strict';
const getTotalPrice = (after_promotion_items) => {
    let result = {}
    result.real_price =  after_promotion_items.reduce((re, cur)=>{
        return re + parseFloat(cur['realPrice']);
    },0).toFixed(2)
    result.save_price = (after_promotion_items.reduce((re, cur)=>{
        return re + parseFloat(cur['totalPrice']);
    },0) - result.real_price).toFixed(2);
    return result;
}

const getReceiptMsg = (items) => {
    let result = ""
    items.forEach(item => {
        result += "名称：${item.name}，数量：${item.count}瓶，单价：${item.price}(元)，小计：${item.realPrice}(元)\n"
    })
    return result
}

const getItem = barcode => {
    let allItems = loadAllItems()
    return allItems.filter(item => item.barcode === barcode)
}

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

const barcodeFormat = barcodes => {
    barcodes.forEach(barcode => {
        if(barcode.indexOf('-') !== -1){
            let index = barcode.indexOf('-')
            let real_barcode = barcode.substring(0,index);
            let count = parseFloat(barcode.substring(index + 1));
            barcodes.splice(barcodes.indexOf(barcode),1)
            for(let i = 0;i < count;i++){
                barcodes.push(real_barcode)
            }
        }
    })
    return barcodes;
}

const barcodeDuplicate = barcodes => {
    return barcodes.reduce((re, cur) => {
        re[cur] ? re[cur]++ : re[cur] = 1;
        return re;
    },{})

}

const printReceipt = (barcodes) => {
    const barcode_format_data = barcodeFormat(barcodes);
    const barcode_duplicate_data = barcodeDuplicate(barcode_format_data)
    const get_item_msg = getItemsMsg(barcode_duplicate_data)
    const promotions_data = getPromotions(get_item_msg)
    const total_price_and_save_price = getTotalPrice(promotions_data)

    let result = "***<没钱赚商店>收据***\n"
    result += getReceiptMsg(promotions_data)
    result += "----------------------\n"
    result += "总计：${total_price_and_save_price.real_price}(元)\n"
    result += "节省：${total_price_and_save_price.save_price}(元)\n"
    result += "**********************";
    return result;
}
