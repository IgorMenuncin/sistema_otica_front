// props:
//     reg: valor a ser inserido no register
//     texto: texto do input
//     type: tipo do input

export default function Input(props) {
    return (
        <div>
            <input {...register(`${props.reg}`)} type={props.type}>{props.texto}</input>
        </div>
    )
}