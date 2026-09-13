import { useQuery } from "@tanstack/react-query";
import { NewsItem } from "@/pages/news/types";
import { EventItem } from "@/pages/mockData/events";
import { apiFetch } from "./client";

export const useGetInitiatives = () =>
    useQuery({
        queryKey: ["useGetInitiativesKey"],
        queryFn: () => apiFetch<EventItem>("/initiative", { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });

