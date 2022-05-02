const { bmi } = require('../src/challenge1');

test("Mark's BMI is higher than John's", () => {
    const mark_measures = {
        mass: 78,
        height: 1.69
    };
    const john_measures = {
        mass: 92,
        height: 1.95
    };
    expect(bmi(mark_measures.mass, mark_measures.height) > bmi(john_measures.mass, john_measures.height))
});

test("John's BMI is higher than Mark's", () => {
    const mark_measures = {
        mass: 95,
        height: 1.88
    };
    const john_measures = {
        mass: 85, 
        height: 1.76
    };
    expect(bmi(john_measures.mass, john_measures.height) > bmi(mark_measures.mass, mark_measures.height))
});