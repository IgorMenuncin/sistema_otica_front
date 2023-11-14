import Link from "next/link";
import Formulario from "../../../components/Formulario"

export default function createClient () {
    return (
        <div>
            <p>Página para Criar cliente</p>
            <Formulario />
            <Link href="/clientes/viewClientes">
                <button className="border-2 border-black">Voltar a página de clientes</button>
            </Link>
        </div>
    )
}