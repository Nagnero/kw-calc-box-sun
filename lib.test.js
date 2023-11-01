const {test, expect} = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime(1) should be false", () => {
    expect(lib.prime(1)).toBe(false);
});

test("prime(2) should be true", () => {
    expect(lib.prime(2)).toBe(true);
});

test("prime(3) should be true", () => {
    expect(lib.prime(3)).toBe(true);
});

test("prime(100) should be false", () => {
    expect(lib.prime(100)).toBe(false);
});

test("prime(101) should be true", () => {
    expect(lib.prime(101)).toBe(true);
});

test("fact(0) should be 1", () => {
    expect(lib.fact(0)).toBe(1);
});

test("fact(1) should be 1", () => {
    expect(lib.fact(1)).toBe(1);
});

test("fact(6) should be 720", () => {
    expect(lib.fact(6)).toBe(720);
});

test("fact(15) should be 1,307,674,368,000", () => {
    expect(lib.fact(15)).toBe(1307674368000);
});

test("fact(-1) should be -1", () => {
    expect(lib.fact(-1)).toBe(-1);
});