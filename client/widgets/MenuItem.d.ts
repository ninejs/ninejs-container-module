import Widget from 'ninejs/ui/Widget';
import Skin from 'ninejs/ui/Skin';
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
}
export default MenuItem;
