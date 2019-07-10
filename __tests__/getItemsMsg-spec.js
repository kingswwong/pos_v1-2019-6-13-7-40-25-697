const getItemsMsg = require('../src/getItemsMsg')

it('should be return real_answer when invoke getItemsMsg given data = barcode_duplicate_data', () => {
    //given
    const barcode_duplicate_data = {ITEM000001: 5, ITEM000005: 3, ITEM000003: 2}
    //when
    const result = getItemsMsg(barcode_duplicate_data)
    const real_answer = [
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

    //then
    expect(result).toStrictEqual(real_answer)
});