/* eslint-disable import/no-anonymous-default-export */

import Api from "../../../app/service/Api";


async function getFactorStatuses() {
    let response = await Api()?.get(`/factor/status`);
    return response?.data?.statuses;
}

export default {
    getFactorStatuses,
};
