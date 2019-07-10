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
        result += `名称：${item.name}，数量：${item.count}${item.unit}，单价：${item.price}(元)，小计：${item.realPrice}(元)\n`
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
            item.realPrice = (item.totalPrice -  item.price).toFixed(2)
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
    let result = {}
    barcodes.forEach(barcode => {
        if(barcode.indexOf('-') !== -1){
            let index = barcode.indexOf('-')
            let real_barcode = barcode.substring(0,index);
            let count = parseFloat(barcode.substring(index + 1));
            if(result[real_barcode] === undefined){
                result[real_barcode] = count;
            }else{
                result[real_barcode] += count;
            }
        }else{
            if(result[barcode] === undefined){
                result[barcode] = 1;
            }else{
                result[barcode] += 1;
            }
        }
    })
    return result;
}




const printReceipt = (barcodes) => {
    const barcode_duplicate_data = barcodeFormat(barcodes)
    const get_item_msg = getItemsMsg(barcode_duplicate_data)
    const promotions_data = getPromotions(get_item_msg)
    const total_price_and_save_price = getTotalPrice(promotions_data)

    let result = "***<没钱赚商店>收据***\n"
    result += getReceiptMsg(promotions_data)
    result += "----------------------\n"
    result += `总计：${total_price_and_save_price.real_price}(元)\n`
    result += `节省：${total_price_and_save_price.save_price}(元)\n`
    result += "**********************";
    console.log(result)
}
