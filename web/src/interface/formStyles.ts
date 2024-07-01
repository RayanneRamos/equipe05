export interface FormFieldProps {
    id: string;
    label: string;
    type: 'text' | 'tel' | 'email' | 'date' | 'select';
    options?: { value: string; label: string }[];
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    placeholder?: string;
}