const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const port = 3001;

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "98451",
  database: "sistec"
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conectado ao MySQL");
  }
});

app.use(cors());
app.use(express.json());

app.get("/cadastro", (req, res) => {
  const query = "SELECT * FROM cadastro";
  db.query(query, (err, rows) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json(rows);
    }
  });
});

app.get("/cadastro/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM cadastro WHERE idcadastro = ?";

  db.query(query, [id], (err, rows) => {
    if (err) {
      console.error("Erro ao executar a consulta: ", err);
      res.status(500).json({ error: "Erro interno do servidor" })
    } else {
      if (rows.length === 0) {
        res.status(404).json({ error: "Cliente não encontrado" });
      } else {
        res.json(rows[0]);
      }
    }
  });
});

app.post("/cadastro", (req, res) => {
  const { rzSocial, nmFantasia, endereco, numero, bairro, compEndereco, estado, cidade, cep, fones, email, rg, cnpj, setor, inscEstadual, inativo } = req.body;
  const query = "INSERT INTO cadastro (rzSocial, nmFantasia, endereco, numero, bairro, compEndereco, estado, cidade, cep, fones, email, rg, cnpj, setor, inscEstadual, inativo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(query, [rzSocial, nmFantasia, endereco, numero, bairro, compEndereco, estado, cidade, cep, fones, email, rg, cnpj, setor, inscEstadual, inativo], (err, result) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      const novoCadastro = {
        rzSocial: rzSocial,
        nmFantasia: nmFantasia,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        compEndereco: compEndereco,
        estado: estado,
        cidade: cidade,
        cep: cep,
        fones: fones,
        email: email,
        rg: rg,
        cnpj: cnpj,
        inativo: inativo,
        setor: setor,
        inscEstadual: inscEstadual
      };
      res.json(novoCadastro);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor está em execução em http://localhost:${port}`);
});
