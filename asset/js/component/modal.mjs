"use strict";

import { bottomMenuComponent } from "./bottom-menu.mjs";

export class modalComponent extends bottomMenuComponent {
  // 挿入先タグ
  targetElement = "#insert-modal";
  // モーダルボタン
  // button = "#open-navigation";
  // ボトムメニューインスタンス
  bottomMenuInstance;
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

  constructor(bottomMenuInstance) {
    super();

    try {
      // ボトムメニューの拡張のため、インスタンスのDIを行う
      // bottomMenuComponentインスタンスが存在する場合のみインスタンスを許可する
      if (!(bottomMenuInstance instanceof bottomMenuComponent)) {
        throw new Error("モーダルはボトムメニューのインスタンスが必須");
      }

      this.bottomMenuInstance = bottomMenuInstance;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  // モーダル表示/非表示
  modalFromBottomMenu = () => {
    try {
      const modalBtn = document.getElementById(
        this.bottomMenuInstance.navButtonId
      );

      modalBtn.addEventListener("click", () => {
        const modalView = document.getElementById(this.modalViewId);

        modalView.style.display === "none"
          ? (modalView.style.display = "block")
          : (modalView.style.display = "none");
      });

      return this;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  // モーダルにページ内ナビゲーションを挿入
  insertNavigationInModal = () => {
    return this;
  };
}

// 閉じるボタンを取得
// var closeBtn = document.getElementsByClassName("close")[0];

// モーダルの外側がクリックされた時の処理
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
