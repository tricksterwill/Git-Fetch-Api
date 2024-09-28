import { baseUrl } from "../variables.js"

async function getUser(userName) {//CRIAMOS UMA FUNÇÃO ASSINCRONA 
    const response = await fetch(`${baseUrl}/${userName}`)//USAMOS API DO GITHUB PARA BUSCAR AS INFORMAÇÕES DO USUARIO USANDO O APOSTROFO `${}` PARRA PEGAR OS DADOS DO USUARIO SELECIONADO POR ESSE LINK
    return await response.json()
}

export{ getUser }