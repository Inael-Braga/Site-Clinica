import Image from "next/image";
import { Container } from "./Container";

import DentistaBV from "../assets/quando-ir-ao-dentista.jpg"


export function SectionBoasVindas(){
    return(
        <>
            <section className="py-8">
                <Container>
                    <div className="flex flex-row flex-wrap gap-36 md:flex-row">
                        <div className="leftbv md:w-1/2">
                            {/* <div className="card w-[341px] h-[235px] bg-primary rounded-2xl flex align-middle items-center justify-center text-4xl text-light">
                                <p>Impeccable quality, great service</p>
                            </div> */}
                            <Image className="w-[520px] h-[642px] object-cover object-center rounded-2xl "
                                src={DentistaBV}
                                alt="teste"
                            />
                            
                        </div>
                        <div className="md:w-1/3 rightbv flex-col flex h-auto flex-grow justify-center">
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