import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../client";
import { NewsItem } from "@/pages/news/types";
import { EventItem } from "@/pages/mockData/events";

export const useGetEvents = () =>
    useQuery({
        queryKey: ["useGetEventsKey"],
        queryFn: () => apiFetch<EventItem>("/activity", { method: "GET", requiredToken: false }),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });


// export const useGetNewsDetails = (id: string) =>
//     useQuery({
//         queryKey: ["useGetNewsDetailsKey", id],
//         queryFn: () => apiFetch<NewsItem>(`/news/${id}`, { method: "GET", requiredToken: false }),
//         retry: 0,
//         staleTime: 5 * 60 * 1000,
//     });