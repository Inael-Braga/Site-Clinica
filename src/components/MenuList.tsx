type Props = {
    nome: string
}

export function MenuList({ nome } : Props) {
    return(
        <li>
                <span className="text-dark">{nome}</span>
        </li>

    )
}