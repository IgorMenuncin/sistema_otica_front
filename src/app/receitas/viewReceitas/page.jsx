import Link from "next/link";

export default function receitas () {
    return (
        <div>
            <p>Pagina Receitas</p>
            <Link href="/receitas/createReceitas">
                <button className="border-2 border-black">Criar receita</button>
            </Link>
        </div>
    )
}