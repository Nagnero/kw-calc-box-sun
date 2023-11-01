function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) { // 에라토네스의 체
        if (num % i === 0) return false;
    }
    return true;
}

function fact(num) { // 재귀적으로 factorial 계산
    if (num < 0 || num > 15) return -1; // 옳지 않은 값 입력
    if (num === 0 || num === 1) return 1;

    return num * fact(num - 1);
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