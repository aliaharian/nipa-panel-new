import Api from "app/service/Api";

async function ordersList() {
    let response = await Api()?.get("/order");
    return response?.data;
}

async function orderGroupsList() {
    let response = await Api()?.get("/orderGroup");
    return response?.data;
}
async function orderDetail(orderId: number) {
    let response = await Api()?.get("/order/" + orderId);
    return response?.data;
}


export {
    ordersList,
    orderGroupsList,
    orderDetail
}