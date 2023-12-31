import {confirmCodeFormInitialValues, sendCodeFormInitialValues} from "app/models/auth";
import Api from "app/service/Api";

async function sendOtp(credentials: sendCodeFormInitialValues) {
    let response = await Api()?.post("/sendOtp", {
        mobile: credentials.mobile,
    });
    return {
        ...response?.data, mobile: credentials.mobile
    };
}

async function confirmOtp(credentials: confirmCodeFormInitialValues) {
    let response = await Api()?.post("/confirmOtp", {
        mobile: credentials.mobile,
        otp: credentials.otp,
    });
    return response?.data;
}

export {
    sendOtp,
    confirmOtp
}