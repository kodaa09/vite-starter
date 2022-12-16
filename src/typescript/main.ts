import "../stylesheets/main.scss";

class Main {
  _modules: NodeListOf<HTMLElement>;
  _moduleElements: Array<{ element: HTMLElement; name: string }>;

  constructor() {
    this._modules = document.querySelectorAll("[data-mods]");
    this._moduleElements = [];
    this._importAndInitModule();
  }

  _capitalize = (element: string): string => {
    return element.trim().charAt(0).toUpperCase() + element.slice(1);
  };

  _importAndInitModule = (): void => {
    this._modules.forEach((module) =>
      this._moduleElements.push({
        element: module,
        name: module.dataset.mods || "",
      })
    );
    this._moduleElements.forEach(async (moduleElement) => {
      const moduleName = this._capitalize(moduleElement.name);
      const module = await import(`./modules/${moduleName}.ts`);
      const Module = module.default;
      new Module(moduleElement.element);
    });
  };
}

new Main();
export {};
