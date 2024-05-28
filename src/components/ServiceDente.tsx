import Image, {StaticImageData} from "next/image";
import Arrow from "../assets/arrow.svg";

type Props = {
    imagem: StaticImageData | string;
    alternativo: string;
    titulo: string;
};

export function ServiceDente({ imagem, alternativo, titulo }: Props) {
    return (
        <div className="flex flex-col items-center md:items-start">
            <Image
                className="h-[75px] w-min"
                src={imagem}
                alt={alternativo}
            />
            <div className="flex flex-col">
                <h4 className="text-2xl my-4 lg:max-w-40">{titulo}</h4>
                <Image
                    className="h-5 w-full md:w-min"
                    src={Arrow}
                    alt="Seta"
                />
            </div>
        </div>
    );
}
