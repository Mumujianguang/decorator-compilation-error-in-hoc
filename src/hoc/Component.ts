export default class Component {
    id: string;

    constructor() {
        this.id = Math.random().toString(36).slice(2);
    }

    render() {
        console.log('render')
    }
}