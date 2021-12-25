export type RucClientResponse = {
  data: Person[];
  total: number;

}

export type Person = {
  ruc: string;
  denomination: string;
}