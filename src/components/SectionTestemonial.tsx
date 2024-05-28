import Image from "next/image";
import { Container } from "./Container";
import profileimg from "@/assets/dentista-video.jpg"

export function SectionTestemonial() {
    return(
        <section>
            {/* <Container> */}
                <div className=" w-full grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-primary py-72  text-white text-center flex flex-col justify-center items-center px-8">
                        <h2 className=" text-9xl mb-[-50px]" >"</h2>
                        <p className="max-w-[520px]">A ortodontia fez maravilhas pelo meu sorriso e autoestima. O Dr. Oliveira e sua equipe foram incríveis durante todo o processo. Recomendo a todos!</p>
                        <Image className=" w-20 h-20 object-cover rounded-full my-8"
                            src={profileimg}
                            alt="dentista"
                        />
                        <h4 className="font-bold">Fulanildo Jr.</h4>
                        <p>Cliente</p>

                    </div>
                    <div className="bg-bgImageTestemonial bg-cover bg-center w-auto min-h-screen h-full">
                        
                    </div>
                </div>
            {/* </Container> */}
        </section>
    )
}