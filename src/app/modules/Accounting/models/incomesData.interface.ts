export interface IncomesData {
  [month: string]: {
    incomes: Income[];
  };
}

export interface Income {
  [key: string]: number;
}
