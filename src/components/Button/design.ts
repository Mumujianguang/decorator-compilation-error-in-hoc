import design from "../../hoc/Design";
import Button from "./base";

export default class DesignButton extends design(Button) {
    copy() {
        super.copy();
        console.log('DesignButton copy')
    }

    render() {
        super.render();
        console.log('DesignButton render')
    }
}