const gamesLista = require("../model/games.json")

const getGames = (request, response) => {
    return response.status(200).send(gamesLista)
}

const gamesById = (request, response) => {
    let id = request.params.id
    const gameNaLista = gamesLista.find(game => game.id == id)

    if (gameNaLista) {
        return response.status(200).send(gameNaLista)
    } else {
        return response.status(404).send("Jogo não encontrado! Insira novamente o id:")
    }
}

const atualizar=(request,response)=>{
    const gameAtualizado=request.body
    const id=request.params.id

    const gamesId=gamesLista.map(game=>game.id)
    
    const atualizaId=gamesId.indexOf(id)

    const gameAtualizadocomId={id,...gameAtualizado}
    gamesLista.splice(atualizaId,1,gameAtualizadocomId)

    response.status(200).send(gamesLista.find(game=>game.id==id))
    console.log(gamesLista)
}

/*const gamesUpdate = (request, require) => {
    const gameAtualizado = request.body
    let id = parseInt(request.params.id)
    const gameParaAtualizar = gamesLista.find(game => game.id == id)
Object.keys(gameAtualizado).forEach((chave)=>{
    gameParaAtualizar[chave]=gameAtualizado[chave]
})
return response.status(200).send(gameParaAtualizar)
}*/

module.exports = {
    getGames,
    gamesById,
    atualizar
    //gamesUpdate
}

/*const getBySigla = (request, response) => {
    const siglaEstado = request.params.siglaEstado
    return response.status(200).send(estados.filter(estado => estado.sigla == siglaEstado))

}*/