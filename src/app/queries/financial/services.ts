import Api from "app/service/Api";
import {factorItem} from "app/models/financial";
import transform from "app/utils/transform";

async function invoicesList(page: number, filters: any) {
    const params = Object.keys(filters || {}).map((key) => filters[key] !== null ? `${key}=${filters[key]}&` : "").join('').slice(0, -1);
    console.log("params", params)
    let response = await Api()?.get(`/factor?page=${page}&${params}`);
    return response?.data;
}


async function getFactorStatuses() {
    let response = await Api()?.get(`/factor/status`);
    return response?.data?.statuses;
}

async function getFactorInfo(code: string) {
    let response = await Api()?.get(`/factor/${code}`);
    return response?.data?.data;
}

async function getFactorPaymentSteps(id: number) {
    let response = await Api()?.get(`/factor/paymentStep?factor_id=${id}`);
    return response?.data;
}

async function addFactorItem(factorId: number, values: factorItem) {
    let response = await Api()?.post(`/factor/${factorId}/factorItem`, {
        "code": values.code,
        "name": values.name,
        "count_type": values.countType,
        "width": values.width,
        "height": values.height,
        "count": values.count,
        "unit_price": values.unitPrice,
        "off_price": values.offPrice,
        "additional_price": values.additionalPrice,
        "description": values.description
    });
    return response?.data;
}

async function updateFactorItem(factorId: number, values: factorItem) {
    let response = await Api()?.put(`/factor/${factorId}/factorItem/${values.id}`, {
        "code": values.code,
        "name": values.name,
        "count_type": values.countType,
        "width": values.width,
        "height": values.height,
        "count": values.count,
        "unit_price": values.unitPrice,
        "off_price": values.offPrice,
        "additional_price": values.additionalPrice,
        "description": values.description
    });
    return response?.data;
}

async function deleteFactorItem(factorId: number, itemId: number) {
    let response = await Api()?.delete(`/factor/${factorId}/factorItem/${itemId}`);
    return response?.data;
}

async function addPaymentStep(factorId: number, values: any) {
    let response = await Api()?.post(`/factor/paymentStep`, {
        "factor_id": factorId,
        "step_number": values.stepNumber,
        "payable_price": values.payablePrice,
        "allow_online": values.isOnline == "online" || values.isOnline == "all" ? true : false,
        "allow_offline": values.isOnline == "offline" || values.isOnline == "all" ? true : false,
        "pay_time": transform.toISOLocal(values.payTime) + " 00:00:00"
    });
    return response?.data;
}

async function updatePaymentStep(factorId: number, values: any) {
    let response = await Api()?.put(`/factor/paymentStep/${values.id}`, {
        "factor_id": factorId,
        "step_number": values.stepNumber,
        "payable_price": values.payablePrice,
        "allow_online": values.isOnline == "online" || values.isOnline == "all" ? true : false,
        "allow_offline": values.isOnline == "offline" || values.isOnline == "all" ? true : false,
        "pay_time": transform.toISOLocal(values.payTime) + " 00:00:00"
    });
    return response?.data;
}

async function deletePaymentStep(itemId: number) {
    let response = await Api()?.delete(`/factor/paymentStep/${itemId}`);
    return response?.data;
}

async function updateFactor(factorId: number, values: any) {
    let response = await Api()?.put(`/factor/${factorId}`, {
        "expire_date": values.expireDate,
        "description": values.description
    });
    return response?.data;
}

async function acceptFactor(factorId: number) {
    let response = await Api()?.post(`/factor/${factorId}/accept`);
    return response?.data;
}

async function acceptFactorByCustomer(factorId: number) {
    let response = await Api()?.post(`/factor/${factorId}/acceptByCustomer`);
    return response?.data;
}

async function payFactor(stepId: number, method: string, fileId: number) {
    let response = await Api()?.post(`/factor/payment/pay`, {
        "factor_payment_step_id": stepId,
        "method": method,
        "fileId": fileId ?? null
    });
    return response?.data;
}


export {
    invoicesList,
    payFactor,
    getFactorStatuses,
    getFactorInfo,
    getFactorPaymentSteps,
    addFactorItem,
    updateFactorItem,
    deleteFactorItem,
    addPaymentStep,
    updatePaymentStep,
    deletePaymentStep,
    updateFactor,
    acceptFactor,
    acceptFactorByCustomer
};