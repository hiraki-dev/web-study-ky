"use strict";

// component
import { headerComponent } from "../component/header.mjs";
import { footerComponent } from "../component/footer.mjs";
import { contentComponent } from "../component/content.mjs";
import { bottomMenuComponent } from "../component/bottom-menu.mjs";
import { modalComponent } from "../component/modal.mjs";

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

    // トップページ
    const topPage = "/view/top.html";
    const contents = new contentComponent();
    await contents.insertContent(topPage);

    // モーダル
    const modal = new modalComponent(bottomMenu);
    await modal.insertResourceByElement(modal.targetElement);
    await modal.modalFromBottomMenu();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

pageRendering();
