/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// extend axios AxiosResponse
import axios from "axios";

declare module 'axios' {
  interface IAxiosResponse<T = any> {
    code: boolean,
    data?: T,
    msg: string,
  }
  export interface AxiosResponse<T = any> extends IAxiosResponse<T> {}
}
