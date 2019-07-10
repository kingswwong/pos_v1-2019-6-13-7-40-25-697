const barcodeFormat = require('../src/barcodeFormat')

it('should be return resal_answer when invoke the barcodeFormat function given the data', () => {
    //given
    const data = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005'
    ]
    //when
    const result = barcodeFormat(data)
    const real_answer = ["ITEM000001", "ITEM000001", "ITEM000001", "ITEM000001", "ITEM000001", "ITEM000005", "ITEM000005", "ITEM000005", "ITEM000003", "ITEM000003"]
    //then
    expect(JSON.stringify(result)).toBe(JSON.stringify(real_answer))
});