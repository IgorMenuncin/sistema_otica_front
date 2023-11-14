import Link from "next/link";

export default function ItemMenu (props) {
    return (
        <Link href={props.href}>
            <div className="bg-slate-100 h-10 flex items-center pl-3 cursor-pointer border-b-slate-200 border">
                <p>{props.descricao}</p>
            </div>
        </Link>
    )
}