import { Container } from "./Container";


export function SectionVideo(){
    return(
        <section className="bg-bgImageVideo bg-cover object-center h-[768px] flex items-center justify-center">
                <div className="bg-black p-4 rounded-full flex items-center justify-center w-24 h-24 bg-opacity-40 border hover:cursor-pointer">
                    <h1 className=" text-white">Play</h1>
                </div>
        </section>
    )
}