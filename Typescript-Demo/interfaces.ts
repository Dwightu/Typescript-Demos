interface Reportable {
    summary(): string;
}
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name:${name}`
    }
};


// code reuse with interface
// Create functions that accept arguments that are typed with interfaces
// Objects/classes can devide to 'implement' a given interface to work with a function
const cocodrink = {
    name: 'cococola',
    color: 'blue',
    price: 3.5,
    summary(): string {
        return `Name:${name}`
    }
}


const printSummary = (item: Reportable): void => {
    console.log(`Name:${item.summary}`);
}

printSummary(oldCivic);
printSummary(cocodrink);
