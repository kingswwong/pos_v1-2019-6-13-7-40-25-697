const barcodeFormat = barcodes => {
    barcodes.forEach(barcode => {
        if(barcode.indexOf('-') !== -1){
            let index = barcode.indexOf('-')
            let real_barcode = barcode.substring(0,index);
            let count = parseInt(barcode.substring(index + 1));
            barcodes.splice(barcodes.indexOf(barcode),1)
            for(let i = 0;i < count;i++){
                barcodes.push(real_barcode)
            }
        }
    })
    return barcodes;
}

module.exports = barcodeFormat