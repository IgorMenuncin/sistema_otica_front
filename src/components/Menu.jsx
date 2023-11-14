import ItemMenu from './ItemMenu.jsx'

export default function Menu () {
    return (
        <div className="h-full min-h-screen bg-cyan-400 px-2 py-5 rounded-r-lg">
            <ItemMenu descricao="Pagina Inicial" href="/"/>
            <ItemMenu descricao="Clientes" href="/clientes/viewClientes" />
            <ItemMenu descricao="Receitas" href="/receitas/viewReceitas" />
        </div>
    )
}