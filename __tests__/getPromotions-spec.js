const getPromotions = require('../src/getPromotions')

it('should be return real_answer when invoke getPromotions given data = dueled_data', () => {
    //given
    const dueled_data = [
        {
            barcode: "ITEM000001",
            count: 5,
            name: "雪碧",
            price: "3.00",
            totalPrice: "15.00",
            unit: "瓶"
        },
        {
            barcode: "ITEM000005",
            count: 3,
            name: "方便面",
            price: "4.50",
            totalPrice: "13.50",
            unit: "袋"
        },
        {
            barcode: "ITEM000003",
            count: 2,
            name: "荔枝",
            price: "15.00",
            totalPrice: "30.00",
            unit: "斤"
        }
    ]
    //when
    const result = getPromotions(dueled_data)
    const real_answer = [
        {
            barcode: "ITEM000001",
            count: 5,
            name: "雪碧",
            price: "3.00",
            realPrice: "9.00",
            totalPrice: "15.00",
            unit: "瓶",
        },
        {
            barcode: "ITEM000005",
            count: 3,
            name: "方便面",
            price: "4.50",
            realPrice: "9.00",
            totalPrice: "13.50",
            unit: "袋",
        },
        {
            barcode: "ITEM000003",
            count: 2,
            name: "荔枝",
            price: "15.00",
            realPrice: "30.00",
            totalPrice: "30.00",
            unit: "斤",
        }
    ]

    //then
    expect(result).toStrictEqual(real_answer)
});