import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "../client";
import type {
    IAboutUsSection1,
    IAboutUsSection2,
    IAboutUsSection3,
    IAboutUsCeoMsg,
} from "@/entity/aboutUs";

// ─── GET ─────────────────────────────────────────────
export const useGetAboutSection1 = () =>
    useQuery<IAboutUsSection1>({
        queryKey: ["about-section1"],
        queryFn: () => apiFetch("/about/section1", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetAboutSection2 = () =>
    useQuery<IAboutUsSection2>({
        queryKey: ["about-section2"],
        queryFn: () => apiFetch("/about/section2", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetAboutSection3 = () =>
    useQuery<IAboutUsSection3>({
        queryKey: ["about-section3"],
        queryFn: () => apiFetch("/about/section3", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetAboutCeoMsg = () =>
    useQuery<IAboutUsCeoMsg>({
        queryKey: ["about-ceo"],
        queryFn: () => apiFetch("/about/ceo-message", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

// ─── UPDATE ──────────────────────────────────────────
export const useUpdateAboutSection1 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IAboutUsSection1) =>
            apiFetch("/about/section1", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["about-section1"] }),
    });
};

export const useUpdateAboutSection2 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IAboutUsSection2) =>
            apiFetch("/about/section2", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["about-section2"] }),
    });
};

export const useUpdateAboutSection3 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IAboutUsSection3) =>
            apiFetch("/about/section3", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["about-section3"] }),
    });
};

export const useUpdateAboutCeoMsg = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IAboutUsCeoMsg) =>
            apiFetch("/about/ceo-message", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["about-ceo"] }),
    });
};
