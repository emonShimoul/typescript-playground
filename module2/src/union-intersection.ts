type NoobDeveloper = {
    name: string
};

// intersection type (&)
type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number

};

// enum type
enum Level {
    junior = 'Junior',
    mid = 'Mid',
    senior = 'Senior'
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: Level
}

// union type (|)
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Hulk',
    expertise: 'JavaScript',
    experience: 3,
};
const developer: NextLevelDeveloper = {
    name: 'Iron Man',
    expertise: 'TypeScript',
    experience: 10,
    leadershipExperience: 7,
    level: Level.senior
}