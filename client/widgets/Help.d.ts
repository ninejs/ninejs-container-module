import Widget from 'ninejs/ui/Widget';
import Skin from 'ninejs/ui/Skin';
import { Template } from 'ninejs/nineplate';
declare class Help extends Widget {
    skin: Skin;
    helpContent: HTMLElement;
    loadHelp(helpNode: HTMLElement | Widget | Template | Function): any;
}
export default Help;
