import { Aeronave } from "./Aeronave";

export function aeronaveValida(aero: Aeronave) {

  let valida = false;
  let mensagem = "";

  if(aero.fabricante === undefined){
    mensagem = "Fabricante não informado";
  }

  if(aero.fabricante !== 'Embraer' && aero.fabricante !== 'Airbus' && aero.fabricante !== 'Boeing'){
    mensagem = "Fabricante deve ser: Embraer, Airbus ou Boeing.";
  }

  if(aero.modelo === undefined){
    mensagem = "Modelo não informado.";
  }

  if(aero.totalAssentos === undefined){
    mensagem = "Total de assentos não informado";
  }

  if((aero.totalAssentos !== undefined) && (aero.totalAssentos < 100 || aero.totalAssentos > 1000)){
    mensagem = "Total de assentos é inválido";
  }

  if(aero.anoFabricacao === undefined){
    mensagem = "Ano de fabricação não informado";
  }

  if((aero.anoFabricacao!== undefined) && (aero.anoFabricacao < 1990 || aero.anoFabricacao > 2026)){
    mensagem = "Ano de fabricação deve ser entre 1990 e 2026";
  }

  if(aero.referencia === undefined){
    mensagem = "Referência da aeronave não fornecida.";
  }

  // se passou em toda a validação.
  if(mensagem === ""){
    valida = true;
  }

  return [valida, mensagem] as const;
}