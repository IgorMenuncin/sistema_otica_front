'use client'

import { useForm } from "react-hook-form";
import postClientes from "../utils/functions/postClientes";

export default function Formulario() {
    const { register, handleSubmit, reset} = useForm();
    
    async function onSubmit (data) {
        data.usuario = "Igor"
        try {
            postClientes(data);
            console.log('Cliente criado')
            reset()
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 w-1/2">
                <input {...register("nome")} className="border-2 border-black p-1" placeholder="nome"></input>
                <input {...register("cpf")} className="border-2 border-black p-1" placeholder="cpf"></input>
                <input {...register("data_nascimento")} className="border-2 border-black p-1" placeholder="data_nascimento"></input>
                <input {...register("rua")} className="border-2 border-black p-1" placeholder="rua"></input>
                <input {...register("bairro")} className="border-2 border-black p-1" placeholder="bairro"></input>
                <input {...register("numero")} className="border-2 border-black p-1" placeholder="numero"></input>
                <input {...register("complemento")} className="border-2 border-black p-1" placeholder="complemento"></input>
                <input {...register("municipio")} className="border-2 border-black p-1" placeholder="municipio"></input>
                <input {...register("uf")} className="border-2 border-black p-1" placeholder="uf"></input>
                <input {...register("telefone")} className="border-2 border-black p-1" placeholder="telefone"></input>
                <button type="submit" className="border-2 border-black p-1">Enviar</button>
            </form>
        </div>
    )
}