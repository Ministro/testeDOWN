const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/status", (req, res) => {

    res.json({
        sucesso: true,
        mensagem: "Servidor funcionando!"
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado");
});
