
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

module.exports = getTotalPrice