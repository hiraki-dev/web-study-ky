"use strict";

// component
import { headerComponent } from "../component/header.mjs";
import { footerComponent } from "../component/footer.mjs";
import { contentComponent } from "../component/content.mjs";
import { bottomMenuComponent } from "../component/bottom-menu.mjs";
import { modalComponent } from "../component/modal.mjs";
// module
import { initializeHighlight } from "../module/highlight.mjs";
import { jsonUtil } from "../module/jsonUtil.mjs";

// コンテンツ
const createContentResource = async () => {
  try {
    // クエリパラメータを基にURLを構築
    const urlParams = new URLSearchParams(window.location.search);
    const contentType = urlParams.get("contentType");
    const contentName = urlParams.get("contentName");
    const contentsJsonPath = "/asset/js/const/contents.json";

    const ju = new jsonUtil();
    const json = await ju.includeConfigJson(contentsJsonPath);

    if (json === undefined) {
      throw new Error("jsonが取得されていない");
    }

    const contentPath = `${json.basePath}${json[contentType][contentName]}`;

    // コンテンツを生成
    const content = new contentComponent();
    await content.insertContent(contentPath);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

// 順次読み込みを行いスクリプトが生成したノードを参照できるようにする
const pageRendering = async () => {
  try {
    // ヘッダー
    const header = new headerComponent();
    await header.insertResourceByElement(header.targetElement);

    // フッター
    const footer = new footerComponent();
    await footer.insertResourceByElement(footer.targetElement);

    // ボトムメニュー
    const bottomMenu = new bottomMenuComponent();
    await bottomMenu.insertResourceByElement(bottomMenu.targetElement);

    // コンテンツ
    await createContentResource();

    // モーダル
    const modal = new modalComponent(bottomMenu);
    await modal.insertResourceByElement(modal.targetElement);
    await modal.modalFromBottomMenu();

    // Highlight JS
    await initializeHighlight();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

pageRendering();
