interface FormFieldProps {
    label: string;
    value: string;
    onChange: (val: string) => void;
    type?: "text" | "textarea" | "number" | "email" | "url" | "tel";
    placeholder?: string;
    span?: boolean; // full-width
}

const FormField = ({
    label,
    value,
    onChange,
    type = "text",
    placeholder,
    span,
}: FormFieldProps) => (
    <div className={`admin-field ${span ? "admin-field-span" : ""}`}>
        <label>{label}</label>
        {type === "textarea" ? (
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={3}
            />
        ) : (
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        )}
    </div>
);

export default FormField;
