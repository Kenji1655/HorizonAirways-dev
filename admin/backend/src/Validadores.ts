import { Aeronave } from "./Aeronave";
import { Aeroporto } from "./Aeroporto";
import { Voo } from "./Voo";
import { Trecho } from "./Trecho";

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

  if(mensagem === ""){
    valida = true;
  }

  return [valida, mensagem] as const;
}

export function aeroportoValida(aero: Aeroporto) {

  let valida = false;
  let mensagem = "";

  if(aero.nome === undefined){
    mensagem = "Nome não informado";
  }

  if(aero.sigla === undefined){
    mensagem = "Sigla não informada.";
  }

  if(aero.cidade === undefined){
    mensagem = "Cidade não informada";
  }

  if(aero.pais === undefined){
    mensagem = "País não informado";
  }

  if(mensagem === ""){
    valida = true;
  }

  return [valida, mensagem] as const;
}

export function VooValida(aero: Voo) {

  let valida = false;
  let mensagem = "";

  if(aero.trecho === undefined){
    mensagem = "Trecho não informado";
  }

  if(aero.data === undefined){
    mensagem = "Data não informada.";
  }

  if(aero.valor === undefined){
    mensagem = "Valor não informado";
  }

  if(aero.assento === undefined){
    mensagem = "Assento não informado";
  }

  if(mensagem === ""){
    valida = true;
  }

  return [valida, mensagem] as const;
}

export function TrechoValida(aero: Trecho) {

  let valida = false;
  let mensagem = "";

  if(aero.nome === undefined){
    mensagem = "Nome não informado";
  }

  if(aero.origem === undefined){
    mensagem = "Origem não informada.";
  }

  if(aero.destino === undefined){
    mensagem = "Destino não informado";
  }

  if(aero.aeronave === undefined){
    mensagem = "Aeronave não informada";
  }

  if(mensagem === ""){
    valida = true;
  }

  return [valida, mensagem] as const;
}