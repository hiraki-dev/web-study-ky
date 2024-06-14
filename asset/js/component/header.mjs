"use strict";

import { baseComponent as base } from "./base.mjs";

export class headerComponent extends base {
  targetElement = "#insert-header";
  htmlPath = "/view/component/header.html";
  resource = `
<h1 class="header-title">WEB STUDY KY</h1>

<p>
  Webフロントエンドの個人学習資料をまとめたサイト。<br />
  初心者向けにまとめているので教材利用などご自由に。
</p>
<span><small>最終更新: 2024/xx/xx</small></span>
`;

  constructor() {
    super();
  }
}
