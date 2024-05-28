import Image, {StaticImageData} from "next/image"

type Props = {
    Profile: StaticImageData | string,
    Alternativo: string,
    nomedr: string,
    cargo: string,
}

export function CardTime({ Profile, Alternativo, nomedr, cargo} : Props) {
    return(
        <div className="card h-[287px] flex-1 min-w-[135px] mb-20">
            <Image className=" rounded-2xl"
                src={Profile}
                alt={Alternativo}
                style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "right"}}
            />
            <div className="mt-3 gap-6">
                <h4 className="text-2xl max-w-40 font-bold">{nomedr}</h4>
                <p>{cargo}</p>
            </div>

        </div>

    )
}