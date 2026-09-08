import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../client";
import { IHomeSection1 } from "../types";

async function getHomeSection1(): Promise<any> {
    return apiFetch(`/home/section1`, {
        method: "GET",
        requiredToken: false,
    });
}


export const useGetHomeSection1Api = () => {
    const query = useQuery<IHomeSection1[]>({
        queryKey: ['useGetAllKidsApi'],
        queryFn: () => getHomeSection1(),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });
    return query;
};