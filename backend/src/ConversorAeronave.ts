import { Aeronave } from "./Aeronave";

export function rowsToAeronaves(oracleRows: unknown[] | undefined) : Array<Aeronave> {
  let aeronaves: Array<Aeronave> = [];
  let aeronave;
  if (oracleRows !== undefined){
    oracleRows.forEach((registro: any) => {
      aeronave = {
        codigo: registro.CODIGO,
        fabricante: registro.FABRICANTE,
        modelo: registro.MODELO,
        anoFabricacao: registro.ANO_FABRICACAO,
        totalAssentos: registro.TOTAL_ASSENTOS,
        referencia: registro.REFERENCIA,
      } as Aeronave;

      aeronaves.push(aeronave);
    })
  }
  return aeronaves;
}