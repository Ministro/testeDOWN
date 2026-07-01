const { chromium } = require("playwright");

async function verificar(servico){

    const browser = await chromium.launch({
        headless: true
    });

    const page = await browser.newPage();

    await page.goto(
        `https://downdetector.com/status/${servico}/`,
        {
            waitUntil:"networkidle"
        }
    );

    const titulo = await page.title();

    await browser.close();

    return {

        sucesso:true,
        titulo

    };

}

module.exports = {
    verificar
};
