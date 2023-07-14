export interface IncomeItem {
  [key: string]: number;
}

export interface MonthIncomeData {
  incomes: IncomeItem[];
}

export type Income<T> = {
  [key: string]: T;
};

export interface Example {
  [key: string]: MonthIncomeData
}
