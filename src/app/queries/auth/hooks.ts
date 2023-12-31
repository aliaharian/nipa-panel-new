import {useMutation} from "@tanstack/react-query";
import {confirmCodeFormInitialValues, sendCodeFormInitialValues} from "app/models/auth";
import { confirmOtp, sendOtp } from "./services";
import {useAppDispatch} from "app/redux/hooks";
import {setUserLogin, setUserMobile} from "app/redux/users/actions";
import {useNavigate} from "react-router-dom";

const useSendOtp = () => {
    const Dispatch = useAppDispatch();
    const { mutate,isPending } = useMutation({
        mutationKey: ["sendOtp"],
        mutationFn: (credentials:sendCodeFormInitialValues) => {
            return sendOtp(credentials)
        },
        onSuccess:(data)=>{
            //store mobile in redux
            Dispatch(setUserMobile(data.mobile));
        }
    })
    return {
        mutate,
        loading: isPending
    }
}

const useConfirmOtp = () => {
    const Dispatch = useAppDispatch();
    const { mutate,isPending } = useMutation({
        mutationKey: ["confirmOtp"],
        mutationFn: (credentials:confirmCodeFormInitialValues) => {
            return confirmOtp(credentials)
        },
        onSuccess:(data)=>{
            Dispatch(setUserLogin(data))
        }
    })
    return {
        mutate,
        loading:isPending
    }
}


export {
    useSendOtp,
    useConfirmOtp
}