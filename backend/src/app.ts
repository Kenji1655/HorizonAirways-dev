import express from "express";
import oracledb from "oracledb";
import cors from "cors";

import { CustomResponse } from "./CustomResponse";
import { Aeronave } from "./Aeronave";
import { Aeroporto } from "./Aeroporto";
import { Voo } from "./Voo";
import { Trecho } from "./Trecho";

import { oraConnAttribs } from "./OracleConnAtribs";

import { rowsToAeronaves } from "./ConversorAeronave";
import { rowsToAeroportos } from "./ConversorAeroporto";
import { rowsToVoos } from "./ConversorVoo";

import { aeronaveValida } from "./Validadores";
import { aeroportoValida } from "./Validadores";
import { VooValida } from "./Validadores";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

//---------------------------------------Aeronaves---------------------------------------
app.get("/listarAeronaves", async(req,res)=>{

  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);

    let resultadoConsulta = await connection.execute(`SELECT * FROM AERONAVES`); 
  
    cr.status = "SUCCESS"; 
    cr.message = "Dados obtidos";
    cr.payload = (rowsToAeronaves(resultadoConsulta.rows));

  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  } finally {
    if(connection !== undefined){
      await connection.close();
    }
    res.send(cr);  
  }
});

app.put("/inserirAeronave", async(req,res)=>{
  
  let cr: CustomResponse = {
    status: "ERROR",
    message: "",
    payload: undefined,
  };

  const aero: Aeronave = req.body as Aeronave;
  console.log(aero);

  let [valida, mensagem] = aeronaveValida(aero);
  if(!valida) {
    cr.message = mensagem;
    res.send(cr);
  } else {
    let connection;
    try{
      const cmdInsertAero = `INSERT INTO AERONAVES 
      (CODIGO, FABRICANTE, MODELO, ANO_FABRICACAO, TOTAL_ASSENTOS, REFERENCIA)
      VALUES
      (SEQ_AERONAVES.NEXTVAL, :1, :2, :3, :4, :5)`
      const dados = [aero.fabricante, aero.modelo, aero.anoFabricacao, aero.totalAssentos, aero.referencia];
  
      connection = await oracledb.getConnection(oraConnAttribs);
      let resInsert = await connection.execute(cmdInsertAero, dados);
      
      await connection.commit();
    
      const rowsInserted = resInsert.rowsAffected
      if(rowsInserted !== undefined &&  rowsInserted === 1) {
        cr.status = "SUCCESS"; 
        cr.message = "Aeronave inserida.";
      }
  
    }catch(e){
      if(e instanceof Error){
        cr.message = e.message;
        console.log(e.message);
      }else{
        cr.message = "Erro ao conectar ao oracle. Sem detalhes";
      }
    } finally {
      if(connection!== undefined){
        await connection.close();
      }
      res.send(cr);  
    }  
  }
});

app.delete("/excluirAeronave", async(req,res)=>{
  const codigo = req.body.codigo as number;
 
  console.log('Codigo recebido: ' + codigo);

  let cr: CustomResponse = {
    status: "ERROR",
    message: "",
    payload: undefined,
  };

  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const cmdDeleteAero = `DELETE AEROPORTOS WHERE codigo = :1`
    const dados = [codigo];

    let resDelete = await connection.execute(cmdDeleteAero, dados);
    
    await connection.commit();
    
    const rowsDeleted = resDelete.rowsAffected
    if(rowsDeleted !== undefined &&  rowsDeleted === 1) {
      cr.status = "SUCCESS"; 
      cr.message = "Aeronave excluída.";
    }else{
      cr.message = "Aeronave não excluída. Verifique se o código informado está correto.";
    }

  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  } finally {
    if(connection!==undefined)
      await connection.close();

    res.send(cr);  
  }
});

//---------------------------------------Aeroportos---------------------------------------
app.get("/listarAeroportos", async(req,res)=>{

  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);

    let resultadoConsulta = await connection.execute(`SELECT * FROM AEROPORTOS`); 
  
    cr.status = "SUCCESS"; 
    cr.message = "Dados obtidos";
    cr.payload = (rowsToAeroportos(resultadoConsulta.rows));

  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  } finally {
    if(connection !== undefined){
      await connection.close();
    }
    res.send(cr);  
  }
});

app.put("/inserirAeroporto", async(req,res)=>{
  
  let cr: CustomResponse = {
    status: "ERROR",
    message: "",
    payload: undefined,
  };

  const aero: Aeroporto = req.body as Aeroporto;
  console.log(aero);

  let [valida, mensagem] = aeroportoValida(aero);
  if(!valida) {
    cr.message = mensagem;
    res.send(cr);
  } else {
    let connection;
    try{
      const cmdInsertAero = `INSERT INTO AEROPORTOS 
      (CODIGO, NOME, SIGLA, CIDADE, PAIS)
      VALUES
      (SEQ_AERONAVES.NEXTVAL, :1, :2, :3, :4)`
      const dados = [aero.nome, aero.sigla, aero.cidade, aero.pais];
  
      connection = await oracledb.getConnection(oraConnAttribs);
      let resInsert = await connection.execute(cmdInsertAero, dados);
      
      await connection.commit();
    
      const rowsInserted = resInsert.rowsAffected
      if(rowsInserted !== undefined &&  rowsInserted === 1) {
        cr.status = "SUCCESS"; 
        cr.message = "Aeroporto inserido.";
      }
  
    }catch(e){
      if(e instanceof Error){
        cr.message = e.message;
        console.log(e.message);
      }else{
        cr.message = "Erro ao conectar ao oracle. Sem detalhes";
      }
    } finally {
      if(connection!== undefined){
        await connection.close();
      }
      res.send(cr);  
    }  
  }
});

app.delete("/excluirAeroporto", async(req,res)=>{
  const codigo = req.body.codigo as number;
 
  console.log('Codigo recebido: ' + codigo);

  let cr: CustomResponse = {
    status: "ERROR",
    message: "",
    payload: undefined,
  };

  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const cmdDeleteAero = `DELETE AEROPORTOS WHERE codigo = :1`
    const dados = [codigo];

    let resDelete = await connection.execute(cmdDeleteAero, dados);
    
    await connection.commit();
    
    const rowsDeleted = resDelete.rowsAffected
    if(rowsDeleted !== undefined &&  rowsDeleted === 1) {
      cr.status = "SUCCESS"; 
      cr.message = "Aeroporto excluído.";
    }else{
      cr.message = "Aeroporto não excluído. Verifique se o código informado está correto.";
    }

  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  } finally {
    if(connection!==undefined)
      await connection.close();

    res.send(cr);  
  }
});

//-------------------------------------------Voo------------------------------------------
app.get("/listarVoos", async(req,res)=>{
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);

    let resultadoConsulta = await connection.execute(`SELECT * FROM VOOS`); 
  
    cr.status = "SUCCESS"; 
    cr.message = "Dados obtidos";
    cr.payload = (rowsToVoos(resultadoConsulta.rows));

  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  } finally {
    if(connection !== undefined){
      await connection.close();
    }
    res.send(cr);  
  }
});

app.put("/inserirVoo", async(req,res)=>{
  
  let cr: CustomResponse = {
    status: "ERROR",
    message: "",
    payload: undefined,
  };

  const aero: Voo = req.body as Voo;
  console.log(aero);

  let [valida, mensagem] = VooValida(aero);
  if(!valida) {
    cr.message = mensagem;
    res.send(cr);
  } else {
    let connection;
    try{
      const cmdInsertAero = `INSERT INTO VOOS 
      (CODIGO, TRECHO, DATA, VALOR, ASSENTO)
      VALUES
      (SEQ_AERONAVES.NEXTVAL, :1, :2, :3, :4)`
      const dados = [aero.trecho, aero.data, aero.valor, aero.assento];
  
      connection = await oracledb.getConnection(oraConnAttribs);
      let resInsert = await connection.execute(cmdInsertAero, dados);
      
      await connection.commit();
    
      const rowsInserted = resInsert.rowsAffected
      if(rowsInserted !== undefined &&  rowsInserted === 1) {
        cr.status = "SUCCESS"; 
        cr.message = "Voo inserido.";
      }
  
    }catch(e){
      if(e instanceof Error){
        cr.message = e.message;
        console.log(e.message);
      }else{
        cr.message = "Erro ao conectar ao oracle. Sem detalhes";
      }
    } finally {
      if(connection!== undefined){
        await connection.close();
      }
      res.send(cr);  
    }  
  }
});

app.delete("/excluirVoo", async(req,res)=>{
  const codigo = req.body.codigo as number;
 
  console.log('Codigo recebido: ' + codigo);

  let cr: CustomResponse = {
    status: "ERROR",
    message: "",
    payload: undefined,
  };

  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const cmdDeleteAero = `DELETE VOOS WHERE codigo = :1`
    const dados = [codigo];

    let resDelete = await connection.execute(cmdDeleteAero, dados);
    
    await connection.commit();
    
    const rowsDeleted = resDelete.rowsAffected
    if(rowsDeleted !== undefined &&  rowsDeleted === 1) {
      cr.status = "SUCCESS"; 
      cr.message = "Voo excluído.";
    }else{
      cr.message = "Voo não excluído. Verifique se o código informado está correto.";
    }

  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  } finally {
    if(connection!==undefined)
      await connection.close();

    res.send(cr);  
  }
});

app.listen(port,()=>{
  console.log("Servidor HTTP funcionando...");
});