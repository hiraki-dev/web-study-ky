"use strict";

import { baseComponent as base } from "./base.mjs";

export class bottomMenuComponent extends base {
  targetElement = "#insert-buttom";
  htmlPath = "/view/component/bottom-menu.html";

  // ページリソース
  formTopId = "open-top";
  formProfileId = "open-profile";
  formContentsId = "open-contents";
  navButtonId = "open-navigation";
  resource = `
<div id="buttom-menu">
  <!-- TODO HOME画面を作成し、戻れるようにする -->
  <form id="${this.formTopId}" action="/" method="get">
    <button type="submit">
      <img src="/asset/icon/home.svg" alt="TOPページ" />
    </button>
  </form>

  <!-- TODO プロフィールページを作成する -->
  <form id="${this.formProfileId}" action="/profile.html" method="get">
    <button type="submit">
      <img src="/asset/icon/face-side.svg" alt="プロフィールページ" />
    </button>
  </form>

  <!-- コンテンツ -->
  <form id="${this.formContentsId}" action="/contents.html" method="get">
    <button type="submit">
      <img src="/asset/icon/books.svg" alt="コンテンツページ" />
    </button>
  </form>

  <!-- 目次 -->
  <button id="${this.navButtonId}">
    <img src="/asset/icon/bookmark.svg" alt="目次モーダル" />
  </button>
</div>
`;

  constructor() {
    super();
  }

  // TODO 表示メニューのON/OFFを切り替えたい
}
