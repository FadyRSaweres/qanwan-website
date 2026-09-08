import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../client";
import { IHomeSection2 } from "../types";

async function getHomeSection2(): Promise<any> {
    return apiFetch(`/home/section2`, {
        method: "GET",
        requiredToken: false,
    });
}


export const useGetHomeSection2Api = () => {
    const query = useQuery<IHomeSection2[]>({
        queryKey: ['useGetHomeSection2Api'],
        queryFn: () => getHomeSection2(),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });
    return query;
};