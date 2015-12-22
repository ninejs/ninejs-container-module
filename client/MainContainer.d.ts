import Properties from 'ninejs/core/ext/Properties';
import MainContainer from './widgets/MainContainer';
import { Router } from 'ninejs/client/router';
import Frame from 'ninejs/modules/client/FullScreenFrame';
import { Container } from 'ninejs/modules/client/container';
declare class MainContainerUnit extends Properties {
    config: any;
    mainContainer: MainContainer;
    Content: HTMLElement;
    domNode: HTMLElement;
    init: () => any;
    on(type: string, listener: (e: any) => any): any;
    emit(type: string, data: any): any;
    addContent(): any;
    activate(): any;
    addMenu(): any;
    addMenuItem(): any;
    contentSetter(): any;
    constructor(config: any, router: Router, frame: Frame, auth: any, container: Container);
}
export default MainContainerUnit;
