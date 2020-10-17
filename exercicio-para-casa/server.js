const app = require('../exercicio-para-casa/src/app')

const PORT = 5001

app.listen(PORT, function (request, response) {
    console.log("O Nosso app esta rodando na porta " + PORT)
})

