import axios from "axios"

export default async function deleteCliente(idCliente) {
    try {
        const response = await axios.delete(`http://localhost:3333/clientes/${idCliente}`)
        return response
    }
    catch(error){
        console.log(error)
    }
}