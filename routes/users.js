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

// router.update("/cadastro", function (req, res, next) {
//   const { nome, disciplina } = req.body;
//   const professor = { nome, disciplina };
//   professores.push(professor);
//   res.redirect("/users");
// });

module.exports = router;
