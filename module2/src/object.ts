const user1: {
    company: 'Programming Hero';    // literal type (using a fixed value for this property)
    name: string;
    readonly age: number;         // it can be read but cannot be changed
    isMarried: boolean;
    wife?: string;              // wife is the optional value here
} = {
    company: 'Programming Hero',
    name: 'Jamal',
    age: 55,
    isMarried: true,
    wife: "Anwara"
};

// user1.age = 12;   // error: can't be assigned because it is a read-only property