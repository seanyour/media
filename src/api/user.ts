import http from "utils/http";

export const verifyCaptcha = (captcha: string) => {
    return http.post<{status: number}>('/auth/verifyCaptcha', {captcha});
};