import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../client";
import { NewsItem } from "@/pages/news/types";

export const useGetSliders = () =>
    useQuery({
        queryKey: ["useGetSlidersKey"],
        queryFn: () => apiFetch<NewsItem>("/news", { method: "GET", requiredToken: false }),
        // filter: (data) => data.data.filter((item) => item.add_to_slider === true),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });
