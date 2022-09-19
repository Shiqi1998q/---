function randGenerator(n: number, sum: number) {
    var aryRet = [];
    var fSumTmp = sum;
    var iAcc = 0;
    for (var i = 0; i < (n - 1); i++) {
        var iTmp = Math.ceil(Math.random() * (fSumTmp / 2));
        aryRet.push(iTmp / 100);
        fSumTmp -= iTmp;
        iAcc += iTmp;
    }
    aryRet.push((sum - iAcc) / 100);
    return aryRet;
}
export { randGenerator }