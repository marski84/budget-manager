export interface IncomesData {
  [month: string]: {
    incomes: {
      [key: string]: number;
    }[];
  };
}
