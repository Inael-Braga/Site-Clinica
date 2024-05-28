import { Container } from "./Container";

export function SectionHero(){
    return(
        <section className="w-full h-[768px] bg-img-hero bg-no-repeat bg-cover bg-center object-contain flex items-center">
            <Container>
                <div className="max-w-[400px] h-auto items-center font-bold text-grey">
                    <h1 className="text-7xl">The <span className="text-primary">leading</span> dentistry</h1>
                    <p>Conheça nosso time e se prepare pro melhor!</p>
                    <button className="mt-7">Agendar consulta</button>
                </div>

            </Container>
        </section>
    )
}
