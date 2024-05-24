var express = require("express");
var router = express.Router();

let professores = [];

router.get("/", function (req, res, next) {
  res.render("professores", { title: "Lista de Professores", professores });
});

router.get("/cadastro", function (req, res, next) {
  res.render("cadastro-professor", { title: "Cadastro Professor" });
});

router.post("/cadastro", function (req, res, next) {
  const { nome, disciplina } = req.body;
  const professor = { nome, disciplina };
  professores.push(professor);
  res.redirect("/users");
});

router.delete("/", function(req, res, next){
  const professorId = parseInt(req.params.id, 10);
  professores = professores.filter(p => p.id !== professorId);
  res.redirect("/users");
});

module.exports = router;
