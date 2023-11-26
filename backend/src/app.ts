// Importando as bibliotecas
import express from "express";
import cors from "cors";
import oracledb from "oracledb";
import dotenv from "dotenv";
import { CustomResponse } from "./CustomResponse";

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
// Incerção de aeronaves
app.put('/cadastrarAeronave/:1/:2/:3/:4', async (req, res) => {
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  try{
    connection = await oracledb.getConnection(oraConnAttribs);
    const query = `INSERT INTO AERONAVES (REF, TOTAL_DE_ASSENTOS, MODELO, MARCA) VALUES ('${req.params[1]}', ${req.params[2]}, '${req.params[3]}', '${req.params[4]}')`;
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


// ----------------------------- Destinados a pagina do usuário ------------------------------------------
// Listar cidades
app.get("/listarCidades", async(req,res)=>{
  let cr: CustomResponse = {status: "ERROR", message: "", payload: undefined,};
  let connection;
  connection = await oracledb.getConnection(oraConnAttribs);
  let resultadoConsulta = await connection.execute(`SELECT CIDADE, ESTADO FROM AEROPORTOS`); 
  res.send(resultadoConsulta.rows);
});

app.listen(port, function(){
  console.log("Servidor HTTP rodando na porta " + port);
});
