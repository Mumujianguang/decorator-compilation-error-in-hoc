export default class Hookable {
    static registerHook(key: string) {
        return function (target: any, prop: any)  {
            console.log(target, prop)
        }
    }
}