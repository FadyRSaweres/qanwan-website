import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "../client";
import type {
    IHomeSection1,
    IHomeSection2,
    IHomeSection3,
    IHomeSection4,
    IHomeSection5,
} from "@/entity/home";

// ─── GET ─────────────────────────────────────────────
export const useGetHomeSection1 = () =>
    useQuery<IHomeSection1>({
        queryKey: ["home-section1"],
        queryFn: () => apiFetch("/home/section1", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetHomeSection2 = () =>
    useQuery<IHomeSection2>({
        queryKey: ["home-section2"],
        queryFn: () => apiFetch("/home/section2", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetHomeSection3 = () =>
    useQuery<IHomeSection3>({
        queryKey: ["home-section3"],
        queryFn: () => apiFetch("/home/section3", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetHomeSection4 = () =>
    useQuery<IHomeSection4>({
        queryKey: ["home-section4"],
        queryFn: () => apiFetch("/home/section4", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetHomeSection5 = () =>
    useQuery<IHomeSection5>({
        queryKey: ["home-section5"],
        queryFn: () => apiFetch("/home/section5", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

// ─── UPDATE ──────────────────────────────────────────
export const useUpdateHomeSection1 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IHomeSection1) =>
            apiFetch("/home/section1", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["home-section1"] }),
    });
};

export const useUpdateHomeSection2 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IHomeSection2) =>
            apiFetch("/home/section2", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["home-section2"] }),
    });
};

export const useUpdateHomeSection3 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IHomeSection3) =>
            apiFetch("/home/section3", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["home-section3"] }),
    });
};

export const useUpdateHomeSection4 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IHomeSection4) =>
            apiFetch("/home/section4", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["home-section4"] }),
    });
};

export const useUpdateHomeSection5 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IHomeSection5) =>
            apiFetch("/home/section5", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["home-section5"] }),
    });
};
