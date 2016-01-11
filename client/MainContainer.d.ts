import Properties from 'ninejs/core/ext/Properties';
import MainContainer from './widgets/MainContainer';
import { Router } from 'ninejs/client/router';
import Frame from 'ninejs/modules/client/FullScreenFrame';
import { Container } from 'ninejs/modules/client/container';
import { Widget } from 'ninejs/ui/Widget';
import { MenuItemArgs } from './widgets/MenuItem';
export interface Modal {
    modal: any;
    show: (args: any, contentArgs: any) => void;
    close: () => void;
}
declare class MainContainerUnit extends Properties {
    config: any;
    mainContainer: MainContainer;
    Content: HTMLElement;
    domNode: HTMLElement;
    init: () => any;
    modals: {
        [name: string]: Modal;
    };
    on(type: string, listener: (e: any) => any): any;
    emit(type: string, data: any): any;
    addContent(content: Widget, idx?: number): any;
    activate(): any;
    addMenu(menuId: string, node: HTMLElement): any;
    addMenuItem(menuId: string, item: MenuItemArgs, parentNode?: HTMLElement): any;
    contentSetter(content: Widget): any;
    addModal(name: string, content: Widget): Modal;
    getModal(name: string): Modal;
    constructor(config: any, router: Router, frame: Frame, auth: any, container: Container);
}
export default MainContainerUnit;
