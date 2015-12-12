import Help from './Help';
import Widget from 'ninejs/ui/Widget';
import MenuItem from './MenuItem';
import Skin from 'ninejs/ui/Skin';
import { Router } from 'ninejs/client/router';
export interface ParentContainer {
    set: (prop: string, obj: any) => void;
}
declare class MainContainer extends Widget {
    skin: Skin;
    i18n: (name: string) => string;
    config: any;
    auth: {
        logout: () => void;
    };
    router: Router;
    slimScroll: HTMLElement;
    mainMenuNode: HTMLElement;
    header: HTMLElement;
    footer: HTMLElement;
    parentContainer: ParentContainer;
    Content: HTMLElement;
    content: Widget;
    helpWidget: Help;
    mainMenuMap: {
        [name: string]: {
            node: HTMLElement;
            items: MenuItem[];
        };
    };
    fixResize(): void;
    onUpdatedSkin(): void;
    activate(): void;
    toggleCollapseSidebar(): void;
    addContent(content: Widget, idx?: number): {
        remove: () => void;
    };
    addMenu(menuId: string, node: HTMLElement): void;
    addMenuItem(menuId: string, item: any, parentNode: HTMLElement): any;
    contentSetter(content: Widget): void;
    logoClick(): void;
    logout(): void;
    constructor(args: any);
}
export default MainContainer;
