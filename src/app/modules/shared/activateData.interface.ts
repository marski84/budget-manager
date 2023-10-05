export interface ActivateDataInterface {
  value: {
    name: string,
    value: number,
    extra: {
      [key: string]: number;
    },
    label: string
  },
  entries: []
}
