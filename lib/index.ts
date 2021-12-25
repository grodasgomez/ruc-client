import { parse } from 'node-html-parser';
import axios from 'axios';
import { Person, RucClientResponse } from './types';

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
  const resp = await axios.post(URL, params.toString(), {
    headers,
  });

  // The response is a HTML, so we need to parse it
  const root = parse(resp.data);


  // Get the data from the response
  const data: Person[] = [];
  for (let i = 1; i < root.childNodes.length; i = i + 2) {
    const ruc =
      root.childNodes[i].childNodes[1].childNodes[0].rawText.trim();
    const denomination =
      root.childNodes[i].childNodes[3].childNodes[0].rawText.trim();

    data.push({ ruc, denomination });
  }
  const total = data.length;

  return { data, total };
}
