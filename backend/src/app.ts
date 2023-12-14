// Importando as bibliotecas
import express from "express";
import cors from "cors";
import oracledb from "oracledb";
import dotenv from "dotenv";

// Estabelecendo mensagem de erro
type CustomResponse = {
  status: string,
  message: string,
  payload: any
};

// Estabelecendo a conexão com o banco de dados
dotenv.config();
const oraConnAttribs: oracledb.ConnectionAttributes = {
  user: process.env.ORACLE_USER,
  password: process.env.ORACLE_PASSWORD,
  connectString: `${process.env.ORACLE_HOST}:${process.env.ORACLE_PORT}/${process.env.ORACLE_DB}`
};

// Definindo variaveis express
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// -------------------------- Destinados a pagina do administrador ---------------------------------------


// ---------------------------- CRUD de Aeronaves ---------------------------------------
app.put('/cadastrarAeronave/:1/:2/:3/:4/:5', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const query = `INSERT INTO AERONAVES(REF, TOTAL_DE_ASSENTOS, MODELO, MARCA, ANO_FABRICACAO) 
VALUES('${req.params[1]}', ${req.params[2]}, '${req.params[3]}', '${req.params[4]}', ${req.params[5]})`;
    await connection.execute(query);
    await connection.commit();
    cr.status = "SUCCESS"; 
    cr.message = "Aeronave inserida.";
  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  }finally {
    if(connection!== undefined){
      await connection.close();
    }
    res.send(cr);
  }  
});

app.get('/listarAeronaves', async (req, res) => {
  let connection;
  connection = await oracledb.getConnection(oraConnAttribs);
  let resultadoConsulta = await connection.execute(`SELECT ID_AERONAVE, MODELO, MARCA, ANO_FABRICACAO, TOTAL_DE_ASSENTOS, REF FROM AERONAVES ORDER BY ID_AERONAVE`);
  await connection.close();
  res.send(resultadoConsulta.rows);
});

app.put('/editarAeronave/:ID/:1/:2/:3/:4/:5', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const query = `UPDATE AERONAVES
    SET REF = '${req.params[1]}', TOTAL_DE_ASSENTOS = ${req.params[2]}, MODELO = '${req.params[3]}', MARCA = '${req.params[4]}', ANO_FABRICACAO = ${req.params[5]}
    WHERE ID_AERONAVE = ${req.params.ID}`;
    await connection.execute(query);
    await connection.commit();
    cr.status = "SUCCESS"; 
    cr.message = "Aeronave editada.";
  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  }finally {
    if(connection!== undefined){
      await connection.close();
    }
    res.send(cr);  
  }  
});

app.delete('/deletarAeronave/:ID', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const query = `DELETE FROM AERONAVES WHERE ID_AERONAVE = ${req.params.ID}`;
    await connection.execute(query);
    await connection.commit();
    cr.status = "SUCCESS"; 
    cr.message = "Aeronave deletada.";
  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  }finally {
    if(connection!== undefined){
      await connection.close();
    }
    res.send(cr);  
  }  
});

// ---------------------------- CRUD de Aeroportos ---------------------------------------

app.put('/cadastrarAeroporto/:1/:2/:3/:4/:5', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const query = `INSERT INTO AEROPORTOS (NOME_OFICIAL, COD_IATA, CIDADE, ESTADO, PAIS) VALUES ('${req.params[1]}', '${req.params[2]}', '${req.params[3]}', '${req.params[4]}', '${req.params[5]}')`;
    await connection.execute(query);
    await connection.commit();
    cr.status = "SUCCESS"; 
    cr.message = "Aeroporto inserido.";
  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  }finally {
    if(connection!== undefined){
      await connection.close();
    }
    res.send(cr);  
  }  
});

app.get('/listarAeroportos', async (req, res) => {
  let connection;
  connection = await oracledb.getConnection(oraConnAttribs);
  let resultadoConsulta = await connection.execute(`SELECT * FROM AEROPORTOS ORDER BY ID_AEROPORTO`);
  await connection.close();
  res.send(resultadoConsulta.rows);
});

app.put('/editarAeroporto/:ID/:1/:2/:3/:4/:5', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const query = `UPDATE AEROPORTOS
    SET NOME_OFICIAL = '${req.params[1]}', COD_IATA = '${req.params[2]}', CIDADE = '${req.params[3]}', ESTADO = '${req.params[4]}', PAIS = '${req.params[5]}'
    WHERE ID_AEROPORTO = ${req.params.ID}`;
    await connection.execute(query);
    await connection.commit();
    cr.status = "SUCCESS"; 
    cr.message = "Aeroporto editado.";
  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  }finally {
    if(connection!== undefined){
      await connection.close();
    }
    res.send(cr);  
  }  
});

app.delete('/deletarAeroporto/:ID', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const query = `DELETE FROM AEROPORTOS WHERE ID_AEROPORTO = ${req.params.ID}`;
    await connection.execute(query);
    await connection.commit();
    cr.status = "SUCCESS"; 
    cr.message = "Aeroporto deletado.";
  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  }finally {
    if(connection!== undefined){
      await connection.close();
    }
    res.send(cr);  
  }  
});

// ---------------------------- CRUD de Trechos ---------------------------------------
app.put('/cadastrarTrecho/:1/:2', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    var query = `
    INSERT INTO TRECHOS (ORIGEM, DESTINO) VALUES (${req.params[1]}, ${req.params[2]})`;
    await connection.execute(query);
    await connection.commit();
    cr.status = "SUCCESS"; 
    cr.message = "Aeronave inserida.";
  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  }finally {
    if(connection!== undefined){
      await connection.close();
    }
    res.send(cr);
  }  
});

app.get('/listarTrechos', async (req, res) => {
  let connection;
  connection = await oracledb.getConnection(oraConnAttribs);
  let resultadoConsulta = await connection.execute(`SELECT ID_TRECHO, MODELO, MARCA, ANO_FABRICACAO, TOTAL_DE_ASSENTOS, REF FROM AERONAVES ORDER BY ID_AERONAVE`);
  await connection.close();
  res.send(resultadoConsulta.rows);
});

app.put('/editarAeronave/:ID/:1/:2/:3/:4/:5', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const query = `UPDATE AERONAVES
    SET REF = '${req.params[1]}', TOTAL_DE_ASSENTOS = ${req.params[2]}, MODELO = '${req.params[3]}', MARCA = '${req.params[4]}', ANO_FABRICACAO = ${req.params[5]}
    WHERE ID_AERONAVE = ${req.params.ID}`;
    await connection.execute(query);
    await connection.commit();
    cr.status = "SUCCESS"; 
    cr.message = "Aeronave editada.";
  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  }finally {
    if(connection!== undefined){
      await connection.close();
    }
    res.send(cr);  
  }  
});

app.delete('/deletarTrecho/:ID', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const query = `DELETE FROM TRECHOS WHERE ID_TRECHO = ${req.params.ID}`;
    await connection.execute(query);
    await connection.commit();
    cr.status = "SUCCESS"; 
    cr.message = "Trecho deletado.";
  }catch(e){
    if(e instanceof Error){
      cr.message = e.message;
      console.log(e.message);
    }else{
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  }finally {
    if(connection!== undefined){
      await connection.close();
    }
    res.send(cr);  
  }  
});


// ------------------------------------------- Destinados a pagina do usuário ------------------------------------------

app.get("/listarCidades", async(req,res)=>{
  let connection;
  connection = await oracledb.getConnection(oraConnAttribs);
  let resultadoConsulta = await connection.execute(`SELECT CIDADE, ESTADO, PAIS FROM AEROPORTOS`);
  await connection.close();
  res.send(resultadoConsulta.rows);
});

app.listen(port, function(){
  console.log("Servidor HTTP rodando na porta " + port);
});


// ------------------------------------------- Busca de voos ------------------------------------------
app.post("/buscarVoo", async (req, res) => {
  const dataIda = new Date(req.body.dataIda);
  // pegar somemente a sigla (cod_iata) dos aeroportos
  const aeroportoOrigem = req.body.origem.substring(0, 3);
  const aeroportoDestino = req.body.destino.substring(0, 3);

  console.log('dataIda=', dataIda);
  console.log('aeroportoOrigem =', aeroportoOrigem);
  console.log('aeroportoDestino =', aeroportoDestino);

  let cr = { status: "ERROR", message: "", payload: undefined };

  try {
    const connection = await oracledb.getConnection(oraConnAttribs);
    const resultadoConsulta = await connection.execute(
      "SELECT V.ID_VOO, V.DTH_PARTIDA_PREVISTA, V.DTH_CHEGADA_PREVISTA, O.COD_IATA AS ORIGEM, D.COD_IATA AS DESTINO FROM VOOS V JOIN TRECHOS T ON V.TRECHO = T.ID_TRECHO JOIN AEROPORTOS O ON T.ORIGEM = O.ID_AEROPORTO JOIN AEROPORTOS D ON T.DESTINO = D.ID_AEROPORTO WHERE DTH_PARTIDA_PREVISTA = :dataIda AND O.COD_IATA = :aeroportoOrigem AND D.COD_IATA = :aeroportoDestino",
      { dataIda, aeroportoOrigem, aeroportoDestino }
    );

    await connection.close();
    res.send(resultadoConsulta.rows);
  } catch (e) {
    console.log("Erro");
    res.send(cr);
  }
});


