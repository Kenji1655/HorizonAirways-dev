"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowsToAeroportos = void 0;
function rowsToAeroportos(oracleRows) {
    let aeroportos = [];
    let aeroporto;
    if (oracleRows !== undefined) {
        oracleRows.forEach((registro) => {
            aeroporto = {
                codigo: registro.CODIGO,
                nome: registro.NOME,
                sigla: registro.SIGLA,
                cidade: registro.CIDADE,
                pais: registro.PAIS,
            };
            aeroportos.push(aeroporto);
        });
    }
    return aeroportos;
}
exports.rowsToAeroportos = rowsToAeroportos;
