import { Container } from "./Container";
import Image from "next/image";

import Profile from "@/assets/bg-hero.jpg";
import { CardTime } from "./CardTime";
import { profile } from "console";

export function SectionTime(){
    return(
        <section className="my-36">
            <Container>
                <div className="flex flex-col justify-center text-center ">
                    <span className="text-base uppercase">top quality</span>
                    <h3 className=" text-6xl font-bold mb-12">Time de Profissionais</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <CardTime
                        Profile={Profile}
                        Alternativo="Doutor X"
                        nomedr="Fulano"
                        cargo="Dentista chefe"
                        />
                        <CardTime
                        Profile={Profile}
                        Alternativo="Doutor X"
                        nomedr="Fulano"
                        cargo="Dentista chefe"
                        />
                        <CardTime
                        Profile={Profile}
                        Alternativo="Doutor X"
                        nomedr="Fulano"
                        cargo="Dentista chefe"
                        />
                        <CardTime
                        Profile={Profile}
                        Alternativo="Doutor X"
                        nomedr="Fulano"
                        cargo="Dentista chefe"
                        />
                </div>
            </Container>
        </section>
    )
}