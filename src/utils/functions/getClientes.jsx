import axios from "axios"

export default async function getClientes () {
    try {
        const clientesResponse = await axios.get('http://localhost:3333/clientes')
        return clientesResponse.data
    }
    catch (error) {
        console.log(error)
    }
}