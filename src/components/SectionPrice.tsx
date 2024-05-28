import { Container } from "./Container";

export function SectionPrice(){
    return(
        <section className="bg-[#F7F9FB] py-36">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-wrap gap-4 order-2 md:order-2">
                        <div className="flex grow flex-col h-auto bg-white text-center py-12 px-12 mb-10 rounded-2xl">
                            <h3 className="text-2xl font-bold">Gold Pack</h3>
                            <p>Beatae vitae dicta sunt.</p>
                            <h2 className="text-5xl font-bold my-4">R$ 99<span className="text-2xl">/Mês</span></h2>
                            <ul className="space-y-2">
                                <li>Nemo enim ipsum</li>
                                <li>Voluptes vit</li>
                                <li>Beatas vitae dicta</li>
                            </ul>
                            <button className="mt-7">Get Now</button>
                        </div>
                        <div className="flex grow flex-col h-auto bg-white text-center py-12 px-12 mt-10 rounded-2xl">
                            <h3 className="text-2xl font-bold">Gold Pack</h3>
                            <p>Beatae vitae dicta sunt.</p>
                            <h2 className="text-5xl font-bold my-4">R$ 99<span className="text-2xl">/Mês</span></h2>
                            <ul className="space-y-2">
                                <li>Nemo enim ipsum</li>
                                <li>Voluptes vit</li>
                                <li>Beatas vitae dicta</li>
                            </ul>
                            <button className="mt-7">Get Now</button>
                        </div>
                    </div>
                    
                    <div className="order-1 md:order-1">
                        <span className="text-base uppercase">top quality</span>
                        <h3 className="text-6xl my-3 font-bold">Dentistry for the Whole Family</h3>
                        <p className="text-base text-grey-p mb-6 max-w-[580px]">Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
