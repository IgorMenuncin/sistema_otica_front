'use client'

export default function Button (props) {
    return (
        <button onClick={props.funcao}>{props.descricao}</button>
    )
}