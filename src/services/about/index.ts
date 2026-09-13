import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../client";
import { HomeSection, StatItem } from "@/pages/mockData/home";
import { IResponse } from "../client";
import { NewsItem } from "@/pages/news/types";
import { AboutItem, InvestmentModelItem, InvestmentSector } from "@/pages/mockData/about";
import { Partner } from "@/pages/mockData/partners";

// ─── GET ─────────────────────────────────────────────
export const useGetAboutData = () =>
    useQuery({
        queryKey: ["useGetAboutDataKey"],
        queryFn: () => apiFetch<AboutItem>("/about", { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });


export const useGetHomeCounters = () =>
    useQuery({
        queryKey: ["useGetHomeCountersKey"],
        queryFn: () => apiFetch<StatItem>("/counter", { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });


export const useGetSliders = () =>
    useQuery({
        queryKey: ["useGetSlidersKey"],
        queryFn: () => apiFetch<NewsItem>("/news", { method: "GET", requiredToken: false }),
        // filter: (data) => data.data.filter((item) => item.add_to_slider === true),
        select: (data) => data.data.filter((item) => item.add_to_slider === true),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });


export const useGetInvestModels = () =>
    useQuery({
        queryKey: ["useGetInvestModelsKey"],
        queryFn: () => apiFetch<InvestmentModelItem>("/investment", { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetInvestments = () =>
    useQuery({
        queryKey: ["useGetInvestmentsKey"],
        queryFn: () => apiFetch<InvestmentSector>("/company-invest", { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

export const useGetParteners = () =>
    useQuery({
        queryKey: ["useGetInvestmentsKey"],
        queryFn: () => apiFetch<Partner>("partners", { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });
