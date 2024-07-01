'use client'
import FormField from "@/utils/FormField";
import { useModalForm } from '@/hooks/useModalForm';
import { LogoCoders } from "@/assets/TopBar/svg";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function ModalForm() {
    const {
        formData,
        aceitouTermos,
        areaDeInteresseOptions,
        linguagemOptions,
        turnoOptions,
        handleChange,
        handleSubmit,
        handleCheckboxChange,

    } = useModalForm();

    return (
        <div className="xl:w-[882px] xl:h-[860px] flex flex-col items-center mx-auto xl:py-[4.1rem] xl:px-[4.6rem] rounded-3xl">
            <div className="w-full xl:h-[3.6rem] flex justify-end">
                <XMarkIcon className="h-[1.6rem] w-[1.6rem] my-auto xl:mr-[1.379rem]" />
            </div>
            <LogoCoders className="xl:w-[4.8rem] xl:h-[3.2rem] my-[2.5rem]" />
            <h2 className="xl:w-[28.7rem] xl:h-[3.6rem] xl:text-[2.4rem] xl:leading-[3.6rem] font-roboto font-bold">Ingressar na comunidade</h2>
            <form onSubmit={handleSubmit}>
                <fieldset className="xl:mt-[3.2rem]">
                    <legend className="xl:text-[1.6rem] xl:leading-[2.4rem] mx-auto mb-[2.4rem]">
                        Preencha o formulário com suas informações
                    </legend>
                </fieldset>

                <div className="grid grid-cols-1 gap-x-[3.2rem] xl:grid-cols-2 mx-auto text-[1.6rem] leading-[2.4rem]">
                    <FormField
                        id="nome"
                        label="Nome*"
                        type="text"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                    />
                    <FormField
                        id="sobrenome"
                        label="Sobrenome*"
                        type="text"
                        value={formData.sobrenome}
                        onChange={handleChange}
                        placeholder="Digite seu sobrenome"
                    />
                    <FormField
                        id="whatsapp"
                        label="Whatsapp*"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="Digite seu Whatsapp"
                    />
                    <FormField
                        id="email"
                        label="Email*"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Digite seu email"
                    />
                    <FormField
                        id="areaDeInteresse"
                        label="Área de interesse*"
                        type="select"
                        value={formData.areaDeInteresse}
                        onChange={handleChange}
                        options={areaDeInteresseOptions}
                    />
                    <FormField
                        id="linguagem"
                        label="Linguagem"
                        type="select"
                        value={formData.linguagem}
                        onChange={handleChange}
                        options={linguagemOptions}
                    />
                    <FormField
                        id="data"
                        label="Disponibilidade*"
                        type="date"
                        value={formData.data}
                        onChange={handleChange}
                        placeholder="Selecione uma data"
                    />
                    <FormField
                        id="turno"
                        label="Turno"
                        type="select"
                        value={formData.turno}
                        onChange={handleChange}
                        options={turnoOptions}
                    />
                </div>
                <div className="flex items-start xl:mt-[2.5rem]">
                    <input
                        type="checkbox"
                        id="aceitar-termos"
                        className="mr-2 w-[1.5rem] h-[1.5rem] peer relative appearance-none border border-[#404040] rounded-md transition duration-300 checked:bg-[#e53939] checked:border-[#e53939] after:content[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center
                        after:bg-[length:20px]
                        checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]
                        "
                        onChange={handleCheckboxChange}
                        checked={aceitouTermos}
                    />
                    <label htmlFor="aceitar-termos" className="xl:w-[55.8rem] xl:h-[4.2rem] text-[#A3A3A3] text-[1.4rem] leading-[2.1rem] font-manrope">
                        Declaro que li e concordo com os Termos e Condições e com a Política de Privacidade da Código certo coders.
                    </label>
                </div>
                <div className="flex justify-end xl:w-[59.0rem] xl:h-[4.0rem] xl:mt-[2.5rem] xl:gap-[0.8rem] items-center font-manrope">

                    <button
                        className="xl:w-[10.5rem] xl:h-[4.0rem] text-[1.4rem] leading-[3.2rem] text-[#A3A3A3] rounded-lg text-center border border-[#A3A3A3]">
                        Fechar
                    </button>

                    <button
                        type="submit"
                        className="xl:w-[10.5rem] xl:h-[4.0rem] text-[1.4rem] leading-[3.2rem] text-black rounded-lg text-center border border-white bg-white">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}