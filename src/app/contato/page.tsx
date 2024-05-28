import { Container } from "../../components/Container";

export default function Contato() {
    return(
        <section className="bg-[#F7F9FB] py-16">
            <Container>
                <div id="titulo" className="text-6xl mb-6 font-bold text-center">
                        <h1>Contato</h1>
                </div>
                <div className="py-32">

                    <div id="mid" className="grid grid-cols-1 md:grid-cols-2">
                        <div className="static ">
                            <div id="chamada">
                            <span className="text-base uppercase">Fale com a gente!</span>
                            <h3 className=" text-6xl mb-6 mt-3 font-bold">Tem alguma <br/><span className="text-secondary">dúvida?</span> Pergunte!</h3>
                            </div>
                            <div className="h-auto w-72 bg-white absolute mx-2 my-2 px-3 py-3">
                                <span className="text-base uppercase">Endereço</span>
                                <p className="text-base text-grey-p">Rua exemplo X, 1023 <br/> Fortaleza - Ce</p>
                            </div>
                            <div id="maps" className="bg-bgContatoMap bg-cover w-[746px] h-[665px]">
                            <p></p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl px-16 py-16 h-min">
                            <form className="space-y-4 mb-8">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                                    <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">Whatsapp</label>
                                    <input type="tel" id="number" name="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Assunto</label>
                                    <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"></textarea>
                                </div>
                                <button type="submit" className="bg-primary text-white ">Enviar</button>
                            </form>
                        </div>
                    </div>
                    {/* <div id="bottom">
                        <div className="static">
                            <div>
                                <h3 className="font-bold relative top-1/2">18001234665</h3>
                            </div>
                            <div>
                                <h1 className=" text-9xl font-black absolute">01</h1>
                            </div>
                        </div>
                    </div> */}
                </div>

            </Container>
        </section>
    )
}

