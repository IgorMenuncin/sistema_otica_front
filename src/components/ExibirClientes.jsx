'use client'

import { useState } from "react"
import getClientes from '../utils/functions/getClientes';
import deleteCliente from "../utils/functions/deleteCliente";

export default function ExibirClientes () {
    const [clientes, setClientes] = useState([]);
    const [list, setList] = useState(false);

    async function carregarClientes () {
        setClientes(await getClientes())
    }
    
    return (
        <div className="mt-5 mb-10">
            <button onClick={() => {
                setList(!list)
                carregarClientes()
            }}>Listar clientes</button>
            {list ? clientes.map((cliente, index) => 
                <div key={index} className="border border-black grid grid-cols-10">
                    <p className="col-span-5">{cliente.nome}</p>
                    <p className="col-span-4">{cliente.id}</p>
                    <button className="col-span-1" onClick={async () => {
                        await deleteCliente(cliente.id)
                        carregarClientes()
                    }}>Deletar</button>
                </div>
            ) : null}
        </div>
    )
}