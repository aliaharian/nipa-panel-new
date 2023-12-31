import {useQuery} from "@tanstack/react-query";

import {useCallback} from "react";
import {transactionsList} from "./services";

const useTransactionsList = (page: number = 1, filters?: any) => {
    const removeEmptyFilters = (filters: any) => {
        let tmp: any = {};
        Object.keys(filters).forEach((item) => {
            if (filters[item]) {
                tmp[item] = filters[item]
            }
        })
        return tmp;
    }
    const removeEmptyCallback = useCallback(removeEmptyFilters, []);
    const {data} = useQuery({
        queryKey: ["transactions", {page: page, filters: removeEmptyCallback(filters)}],
        queryFn: async () => {
            return await transactionsList(page, removeEmptyCallback(filters))
        }
    })
    return {
        data
    }
}


export {
    useTransactionsList
}