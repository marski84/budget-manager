
export interface Data {
  [key: string]: {
    incomes: Income[];
  };
}
interface Income {
  [key: string]: number;
}
