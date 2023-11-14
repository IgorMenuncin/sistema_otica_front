import Link from "next/link";
import ExibirClientes from "../../../components/ExibirClientes";

export default function clientes () {
    return (
        <div>
            <p>Pagina Clientes</p>
            <ExibirClientes />
            <Link href="/clientes/createClientes">
                <button className="border-2 border-black">Criar cliente</button>
            </Link>
        </div>
    )
}