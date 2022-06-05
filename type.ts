/**
 * Dynamically get the interface or type alias property 
 * value types from conditional types in TypeScript?
 */

interface Person{
  name: string;
  salary: string;
}

interface Person1{
  name: string;
  salary: number
}

type GetSalaryByPerson<T> = T extends { salary: infer value } ? value : never;

type SalaryType = GetSalaryByPerson<Person>;  // string
type SalaryType1 = GetSalaryByPerson<Person1>;  // number


// Choose only string type

type GetSalaryByType<T> = T extends { salary: string } ? string : never;
type SalaryTyp = GetSalaryByPerson<Person>; // string



/***************** Exclude ***************/
// a simple union type
type AcceptedValues = "Hello" | "Hi" | 43 | true;

// make a new type by removing the values of 43
// and true using the Exclude utility type
type RefinedTypes = Exclude<AcceptedValues, 43 | true>;


/****************************** Omit ********************************/
// a simple interface
interface Person {
  name: string;
  age: number;
  dob: string;
  salary: string;
}

// make new type by omiting the salary
// property from the Person interface
// using the Omit utility type
type NecessaryDetails = Omit<Person, "salary">;

/*
Content of NecessaryDetails type
{
    name: string;
    age: number;
    dob: string;
}
*/

/*********** Picking certain properties from another type in TypeScript **************/
// make new type by picking the name
// and age properties from the Person interface
// using the Pick utility type
type NecessaryDetail = Pick<Person, "name" | "age">;

/*
Content of NecessaryDetails type

{
    name: string;
    age: number;
} */


/******** make an object type that accepts only certain strings as keys in TypeScript? ********/

// a string literal union type composed of
// cats, dogs and tigers string
type Animals = "cats" | "dogs" | "tigers";

// make an object type where the keys should be of
// ObjectKeys type and values should be of any string value type
type AnimalSounds = Record<Animals, string>;

// make an animals sounds object
const animalSounds: AnimalSounds = {
  cats: "meow",
  dogs: "bow",
  tigers: "roar",
  // ❌ Error.
  // Object literal may only specify known properties,
  // and 'lions' does not exist in type 'AnimalSounds'.
  lions: "roar"
};

/*** Make every property in a type alias or interface to readonly or required or optional  properties ****/
type ReadonlyPerson = Readonly<Person>; 
type RequiredPerson = Required<Person>;
type PartialPerson = Partial<Person>;

/******** Get the object type from an array of objects ********/
const arrOfObj = [{name: 'name', age: 23}]
type demoObj = typeof arrOfObj[1];

/****Make object type from another object type keys in TypeScript *****/
type AllPropertyStringPerson = {
  [Value in keyof Person]: string;
};

/* type AllPropertyStringPerson = {
    name: string;
    salary: string;
    age: string;
    dob: string;
}
 */


/****** Make a map object type from a union type  *************/

type Colors = "blue" | "green" | "red" | "yellow";
// make a map object type from Colors union type
// we are using the in operator inside the
// Index Signature syntax brackets to iterate though
type MapObjectType = { [Color in Colors]: string };

// if you hover the MapObjectType type you will see this 👇🏽
/*
type MapObjectType = {
    blue: string;
    green: string;
    red: string;
    yellow: string;
}
*/

