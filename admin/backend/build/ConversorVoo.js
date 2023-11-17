"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowsToVoos = void 0;
function rowsToVoos(oracleRows) {
    let voos = [];
    let voo;
    if (oracleRows !== undefined) {
        oracleRows.forEach((registro) => {
            voo = {
                codigo: registro.CODIGO,
                trecho: registro.TRECHO,
                data: registro.DATA,
                valor: registro.VALOR,
                assento: registro.ASSENTO,
            };
            voos.push(voo);
        });
    }
    return voos;
}
exports.rowsToVoos = rowsToVoos;
