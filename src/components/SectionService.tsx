import { Container } from "./Container";
import Image from "next/image";

import Tooth1 from "../assets/tooth1.png"
import Tooth2 from "../assets/tooth2.png"
import Tooth3 from "../assets/tooth3.png"
import Tooth4 from "../assets/tooth4.png"
import Arrow from "../assets/arrow.svg"
import { ServiceDente } from "./ServiceDente";

export function SectionService(){
    return(
        <>
        <section className="bg-[#F7F9FB] mt-36 py-36">
            <Container>
                <div className="topserv flex flex-wrap">
                    <div>
                        <span className="text-base uppercase">top quality</span>
                        <h3 className=" text-6xl mb-6 mt-3 font-bold">Dentistry for the Whole Family</h3>
                    </div>
                    <div>
                        <p className="text-base text-grey-p mb-6 max-w-[580px]">Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div className="botserv">
                    <div>
                        <div className="flex flex-wrap flex-row justify-between mt-9">
                            <ServiceDente
                                imagem={Tooth1}
                                alternativo="teste"
                                titulo="Prevenção e manutenção"
                            />
                            <div className="border-r border-gray-300"></div>
                            <ServiceDente
                                imagem={Tooth2}
                                alternativo="teste"
                                titulo="Implantes dentários"
                            />
                            <div className="border-r border-gray-300"></div>
                            <ServiceDente
                                imagem={Tooth3}
                                alternativo="teste"
                                titulo="Cuidados e outros"
                            />
                            <div className="border-r border-gray-300"></div>
                            <ServiceDente
                                imagem={Tooth4}
                                alternativo="teste"
                                titulo="Agendamento e cuidado"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}