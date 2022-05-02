const { bmi } = require('../src/challenge1');
const { format_bmis } = require('../src/challenge2');

test("Mark's BMI is higher than John's", () => {
    const mark_measures = {
        name: "Mark",
        mass: 78,
        height: 1.69
    };
    const john_measures = {
        name: "John",
        mass: 92,
        height: 1.95
    };
    expect(
        format_bmis(
            mark_measures,
            john_measures
            )
    ).toBe("Mark's BMI is higher or equal to John's.")
});

test("John's BMI is higher than Mark's", () => {
    const mark_measures = {
        name: "Mark",
        mass: 95,
        height: 1.88
    };
    const john_measures = {
        name: "John",
        mass: 85, 
        height: 1.76
    };
    expect(
        format_bmis(
            john_measures,
            mark_measures
        )
    ).toBe("John's BMI is higher or equal to Mark's.")
});