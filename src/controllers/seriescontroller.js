const { response, request } = require("express");
const series = require("../models/series.json")

//definindo rota padrão

const home = (request, response) =>{
    response.status(200).send({
        "mensagem": "Bom dia, Brasil. Boa tarde, Italia"
    })
};

const getAll = (request, response) => {

    response.status(200).send(series)
}

const getById =(request, response) =>{
    const requestedId = requested.params.id 
    const filteredId =  series.find(serie => serie.id == requestedId)
    response.status(200).send(filteredId)
}

const getByTtitle = (request, response) => {

    const requestedTitle = request.query.title.toLowerCase()
    const filteredTitle =  series.find(serie => serie.title.toLocaleLowerCase().includes(requestedTitle))

    if(requestedTitle === ""|| filteredTitle === undefined){
        response.status(4004).send({

            "message": "Titulo inválido, tente novamente"
        }
        
        )
    } else{
        response.status(200).send(filteredTitle)
    }
}

const getByGenre = (request, response) =>{
    const requestedGenre = request.query.genre 
    let serieList = []

    series.forEach(serie =>{
        let genreList = series.genre.split(",")

        for(const genre of genreList){
            if(genre.includes(requestedGenre)){
                serieList.push(serie)
            }
        }
    })
    response.status(200).send(serieList)
}

module.exports = {
    home,
    getAll,
    getById,
    getByTtitle,
    getByGenre
}