declare module '*.scss' {
    interface IClassName {
        [name: string]: string
    }
    const className: IClassName;
    export = className;
}