
const getReceiptMsg = (items) => {
    let result = ""
    items.forEach(item => {
        result += "名称：${item.name}，数量：${item.count}瓶，单价：${item.price}(元)，小计：${item.realPrice}(元)\n"
    })
    return result
}

module.exports = getReceiptMsg