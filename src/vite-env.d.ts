/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// extend axios AxiosResponse
import axios, {AxiosRequestConfig} from "axios";

declare module 'axios' {
  interface IAxiosResponse<M = any> {
    code: boolean,
    msg: string,
    pass?: boolean,
  }
  export interface AxiosResponse<T = any> extends IAxiosResponse<M> {}
}
