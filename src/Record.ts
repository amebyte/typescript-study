enum IHttpMethods {
    GET = 'get',
    POST = 'post',
    DELETE = 'delete',
    PUT = 'put',
}

const methods = ["get", "post", "delete", "put"];

interface IHttpFn {
    <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
}

type IHttp = Record<IHttpMethods, IHttpFn>;

const httpMethods: IHttp = methods.reduce((map: any, method: string) => {
    map[method] = (url: string, options: AxiosRequestConfig = {}) => {
        const { data, ...config } = options;
        return (axios as any)[method](url, data, config)
            .then((res: AxiosResponse) => {
                if (res.data.errCode) {
                    //todo somethins
                } else {
                    //todo somethins
                }
            });
    }
    return map
}, {})


type RequestOptionsMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
type RequestOptionsMethodAll = RequestOptionsMethod | Lowercase<RequestOptionsMethod>

const methods2: RequestOptionsMethodAll[] = ['get', 'post']
type Methods = typeof methods2[number]
const request: { [key in Methods] ?: Function } = {}

methods2.forEach(method => {
    request[method] = (api: any, data: any, opt: any, params: any) => baseRequest(api, method, data, opt || {}, params)
})

function baseRequest(api: any, method: string, data: any, arg3: any, params: any) {
    throw new Error("Function not implemented.");
}

request?.get!('xxxx', 'ddd', 'xxx', 'xxx')