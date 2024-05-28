import Image, {StaticImageData} from "next/image";
import Arrow from "../assets/arrow.svg";

type Props = {
    imagem: StaticImageData | string;
    alternativo: string;
    titulo: string;
};

export function ServiceDente({ imagem, alternativo, titulo }: Props) {
    return (
        <div>
            <Image
                className="h-[75px] w-auto"
                src={imagem}
                alt={alternativo}
            />
            <div className="flex flex-col items-start">
                <h4 className="text-2xl my-4 max-w-40">{titulo}</h4>
                <Image
                    className="h-5 w-auto"
                    src={Arrow}
                    alt="Seta"
                />
            </div>
        </div>
    );
}
