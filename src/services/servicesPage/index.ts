import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "../client";
import type {
    IServicesSection1,
    IServicesSection2,
    IServicesSection3,
    IServicesSection4,
} from "@/entity/services";

// ─── GET ─────────────────────────────────────────────
export const useGetServicesSection1 = () =>
    useQuery<IServicesSection1>({
        queryKey: ["services-section1"],
        queryFn: () => apiFetch("/services/section1", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetServicesSection2 = () =>
    useQuery<IServicesSection2>({
        queryKey: ["services-section2"],
        queryFn: () => apiFetch("/services/section2", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetServicesSection3 = () =>
    useQuery<IServicesSection3>({
        queryKey: ["services-section3"],
        queryFn: () => apiFetch("/services/section3", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetServicesSection4 = () =>
    useQuery<IServicesSection4>({
        queryKey: ["services-section4"],
        queryFn: () => apiFetch("/services/section4", { method: "GET" }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

// ─── UPDATE ──────────────────────────────────────────
export const useUpdateServicesSection1 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IServicesSection1) =>
            apiFetch("/services/section1", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["services-section1"] }),
    });
};

export const useUpdateServicesSection2 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IServicesSection2) =>
            apiFetch("/services/section2", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["services-section2"] }),
    });
};

export const useUpdateServicesSection3 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IServicesSection3) =>
            apiFetch("/services/section3", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["services-section3"] }),
    });
};

export const useUpdateServicesSection4 = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: IServicesSection4) =>
            apiFetch("/services/section4", { method: "PUT", body: data, requiredToken: true }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["services-section4"] }),
    });
};
