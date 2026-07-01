const express = require("express");
const { verificar } = require("./scraper");

const app = express();

app.use(express.static("public"));

app.get("/status", async (req, res) => {
    try {

        const dados = await verificar("youtube");

        res.json(dados);

    } catch (e) {

        res.json({
            erro: true,
            mensagem: e.message
        });

    }
});

app.listen(3000, () => {
    console.log("Servidor iniciado");
});
