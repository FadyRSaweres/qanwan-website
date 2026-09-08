import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "../client";

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    user?: {
        id: number;
        name: string;
        email: string;
    };
}

async function login(data: ILoginRequest): Promise<ILoginResponse> {
    return apiFetch("/auth/login", {
        method: "POST",
        body: data,
        requiredToken: false,
    });
}

export const useLogin = () =>
    useMutation<ILoginResponse, Error, ILoginRequest>({
        mutationFn: login,
    });
