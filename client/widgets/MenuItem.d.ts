import { default as Widget, WidgetArgs } from 'ninejs/ui/Widget';
import Skin from 'ninejs/ui/Skin';
export interface MenuItemArgs extends WidgetArgs {
    badgeValue?: string | number;
    text?: string;
    action?: (evt: any) => any;
    class?: string;
    key?: string;
}
declare class MenuItem extends Widget {
    skin: Skin;
    anchorClass: string;
    icon: string;
    action: (evt: any) => void;
    caretNode: HTMLElement;
    childrenContainer: HTMLElement;
    children: MenuItem[];
    onUpdatedSkin(): void;
    remove(): boolean;
    addSubMenu(text: string, badgeValue: number, tabKey: string, action: (evt: any) => any, cls: string, index: number): any;
    constructor(args: MenuItemArgs);
}
export default MenuItem;
