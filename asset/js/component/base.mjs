"use script";

export class baseComponent {
  // ページリソース
  resource;
  // domに変換したリソース
  dom;

  constructor(htmlPath = "") {
    if (htmlPath !== "") {
      this.fetchResource(htmlPath);
    }
  }

  // ページリソースを挿入
  async insertResourceByElement(targetElement) {
    try {
      document.querySelector(targetElement).innerHTML = await this.resource;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  // HTMLファイルからページリソースを取得
  async fetchResource(htmlPath) {
    try {
      const response = await fetch(htmlPath);
      if (!response.ok) {
        throw new Error("HTMLを取得できない");
      }

      const getHtml = await response.text();
      this.resource = getHtml;

      return this;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  // 取得したリソースをDOMに変換（HTMLから取得したページリソースの編集用）
  async convertResourcesToDom() {
    try {
      if (this.resource === undefined) {
        throw new Error("HTMLリソースを取得していない");
      }

      const parser = new DOMParser();
      const dom = parser.parseFromString(this.resource, "text/html");
      this.dom = dom;

      return this;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
