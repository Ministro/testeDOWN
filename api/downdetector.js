export default async function handler(req, res) {

    res.status(200).json({
        sucesso: true,
        mensagem: "API funcionando!"
    });

}
