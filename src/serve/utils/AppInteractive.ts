/* App通信 */
class API {
    // 设置页面标题
    public setTitle: string = 'com.haochang.chunk.setTitle';
    // 获取token
    public getToken: string = 'com.haochang.chunk.getToken';
    // 返回键处理方式(Android)
    public interceptBack: string = 'com.haochang.chunk.interceptBack';
    // 获取网络状态
    public networkReachability: string = 'com.haochang.chunk.networkReachability';
    // 关闭页面
    public finish: string = 'com.haochang.chunk.finish';
}


class AppInteractive {

    public tag: string = 'party';
    public win: any = window;
    public api: API = new API();


    /* app通信 */
    public toApp(param: any, callBack?: (res: any) => void): void {
        if (callBack) {
            const callBackName = 'cb_' + '_' + new Date().getTime() + Date.now();
            param.callback = callBackName;
            this.win[callBackName] = (res: any) => {
                callBack(res);
                delete this.win[callBackName];
            };
        }
        if (this.win.hc) {// ios 7
            this.win.hc.call(JSON.stringify(param));
        } else if (this.win.webkit) {// ios8/android
            this.win.webkit.messageHandlers.call.postMessage(JSON.stringify(param));
        } else {// 电脑端移动测试
            return;
        }
    }

    /**
     * 设置页面标题
     * @param _title 标题 
     */
    public setTitle(_title: string): void {
        const param: any = {
            api: this.api.setTitle,
            data: {
                title: _title,
            },
        };
        this.toApp(param);
    }

    /**
     * 获取保存的token
     * @param callback 
     * 回调方法参数
    {
        errno:(integer) 
        error:(string) 
        data:{
            token:(string)    
        }            
    }
     */
    public getToken(callback: (res: any) => void): void {
        const param: any = {
            api: this.api.getToken,
        };
        this.toApp(param, callback);
    }

    /**
     * 返回键处理方式
     * @param _intercepts  是否拦截 1 拦截（交由web执行相应操作） 0 不拦截(缺省值 | 客户端自行执行返回功能)
     */
    public interceptBack(_intercepts: number): void {
        const param: any = {
            api: this.api.interceptBack,
            data: {
                intercept: _intercepts,
            },
        };
        this.toApp(param);
    }

    /**
     * 获取网络状态
     * @param callback
     *  回调方法参数
    {
        errno:(integer),
        error:(string),
        data:{
            status:(string) // 枚举值：未知 unknown, 未联网 notReach, 移动网络 viaWWAN, WIFI viaWIFI
        }
    }
     */
    public networkReachability(callback: () => void): void {
        const param: any = {
            api: this.api.networkReachability,
        };
        this.toApp(param, callback);
    }

    /**
     * 关闭前端App当前WebView的页面（主要用于超链跳转打开其他页面使用）
     */
    public finish(): void {
        const param: any = {
            api: this.api.finish,
        };
        this.toApp(param);
    }

    /**
     * 判断是否在app内打开
     */
    public inApp(): Boolean{
        return navigator.userAgent.toLowerCase().indexOf(this.tag) > -1;
    }
}


export default new AppInteractive();