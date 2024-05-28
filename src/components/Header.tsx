import Image from "next/image";

import LogoSite from '@/assets/LogoSite.jpg';
import { MenuList } from "./MenuList";


export function Header() {
    return(
        <>
            <header>
                <div className="w-full max-w-[1200px] px-4 mx-auto flex items-center gap-4 justify-between">
                    <div className="logosite h-28 flex items-center">
                        <Image className=" w-min h-20"
                            src={LogoSite}
                            alt="logo"
                        />
                    </div>
                    <div className="menusite">
                        <ul className="flex gap-8">
                                <MenuList
                                    nome="Início"
                                    linkUrl="/"
                                />
                                <MenuList
                                    nome="Sobre"
                                    linkUrl="#"
                                />
                                <MenuList
                                    nome="Contato"
                                    linkUrl="/contato"
                                />
                        </ul>
                    </div>
                </div>

            </header>
        </>

    )
}