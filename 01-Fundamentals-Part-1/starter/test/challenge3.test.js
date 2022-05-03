const { avgScore, winner } = require('../src/challenge3');

test("An average score of 1, 3, 5 is 3", () => {
    expect(avgScore([1,3,5])).toBe(3);
});

test("A team with higher score wins the game", () => {
    let winningTeam = {
        name: 'Dolphins',
        score: [96, 108, 89]
    };
    let losingTeam = {
        name: 'Koalas',
        score: [88, 91, 110]
    };

    expect(winner(winningTeam, losingTeam)).toStrictEqual([]);

    winningTeam = {
        name: 'Koalas',
        score: [109, 95, 123]
    }
    losingTeam = {
        name: 'Dolphins',
        score: [97, 112, 101]
    };

    expect(winner(winningTeam, losingTeam)).toStrictEqual([winningTeam]);
    expect(winner(losingTeam, winningTeam)).toStrictEqual([winningTeam]);
    
    winningTeam = {
        name: 'Dolphins',
        score: [97, 112, 101]
    };
    losingTeam = {
        name: 'Koalas',
        score: [109, 95, 106]
    };

    expect(winner(winningTeam, losingTeam)).toStrictEqual([winningTeam, losingTeam]);
})