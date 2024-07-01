import React from 'react';
import { FormFieldProps } from "@/interface/formStyles";

const FormField: React.FC<FormFieldProps> = ({
    id,
    label,
    type,
    options,
    value,
    onChange,
    placeholder,
}) => {
    const inputClasses = 'xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-white';
    const selectClasses = 'xl:w-[28.0rem] xl:h-[4.8rem] xl:rounded-[0.8rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-[#A3A3A3]';

    const optionClasses = 'bg-transparent text-[#A3A3A3]';

    return (
        <div className="flex flex-col xl:w-[28.0rem] h-[8.4rem]">
            <label htmlFor={id} className="mb-[1.2rem]">
                {label}
            </label>
            {type === 'select' ? (
                <select
                    id={id}
                    className={selectClasses}
                    value={value}
                    onChange={onChange}
                >
                    <option value="" disabled className={optionClasses}>
                        Selecione uma opção
                    </option>
                    {options?.map((option) => (
                        <option key={option.value} value={option.value} className={optionClasses}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    className={inputClasses}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
};

export default FormField;
