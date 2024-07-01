import { LogoCoders } from "@/assets/TopBar/svg";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function ModalForm() {
    return (
        <div className="xl:w-[882px] xl:h-[860px] flex flex-col items-center mx-auto xl:py-[4.1rem] xl:px-[4.6rem] rounded-3xl">
            <div className="w-full xl:h-[3.6rem] flex justify-end">
                <XMarkIcon className="h-[1.6rem] w-[1.6rem] my-auto xl:mr-[1.379rem]" />
            </div>
            <LogoCoders className="xl:w-[4.8rem] xl:h-[3.2rem] my-[2.5rem]" />
            <h2 className="xl:w-[28.7rem] xl:h-[3.6rem] xl:text-[2.4rem] xl:leading-[3.6rem] font-roboto font-bold">Ingressar na comunidade</h2>
            <form>
                <fieldset className="xl:mt-[3.2rem]">
                    <legend className="xl:text-[1.6rem] xl:leading-[2.4rem] mx-auto mb-[2.4rem]">
                        Preencha o formulário com suas informações
                    </legend>
                </fieldset>

                <div className="grid grid-cols-1 gap-x-[3.2rem] xl:grid-cols-2 mx-auto text-[1.6rem] leading-[2.4rem]">
                    <div className="flex flex-col xl:w-[28.0rem] h-[8.4rem]">
                        <label htmlFor="nome" className="mb-[1.2rem]">Nome*</label>
                        <input
                            type="text"
                            id="nome"
                            className="xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className="flex flex-col xl:w-[28.0rem] h-[8.4rem]">
                        <label htmlFor="sobrenome" className="mb-[1.2rem]">Sobrenome*</label>
                        <input
                            type="text"
                            id="sobrenome"
                            className="xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent"
                            placeholder="Digite seu sobrenome"
                        />
                    </div>
                    <div className="flex flex-col xl:w-[28.0rem] h-[8.4rem]">
                        <label htmlFor="whatsapp" className="mb-[1.2rem]">Whatsapp*</label>
                        <input
                            type="tel"
                            id="whatsapp"
                            className="xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent"
                            placeholder="Digite seu Whatsapp"
                        />
                    </div>
                    <div className="flex flex-col xl:w-[28.0rem] h-[8.4rem]">
                        <label htmlFor="email" className="mb-[1.2rem]">Email*</label>
                        <input
                            type="email"
                            id="email"
                            className="xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div className="flex flex-col xl:w-[28.0rem] h-[8.4rem]">
                        <label htmlFor="area-de-interesse" className="mb-[1.2rem]">Área de interesse*</label>
                        <select
                            id="area-de-interesse"
                            className="xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-white"
                        >
                            <option value="" disabled selected className="bg-[#111114] text-white">Selecione uma opção</option>
                            <option value="Frontend" className="bg-[#111114] text-white">Frontend</option>
                            <option value="Backend" className="bg-[#111114] text-white">Backend</option>
                            <option value="QA" className="bg-[#111114] text-white">QA</option>
                            <option value="Banco-de-dados" className="bg-[#111114] text-white">Banco de dados</option>
                            <option value="Ux-UI" className="bg-[#111114] text-white">Ux/UI</option>
                        </select>
                    </div>
                    <div className="flex flex-col xl:w-[28.0rem] h-[8.4rem]">
                        <label htmlFor="linguagem" className="mb-[1.2rem]">Linguagem</label>
                        <select
                            id="linguagem"
                            className="xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-white"
                        >
                            <option value="" disabled selected className="bg-[#111114] text-white">Selecione uma opção</option>
                            <option value="JavaScript" className="bg-[#111114] text-white">JavaScript</option>
                            <option value="Java" className="bg-[#111114] text-white">Java</option>
                            <option value="Python" className="bg-[#111114] text-white">Python</option>
                            <option value="CSharp" className="bg-[#111114] text-white">CSharp</option>
                        </select>
                    </div>
                    <div className="flex flex-col xl:w-[28.0rem] h-[8.4rem]">
                        <label htmlFor="data" className="mb-[1.2rem]">Disponibilidade*</label>
                        <input
                            type="date"
                            id="data"
                            className="xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-white"
                            placeholder="Selecione uma data"
                        />
                    </div>
                    <div className="flex flex-col xl:w-[28.0rem] h-[8.4rem]">
                        <label htmlFor="turno" className="mb-[1.2rem]">Turno</label>
                        <select
                            id="turno"
                            className="xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-white"
                        >
                            <option value="" disabled selected className="bg-[#111114] text-white">Selecione uma opção</option>
                            <option value="Manhã" className="bg-[#111114] text-white">Manhã</option>
                            <option value="Tarde" className="bg-[#111114] text-white">Tarde</option>
                            <option value="Noite" className="bg-[#111114] text-white">Noite</option>
                        </select>
                    </div>

                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="aceitar-termos"
                        className="mr-2"
                    />
                    <label htmlFor="aceitar-termos" className="xl:w-[55.8rem] xl:h-[4.2rem] text-[1.4rem] leading-[2.1rem] font-manrope">
                        Declaro que li e concordo com os Termos e Condições e com a Política de Privacidade da Código certo coders.
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>


        </div>
    );
}