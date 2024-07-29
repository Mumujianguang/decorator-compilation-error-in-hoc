import Hookable from "../Hookable";
import Component from "./Component";

export default function design(base: typeof Component) {
    return class Design extends base {
        copy() {
            console.log("copy");
        }

        @Hookable.registerHook('beforeRender')
        @Hookable.registerHook('afterRender')
        render() {
            super.render();
            console.log("design render");
        }
    }
}