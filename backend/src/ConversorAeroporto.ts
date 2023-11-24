import { Aeroporto } from "./Aeroporto";

export function rowsToAeroportos(oracleRows: unknown[] | undefined) : Array<Aeroporto> {
  let aeroportos: Array<Aeroporto> = [];
  let aeroporto;
  if (oracleRows !== undefined){
    oracleRows.forEach((registro: any) => {
      aeroporto = {
        codigo: registro.CODIGO,
        nome: registro.NOME,
        sigla: registro.SIGLA,
        cidade: registro.CIDADE,
        pais: registro.PAIS,
      } as Aeroporto;

      aeroportos.push(aeroporto);
    })
  }
  return aeroportos;
}