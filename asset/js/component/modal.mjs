"use strict";

import { bottomMenuComponent } from "./bottom-menu.mjs";
import { contentComponent } from "./content.mjs";

export class modalComponent extends bottomMenuComponent {
  // 挿入先タグ
  targetElement = "#insert-modal";
  // モーダルビュー
  modalViewId = "modal-view";
  // モーダルコンテンツ
  modalContentId = "modal-content";
  // ページリソース
  resource = `
<!-- モーダル -->
<div id="${this.modalViewId}">
  <!-- モーダルコンテンツ -->
  <div id="${this.modalContentId}"></div>
</div>
`;
  // ボトムメニューインスタンス
  #bottomMenuInstance;

  constructor(bottomMenuInstance) {
    super();

    try {
      // ボトムメニューの拡張のため、インスタンスのDIを行う
      // bottomMenuComponentインスタンスが存在する場合のみインスタンスを許可する
      if (!(bottomMenuInstance instanceof bottomMenuComponent)) {
        throw new Error("モーダルはボトムメニューのインスタンスが必須");
      }

      this.#bottomMenuInstance = bottomMenuInstance;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  // モーダル表示/非表示
  modalFromBottomMenu = () => {
    const callback = () => {
      const modalView = document.getElementById(this.modalViewId);

      modalView.style.display === "none"
        ? (modalView.style.display = "block")
        : (modalView.style.display = "none");
    };

    this.#clickModal(callback);
  };

  // モーダルにページ内ナビゲーションを挿入
  insertNavigationInModal = (contentLinkSelecter) => {
    const callback = () => {
      //
      const contentLinks = document.querySelector(contentLinkSelecter).children;
      const combined = Array.from(contentLinks)
        .map((element) => element.innerHTML)
        .join("");

      document.getElementById(this.modalContentId).innerHTML = combined;
    };

    this.#clickModal(callback);
  };

  // モーダルクリック時処理の雛形
  #clickModal = (callback) => {
    try {
      const modalBtn = document.getElementById(
        this.#bottomMenuInstance.navButtonId
      );

      modalBtn.addEventListener("click", () => {
        // モーダルクリック時に引数で受け取ったコールバック関数を実行
        callback();
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
}
