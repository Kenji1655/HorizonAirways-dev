"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowsToTrecho = void 0;
function rowsToTrecho(oracleRows) {
    let trechos = [];
    let trecho;
    if (oracleRows !== undefined) {
        oracleRows.forEach((registro) => {
            trecho = {
                codigo: registro.CODIGO,
                nome: registro.NOME,
                origem: registro.ORIGEM,
                destino: registro.DESTINO,
                aeronave: registro.AERONAVE,
            };
            trechos.push(trecho);
        });
    }
    return trechos;
}
exports.rowsToTrecho = rowsToTrecho;
