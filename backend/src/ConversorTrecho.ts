import { Trecho } from "./Trecho";

export function rowsToTrecho(oracleRows: unknown[] | undefined) : Array<Trecho> {
  let trechos: Array<Trecho> = [];
  let trecho;
  if (oracleRows !== undefined){
    oracleRows.forEach((registro: any) => {
      trecho = {
        codigo: registro.CODIGO,
        nome: registro.NOME,
        origem: registro.ORIGEM,
        destino: registro.DESTINO,
        aeronave: registro.AERONAVE,
      } as Trecho;

      trechos.push(trecho);
    })
  }
  return trechos;
}