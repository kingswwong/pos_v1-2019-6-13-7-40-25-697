const barcodeDuplicate = barcodes => {
    return barcodes.reduce((re, cur) => {
        re[cur] ? re[cur]++ : re[cur] = 1;
        return re;
    },{})

}

module.exports = barcodeDuplicate