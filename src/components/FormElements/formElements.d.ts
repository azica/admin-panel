import { FC, ReactNode } from "react";

export declare global {
    type InputOnChange = {
        (value: {
            field: string;
            value: string | number | boolean | string[];
            id: number | string;
            suggestion?: { [name: string]: any };
        }): void;
    }

    type InputData = {
        id: number;
        value: string | number | boolean | string[];
        field: string;
        label?: ReactNode;
        type?: string;
        helperText?: string;
        required?: boolean;
        disabled?: boolean;
        placeholder?: string;
        readOnly?: boolean;
        minLength?: number;
        maxLength?: number;
        invalid?: boolean;
        options?: {
            id?: number;
            name: string;
            value: number | string;
        }[];
        mask?: string;
        maskProps?: {
            maskChar?: string | null;
            maskPlaceholder?: string | null;
        };
        dateProps?: {
            disablePast?: boolean;
            disableFuture?: boolean;
        };
        suggest?: FetchType;
        changeable?: boolean;
        autoComplete?: string;
        textarea?: {
            multiline: boolean;
            rows: number;
        };
        multiple?: boolean;
    }

    type Input = {
        endAdornment?: ReactNode;
        startAdornment?: ReactNode;
        onChange: InputOnChange;
        onKeyDown?: (event: any) => void;
    } & InputDataProps;

    type InputsValue = {
        field: string;
        value: string | number | boolean;
    }

    type Checkbox = FC<{
        id: number | string;
        checked: boolean;
        onChange: CheckboxOnChange;
        field: string;
        label?: any;
        helperText?: string;
        invalid?: boolean;
        disabled?: boolean;
        className?: string;
        value: string | number;
    }>

    type ConsentLabel = FC<{
        centered?: boolean;
    }>

    type CheckboxListItem = {
        id: number;
        label?: string | number;
        checked?: boolean;
        disabled?: boolean;
        value: string | number;
    }

    type CheckboxList = FC<{
        list: CheckboxListItem[];
        searchParamName: string;
    }>

    type CheckboxOnChange = {
        (value: { field: string; value: boolean; id: number | string }): void;
    }

    type Preloader = {
        loading: boolean;
        outside?: boolean;
    }

    type ButtonPreloader = {
        variant?: "outlined" | "contained";
        disabled?: boolean;
    } & Preloader

    type Button = FC<{
        variant?: "outlined" | "contained" | "text";
        color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
        size?: "large" | "small" | "medium"
        type?: "button" | "submit" | "reset";
        disabled?: boolean;
        children: ReactNode;
        secondary?: boolean;
        link?: string;
        uploader?: boolean;
        uploaderProps?: {
            accept?: string;
            value?: string;
            files?: FileList | null;
            multiple?: boolean;
            onChange?: (value: any) => void;
        };
        icon?: ReactNode;
        onClick?: (value: any) => void;
        preloader?: ButtonPreloader;
        fullWidth?: boolean;
        className?: string;
    }>
}