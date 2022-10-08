import http from "utils/http";

export const verifyCaptcha = (captcha: string) => {
    return http.post('/auth/verifyCaptcha', {captcha});
};

export const login = (nickname: string, password: string) => {
    return http.post('/auth/login', {nickname,password});
};