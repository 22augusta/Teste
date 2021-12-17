const app = require("./src/app")
const port = 8080;

app.listen(port, () => {
    console.log(`Servidor esta rodando na porta ${port}`);
});
