import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Bus from '../utils/Bus';
import AI from '../utils/AppInteractive';


class http {
    header = {
        'app-version': '5.0.6',
        'cli-os': 'web',
        // 'app-platform': 'ios',
        // 'User-Id': 0,
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'authorize-token': ''
    };


    public host: string = 'https://dev-ck.haochang.tv';

    public axiosGet(url: string, param: object, success: (res: any) => void, fail: (err: any) => void) {
        if (this.header["authorize-token"] == '' && AI.inApp()) {
            AI.getToken((res) => {
                const tokeninfo = JSON.parse(res).data.token
                this.header["authorize-token"] = tokeninfo;
                Bus.$emit('loading', true);
                axios({
                    url: this.host + url,
                    method: 'get',
                    params: param,      // get请求使用params
                    header: this.header,
                    timeout: 8000,
                } as AxiosRequestConfig).then((res) => {
                    if (res.status === 200) {
                        //
                    }
                    if (success) {
                        success(res);
                    }
                    Bus.$emit('loading', false);
                }).catch((err) => {
                    if (fail) {
                        fail(err);
                    }
                    Bus.$emit('loading', false);
                });

            })
        } else {
            Bus.$emit('loading', true);
            axios({
                url: this.host + url,
                method: 'get',
                params: param,      // get请求使用params
                header: this.header,
                timeout: 8000,
            } as AxiosRequestConfig).then((res) => {
                if (res.status === 200) {
                    //
                }
                if (success) {
                    success(res);
                }
                Bus.$emit('loading', false);
            }).catch((err) => {
                if (fail) {
                    fail(err);
                }
                Bus.$emit('loading', false);
            });
        }

    }

}