import axios from "axios"

export default async function postClientes(data) {
    await axios.post('http://localhost:3333/clientes', {
        nome: data.nome,
        cpf: data.cpf,
        data_nascimento: data.data_nascimento,
        rua: data.rua,
        bairro: data.bairro,
        numero: data.numero,
        complemento: data.complemento,
        municipio: data.municipio,
        uf: data.uf,
        telefone: data.telefone,
        usuario: data.usuario
    })
}