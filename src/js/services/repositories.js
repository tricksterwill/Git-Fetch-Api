import { baseUrl, repositiriesQuantity } from '../variables.js'


async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositiriesQuantity}`)
    return await response.json()//AQUI VAMOS PEGAR OS REPOSITORIOS NO GITHUB
}

export{ getRepositories }
