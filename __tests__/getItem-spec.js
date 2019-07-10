const getItem = require('../src/getItem')

it('should be return {barcode: "ITEM000000", name: "可口可乐", unit: "瓶", price: 3} when invoke the getItem function given the barcode ITEM000000', () => {
    //given
    const barcode = "ITEM000000"
    //when
    const result = getItem(barcode)
    const real_answer = {barcode: "ITEM000000", name: "可口可乐", unit: "瓶", price: 3}

    //then
    expect(JSON.stringify(result)).toBe(JSON.stringify(real_answer))
});