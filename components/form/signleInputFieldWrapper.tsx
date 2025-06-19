import { useFormContext, FieldValues } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { errorAnimation } from "@/app/constents/constents";
import ErrorMessage from "./errorMessage";

interface ValidatedInputFieldProps {
    id: keyof FieldValues;
    label: string;
    placeholder: string;
    type?: string; // Default is "text"
    className?: string;
    errorMessage?: string; // Pass the error message directly
    showError?: boolean;
}

const SignleInputFieldWrapper: React.FC<ValidatedInputFieldProps> = ({
    id,
    label,
    placeholder,
    type = "text",
    className,
    errorMessage,
    showError
}) => {
    const { register } = useFormContext<FieldValues>();

    return (
        <div className="w-full">
            <div className="flex flex-col gap-2">
                {label ? <Label className="space-x-2" htmlFor={id}>{label}</Label> : null}
                <Input

                    id={id as string}
                    type={type}
                    {...register(id, {
                        valueAsNumber: type === "number",


                    })}
                    onKeyDown={(e) => {
                        if (type === "number") {
                            // Allow decimal point, but prevent multiple decimal points
                            if (e.key === "." && (e.target as HTMLInputElement).value.includes(".")) {
                                e.preventDefault();
                                return;
                            }

                            // Prevent typing of -, +, e, E and other non-digit characters
                            const invalidChars = ['-', '+', 'e', 'E'];
                            if (invalidChars.includes(e.key) ||
                                (![".", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key) &&
                                    !/^\d$/.test(e.key))) {
                                e.preventDefault();
                            }
                        }
                    }}
                    placeholder={placeholder}
                    className={errorMessage || showError ? 'border-red-500' : className}
                />
            </div>
            <AnimatePresence mode="wait">
                {errorMessage && (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={errorAnimation}
                        transition={{ duration: 0.2 }}
                    >
                        <ErrorMessage message={errorMessage} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SignleInputFieldWrapper;