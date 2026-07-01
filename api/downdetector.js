export default async function handler(req, res) {
  try {

    const servico = req.query.servico || "youtube";

    const resposta = await fetch(
      `https://downdetector.com/status/${servico}/`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137 Safari/537.36"
        }
      }
    );

    const html = await resposta.text();

    res.status(200).json({
      sucesso: true,
      servico,
      statusHttp: resposta.status,
      tamanhoHtml: html.length,
      primeiros500Caracteres: html.substring(0, 500)
    });

  } catch (erro) {

    res.status(500).json({
      sucesso: false,
      erro: erro.message
    });

  }
}
