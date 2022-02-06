import axios from 'axios';
import {  RucClientResponse, RucPyResponse } from './types';
import { formatResponse } from './format';

const URL = 'https://www.ruc.com.py/index.php/inicio/consulta_ruc';


export const getPersons = async (documentNumber: string): Promise<RucClientResponse> => {
  // Create the url params
  const params = new URLSearchParams();
  params.append('buscar', documentNumber);

  // Create the headers
  const headers = {
    'x-requested-with': 'XMLHttpRequest',
    'content-type': 'application/x-www-form-urlencoded',
  };

  // POST to the api
  const resp = await axios.post<RucPyResponse[]>(URL, params.toString(), {
    headers,
  });


  const data = resp.data.map(formatResponse);
  const total = data.length;

  return { data, total };
}
