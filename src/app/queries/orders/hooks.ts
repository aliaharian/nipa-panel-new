import {useQuery} from "@tanstack/react-query";
import {orderGroupsList, ordersList, orderDetail} from "./services";

const useOrderGroupsList = () => {
    const {data} = useQuery({
        queryKey: ["orderGroups"],
        queryFn: async () => {
            return await orderGroupsList();
        }
    })
    return {
        data
    }
}
const useOrdersList = () => {
    const {data} = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            return await ordersList();
        }
    })
    return {
        data
    }
}
const useOrdersDetail = (id: number) => {
    const {data} = useQuery({
        queryKey: ["order", {"id": id}],
        queryFn: async () => {
            return await orderDetail(id);
        },
    })
    return {
        data
    }
}


export {
    useOrderGroupsList,
    useOrdersList,
    useOrdersDetail
}