"use strict";
// enum type
var Level;
(function (Level) {
    Level["junior"] = "Junior";
    Level["mid"] = "Mid";
    Level["senior"] = "Senior";
})(Level || (Level = {}));
// union type (|)
const newDeveloper = {
    name: 'Hulk',
    expertise: 'JavaScript',
    experience: 3,
};
const developer = {
    name: 'Iron Man',
    expertise: 'TypeScript',
    experience: 10,
    leadershipExperience: 7,
    level: Level.senior
};
