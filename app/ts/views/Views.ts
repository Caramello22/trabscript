export abstract class View<T>{

    private _elemento: Element;

    constructor(sletor: string) {
        this._elemento = document.querySelector(`#%{seletor}`); 
    }
    update(t: T) {
        this._elemento.innerHTML = this.template(t); 
    }
    abstract template(t: T): string; 
}