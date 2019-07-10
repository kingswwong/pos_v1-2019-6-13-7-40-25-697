const getTotalPrice = require('../src/getTotalPrice')

it('should be 48 when invoke getTotalPrice and given data = promotion_data', () => {
    //given
    const promotion_data = [
        {
            barcode: "ITEM000001",
            count: 5,
            name: "雪碧",
            price: "3.00",
            totalPrice: "15.00",
            unit: "瓶",
            realPrice: "9.00"
        },
        {
            barcode: "ITEM000005",
            count: 3,
            name: "方便面",
            price: "4.50",
            totalPrice: "13.50",
            unit: "袋",
            realPrice: "9.00"
        },
        {
            barcode: "ITEM000003",
            count: 2,
            name: "荔枝",
            price: "15.00",
            totalPrice: "30.00",
            unit: "斤",
            realPrice: "30.00"
        }
    ]
    //when
    const result = getTotalPrice(promotion_data)
    const real_answer = {real_price: "48.00",save_price: "10.50" }

    //then
    expect(result).toStrictEqual(real_answer)
});