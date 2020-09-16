
console.log ('Ex_11');

console.log ('------------- simple ------------');

const printPerson = (name, age) => {
    console.log (`Hi ${name}, you are ${age} years old.`);
}
printPerson('Paul', 74);
printPerson('Gordo', 127);
printPerson('Alex', 45);
printPerson('Eve',4095);

const printSpecs = (name, age, ssn, weight, height, IQ) => 
console.log (`'Hi ${name}, you are ${age} 
,Your ssn is ${ssn} 
,Your weight is ${weight} 
,Your height is ${height} 
,Your IQ is ${IQ}`);

printSpecs('gordo', 54, 34534839, 165, 6, 134);
printSpecs('norma', 34, 3940294, 134, 5, 112);

console.log ('-------------- pet where part of the return is a function ---------------');

const printPet = (owner_name, owner_age, pet_name, pet_age) => {printPerson(owner_name, owner_age);
    console.log (`That person owns ${pet_name} whis is ${pet_age} years old`);
}

printPet ('norma', 45, 'darby boy', 3453);
printPet ('george', 34, 'didlysquat', 2);

console.log (' --------------- freeking callback ----------------');

const fancyPet = (owner_name, owner_age, pet_name, pet_age, cb) => {
    cb(owner_name, owner_age);
    console.log(`That person onws ${pet_name} who is ${pet_age} years old.`);
}

fancyPet ('Zed', 44, 'Mr Gordo', 10,(name,age) => { 
    console.log (`Oooh fancy ${name} you are ${age} old`); 
});
