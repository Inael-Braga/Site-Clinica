import Image from "next/image";
import { Container } from "./Container";

import DentistaBV from "../assets/quando-ir-ao-dentista.jpg"


export function SectionBoasVindas(){
    return(
        <>
            <section className=" py-32">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="leftbv">
                            <Image className="w-[520px] h-[642px] object-cover object-center rounded-2xl md:flex-full "
                                src={DentistaBV}
                                alt="teste"
                            />
                            
                        </div>
                        <div className="rightbv flex-col flex h-auto flex-grow justify-center">
                            <span className="text-base uppercase">welcome to Tooth Fairy</span>
                            <h3 className=" text-6xl mb-6 mt-3 font-bold">The Pinnacle of Dental Care</h3>
                            <p className="text-base text-grey-p mb-6">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
                            <div className="flex-col mt-7">
                                <h4 className=" text-2xl"><span className="text-grey-p">01. </span>Cosmetic Dentistry</h4>
                                <hr className=" my-7"></hr>
                                <h4 className=" text-2xl"><span className="text-grey-p">02. </span>Restorative Dentistry</h4>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}