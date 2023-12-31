import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    acceptFactor,
    acceptFactorByCustomer,
    addFactorItem,
    addPaymentStep,
    deleteFactorItem,
    deletePaymentStep,
    getFactorInfo,
    getFactorPaymentSteps,
    invoicesList,
    payFactor,
    updateFactor,
    updateFactorItem,
    updatePaymentStep
} from "./services";
import {useCallback} from "react";
import transform from "app/utils/transform";

interface FactorData {
    factorInfo: any;
    factorPayments: any;
    factorStatus: any;
}

const useInvoicesList = (page: number = 1, filters?: any) => {
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
        queryKey: ["invoices", {page: page, filters: removeEmptyCallback(filters)}],
        queryFn: async () => {
            return await invoicesList(page, removeEmptyCallback(filters))
        }
    })
    return {
        data
    }
}

const useGetFactor = (factorCode: string) => {
    const {data, isPending} = useQuery<FactorData>({
        queryKey: ["invoice", {code: factorCode}],
        queryFn: async () => {
            const factorInfo = await getFactorInfo(factorCode)
            const paymentSteps = await getFactorPaymentSteps(factorInfo.id)
            const status = factorInfo.last_status?.factor_status_enum;
            const style = transform.renderStatusStyle(status?.description)
            const factorStatus = {
                name: factorInfo.last_status?.factor_status_enum.name,
                slug: factorInfo.last_status?.factor_status_enum.slug,
                style
            }
            return {
                factorInfo: factorInfo,
                factorPayments: paymentSteps,
                factorStatus: factorStatus
            }
        },
    })
    return {
        data,
        isPending
    }
}

const useUpdateFactor = (factorCode: string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["updateInvoice"],
        mutationFn: (data: any) => {
            return updateFactor(data.id, data.data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}
const useAddFactorItem = (factorCode: string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["addInvoiceItem"],
        mutationFn: (data: any) => {
            return addFactorItem(data.id, data.data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}
const useUpdateFactorItem = (factorCode: string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["updateInvoiceItem"],
        mutationFn: (data: any) => {
            return updateFactorItem(data.id, data.data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}

const useDeleteFactorItem = (factorCode: string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["deleteInvoiceItem"],
        mutationFn: (data: any) => {
            return deleteFactorItem(data.id, data.data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}

const useAddPaymentStep = (factorCode: string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["addPaymentStep"],
        mutationFn: (data: any) => {
            return addPaymentStep(data.id, data.data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}
const useUpdatePaymentStep = (factorCode: string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["updatePaymentStep"],
        mutationFn: (data: any) => {
            return updatePaymentStep(data.id, data.data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}
const useDeletePaymentStep = (factorCode: string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["deletePaymentStep"],
        mutationFn: (data: any) => {
            return deletePaymentStep(data.id)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}
const useAcceptFactor = (factorCode: string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["acceptFactor"],
        mutationFn: (data: number) => {
            return acceptFactor(data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}
const useAcceptFactorByCustomer = (factorCode: string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["acceptFactorByCustomer"],
        mutationFn: (data: number) => {
            return acceptFactorByCustomer(data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}
const usePayFactor = (factorCode:string) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["payFactor"],
        mutationFn: (data: any) => {
            return payFactor(data.stepId, data.method,data.fileId)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ["invoice", {code: factorCode}]});
        }
    })
    return {
        mutate
    }
}


export {
    useInvoicesList,
    useGetFactor,
    useUpdateFactor,
    useAddFactorItem,
    useUpdateFactorItem,
    useDeleteFactorItem,
    useAddPaymentStep,
    useUpdatePaymentStep,
    useDeletePaymentStep,
    useAcceptFactor,
    useAcceptFactorByCustomer,
    usePayFactor


}