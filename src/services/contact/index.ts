import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../client";
import { NewsItem } from "@/pages/news/types";
import { EventItem } from "@/pages/mockData/events";
import { CompanyContact } from "@/pages/mockData/contact";

export const useGetCompanyInfo = () =>
    useQuery({
        queryKey: ["useGetCompanyInfoKey"],
        queryFn: () => apiFetch<CompanyContact>("/contact", { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });
