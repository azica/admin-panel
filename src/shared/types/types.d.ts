import { FC } from "react";

declare global {

    namespace Model {
        interface ImageProps {
            url: string;
            name: string;
        }

        interface User {
            fullName: string;
            avatar: ImageProps | null;
            role: RoleProps[];
            phone: string;
            id: number;
            // status ?: StatusProps;
            email: string | null;
            registrationDate?: string;
            color: string;
            token: string;
            navigation?: string[];
        }
    }

}