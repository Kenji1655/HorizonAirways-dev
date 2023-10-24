import { Voo } from "./Voo";

export function rowsToVoos(oracleRows: unknown[] | undefined) : Array<Voo> {
  let voos: Array<Voo> = [];
  let voo;
  if (oracleRows !== undefined){
    oracleRows.forEach((registro: any) => {
      voo = {
        codigo: registro.CODIGO,
        trecho: registro.TRECHO,
        data: registro.DATA,
        valor: registro.VALOR,
        assento: registro.ASSENTO,
      } as Voo;

      voos.push(voo);
    })
  }
  return voos;
}