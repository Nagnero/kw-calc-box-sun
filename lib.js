function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    //let s = 0;
    //for (let i = 0; i <numbers.length; i++) {
     //   s += numbers[i];
    //}
    return s / numbers.length;
}

function prime(num) {
    // todo
    return false;
}

function fact(num) {
    // todo
    return -1;
}


module.exports = {
    avg,
    prime,
    fact
}
/*
exports.avg = avg;
exports.prime = prime;
exports.fact = fact;
*/