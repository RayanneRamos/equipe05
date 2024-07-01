import { useState } from "react";
import { FormData } from "@/interface/formData";

export const useModalForm = () => {
    const initialFormData: FormData = {
        nome: '',
        sobrenome: '',
        whatsapp: '',
        email: '',
        areaDeInteresse: '',
        linguagem: '',
        data: '',
        turno: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [aceitouTermos, setAceitouTermos] = useState(false);

    const handleCheckboxChange = () => {
        setAceitouTermos(!aceitouTermos);
    };

    const areaDeInteresseOptions = [
        { value: 'Frontend', label: 'Frontend' },
        { value: 'Backend', label: 'Backend' },
        { value: 'QA', label: 'QA' },
        { value: 'Banco-de-dados', label: 'Banco de dados' },
        { value: 'Ux-UI', label: 'Ux/UI' },
    ];

    const linguagemOptions = [
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Java', label: 'Java' },
        { value: 'Python', label: 'Python' },
        { value: 'CSharp', label: 'CSharp' },
    ];

    const turnoOptions = [
        { value: 'Manhã', label: 'Manhã' },
        { value: 'Tarde', label: 'Tarde' },
        { value: 'Noite', label: 'Noite' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/formulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Formulário enviado com sucesso!');
                setFormData(initialFormData); // Reinicia o formulário após o envio
            } else {
                alert('Erro ao enviar o formulário.');
            }
        } catch (error) {
            alert('Erro ao enviar o formulário.');
        }
    };

    return {
        formData,
        aceitouTermos,
        areaDeInteresseOptions,
        linguagemOptions,
        turnoOptions,
        handleChange,
        handleSubmit,
        handleCheckboxChange
    };
};
