
type Props = {
    nome: string
    linkUrl: string
}

export function MenuList({ nome, linkUrl } : Props) {
    return(
        <li>
                <span className="text-dark"><a href={linkUrl} >{nome}</a></span>
        </li>

    )
}