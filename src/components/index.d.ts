import { ReactNode, FunctionComponent, SVGProps, FC } from "react";

export declare global {
    interface SideMenuItem {
        id: number;
        title: string;
        url: string;
        icon: FunctionComponent<
            SVGProps<SVGSVGElement> & {
                title?: string | undefined;
            }
        >;
        state?: { preloader?: boolean; commonPath?: string };
    }

    type FormWrapper = FC<{
        title: string;
        children: ReactNode;
        link?: string;
        width?: number;
        padding?: string;
    }>

    type Form = FC<{
        children: JSX.Element | JSX.Element[];
        linksAfterButton?: JSX.Element;
        noAccounts?: JSX.Element
        layout?: string;
        afterSubmit: (data: any) => void;
        beforeSubmit?: () => void;
        values: any;
        method?: string;
        mainButton: {
            preloader?: ButtonPreloader;
            disabled?: boolean;
            fullWidth?: boolean;
            name: string;
        };
        noSend?: boolean;
        autoComplete?: string;
    }>
}