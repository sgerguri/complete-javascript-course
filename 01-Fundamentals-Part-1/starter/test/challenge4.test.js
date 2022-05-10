const { tip, tipMsg } = require('../src/challenge4');

test("A tip is 15% if the bill is within 50 and 200", () => {
    expect(tip(50)).toBe(7.5);
    expect(tip(200)).toBe(30);
    expect(tip(120)).toBe(18);
});

test("A tip is 20% if the bill is less than 50", () => {
    expect(tip(0)).toBe(0);
    expect(tip(49)).toBe(9.8);
    expect(tip(301)).toBe(60.2);
});

test("A tip message is formatted correctly", () => {
    expect(tipMsg(50)).toBe("The bill was 50, the tip was 7.5, and the total value 57.5");
    expect(tipMsg(0)).toBe("The bill was 0, the tip was 0, and the total value 0");
    expect(tipMsg(301)).toBe("The bill was 301, the tip was 60.2, and the total value 361.2");
});