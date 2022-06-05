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
