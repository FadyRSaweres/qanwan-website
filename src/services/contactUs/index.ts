import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "../client";
import type {
    IContactUsSection1,
    IContactUsSection2,
} from "@/entity/contactUs";

// ─── GET ─────────────────────────────────────────────
export const useGetContactSection1 = () =>
    useQuery<IContactUsSection1>({
        queryKey: ["contact-section1"],
        queryFn: () => apiFetch("/contact/section1", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetContactSection2 = () =>
    useQuery<IContactUsSection2>({
        queryKey: ["contact-section2"],
        queryFn: () => apiFetch("/contact/section2", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

// ─── UPDATE ──────────────────────────────────────────
export const useUpdateContactSection1 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IContactUsSection1) =>
            apiFetch("/contact/section1", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["contact-section1"] }),
    });
};

export const useUpdateContactSection2 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IContactUsSection2) =>
            apiFetch("/contact/section2", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["contact-section2"] }),
    });
};
