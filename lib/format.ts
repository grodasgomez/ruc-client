import {Person, RucPyResponse} from './types';

export function formatResponse(data:RucPyResponse): Person{
  return {
    ruc: data.c_ruc,
    denomination: data.c_razon_social,
  }
}