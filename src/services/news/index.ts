import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../client";
import { NewsItem } from "@/pages/news/types";

export const useGetNews = () =>
    useQuery({
        queryKey: ["useGetNewsKey"],
        queryFn: () => apiFetch<NewsItem>("/news", { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });


export const useGetNewsDetails = (id: string) =>
    useQuery({
        queryKey: ["useGetNewsDetailsKey", id],
        queryFn: () => apiFetch<NewsItem>(`/news/${id}`, { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });