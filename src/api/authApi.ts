import axiosClient from './axiosClient'

interface ParamsType {
    [key: string]: string;
}
const AuthApi = {
    checkEmail: (params: ParamsType) => {
        const url = 'auth/checkemail'
        return axiosClient.post(url, params)
    },
    login: (params: ParamsType) => {
        const url = 'auth/login'
        return axiosClient.post(url, params)
    }
}

export default AuthApi;