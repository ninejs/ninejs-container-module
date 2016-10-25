import { NineJs } from 'ninejs/modules/ninejs-server';
import WebServer from 'ninejs/modules/webserver/WebServer';
declare class MainContainer {
    config: any;
    ninejs: NineJs;
    server: WebServer;
    constructor(config: any, ninejs: NineJs, server: WebServer);
    init(): void;
}
export default MainContainer;
