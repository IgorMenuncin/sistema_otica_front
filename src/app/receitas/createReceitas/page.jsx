import Link from "next/link";

import Formulario from "../../../components/Formulario"

export default function CreateReceitas () {
    return (
        <div>
            <p>Página para criar receitas</p>
            <Link href="/receitas/viewReceitas">
                <button className="border-2 border-black mt-2">Voltar a pagina de receitas</button>
            </Link>
        </div>
    )
}