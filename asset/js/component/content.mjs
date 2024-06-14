"use strict";

import { baseComponent as base } from "./base.mjs";

export class contentComponent extends base {
  targetElement = "#insert-content";
  htmlPath = "";

  constructor() {
    super();
  }

  // HTMLファイルからページリソースを取得してタグに挿入
  insertContent = async (targetContentpath) => {
    try {
      await this.fetchResource(targetContentpath);
      await this.insertResourceByElement(this.targetElement);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  // TODO ページ内リンクを押下するとGETリクエストが消滅する
  // #section_xを現在の末尾に追加
}
