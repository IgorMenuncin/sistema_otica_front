"use client"

import { useState } from "react";
import axios from "axios";

async function getUsuarios () {
    const usuariosRequest = await axios.get("http://localhost:3333/usuarios");
    const usuarios = usuariosRequest.data
    console.log(usuarios);
}

export default function Login () {
    const [ mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div>
            <div className="flex flex-col">
                <label>Email</label>
                <input type="email" className="w-60 border-2 p-2 border-black"></input>
            </div>
            <div className="flex flex-col">
                <label>Senha</label>
                <input type={mostrarSenha ? "text" : "password"} className="w-60 border-2 p-2 border-black"></input>
            </div>
            <button className="border-2 border-black mt-5 p-2" onClick={() => {setMostrarSenha(!mostrarSenha)}}>Mostrar senha</button>
            <button 
                className="border-2 border-black m-5 p-2" 
                onClick={() => {
                    getUsuarios()
                }}
            >Login</button>
        </div>
    )
}