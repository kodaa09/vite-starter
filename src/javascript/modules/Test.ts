import TestInterface from "../types/TestInterface";

export default class Test {
  _el: HTMLElement;
  _dom: TestInterface;

  constructor(el: HTMLElement) {
    this._el = el;
    this._dom = {};
    console.log("test");
    

    this._grabDom();
    this._addEvents();
  }

  //________________________________________________________ public
  // -

  //________________________________________________________ events
  // -

  //________________________________________________________ private
  // -

  _grabDom = () => {
    this._dom.test = this._el.querySelector("[data-test]")!;
  };

  _addEvents = () => {};
}
