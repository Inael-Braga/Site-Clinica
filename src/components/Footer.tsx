import { Container } from "./Container";

export function Footer(){
    return(
        <section className=" min-h-min bg-dark text-grey">
            <Container>
                <div className="grid md:grid-cols-2 pt-32 pb-16 gap-10">
                    <div className="min-h-min flex justify-center items-center">
                        <form className="flex w-full">
                            <input
                            type="email"
                            placeholder="Adicione seu email"
                            className="p-2 rounded-l-lg border-none focus:outline-none flex-grow md:flex-none"
                            />
                            <button
                            type="submit"
                            className="p-2 bg-primary text-white rounded-r-lg rounded-l-none hover:bg-primary hover:text-secondary"
                            >
                            Inscrever-se
                            </button>
                        </form>
                    </div>
                    <div className="min-h-min text-white">
                        <h1 className=" text-5xl mb-14">Inovação, tecnologia e ótimos dentistas</h1>
                        <div className="grid grid-cols-3">
                            <div id="Social">
                                <ul className="space-y-3">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Whatsapp</a></li>
                                </ul>
                            </div>
                            <div id="Menu">
                                <ul className="space-y-3">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Contato</a></li>
                                </ul>
                            </div>
                            <div id="DigaOi">
                                <p><a href="#">inael@inael.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="text-white">
                    <p className="text-center py-4">Inael Braga © 2024. All Rights Reserved.</p>
                </div>
            </Container>
        </section>
    )
}