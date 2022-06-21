// A tuple is a typed array with a pre-defined length and types for each index.



const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 20]

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
}