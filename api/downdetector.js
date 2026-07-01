export default async function handler(req, res) {
  try {
    const resposta = await fetch("https://downdetector.com/status/youtube/");

    res.status(200).json({
      sucesso: true,
      statusHttp: resposta.status,
      statusTexto: resposta.statusText
    });

  } catch (erro) {

    res.status(500).json({
      sucesso: false,
      erro: erro.message
    });

  }
}
