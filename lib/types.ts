export type RucClientResponse = {
  data: Person[];
  total: number;

}

export type Person = {
  ruc: string;
  denomination: string;
}

export type RucPyResponse = {
  c_ruc: string;
  c_razon_social: string,
  b_facturador: string,
  n_grupo: string,
  d_fecha_obligatoriedad: string;
}