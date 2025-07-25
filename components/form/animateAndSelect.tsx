import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import ErrorMessage from './errorMessage';
import { Label } from '@/components/ui/label';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { errorAnimation, selectAnimation } from '@/constents/constents';

interface Option {
    value: string;
    label: string;
}

interface SelectWrapperProps<T extends FieldValues> {
    label: string;
    options: Option[];
    name: Path<T>;
    control: Control<T>;
    placeholder: string;
    error?: string;
    disabled?: boolean;
    showWhen?: boolean;
    onCustomChange?: (value: string) => void;
}

const SelectWrapper = <T extends FieldValues>({
    label,
    options,
    name,
    control,
    placeholder,
    error,
    disabled = false,
    showWhen = true,
    onCustomChange
}: SelectWrapperProps<T>) => {
    if (!showWhen) return null;

    return (
        <motion.div
            className="w-full space-y-1"
            variants={selectAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
        >
            <Label>{label}</Label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        onValueChange={(value) => {
                            field.onChange(value);
                            if (onCustomChange) {
                                onCustomChange(value);
                            }
                        }}
                        value={field.value}
                        disabled={disabled}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            <AnimatePresence mode="wait">
                                {options.map((option) => (
                                    <motion.div
                                        key={option.value}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <SelectItem value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </SelectContent>
                    </Select>
                )}
            />
            <AnimatePresence mode="wait">
                {error && (
                    <motion.div
                        variants={errorAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                    >
                        <ErrorMessage message={error} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SelectWrapper;