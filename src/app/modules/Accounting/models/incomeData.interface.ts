export interface IncomeData {
  [key: string]: {
    incomes: Income[];
  };
}

interface Income {
  [key: string]: number;
}
