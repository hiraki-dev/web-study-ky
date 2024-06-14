"use strict";

export const initializeHighlight = () => {
  // 初期化
  hljs.highlightAll();

  // 行番号追加
  hljs.addPlugin({
    "after:highlightElement": ({ el, result }) => {
      el.innerHTML = result.value.replace(
        /^/gm,
        '<span class="row-number"></span>'
      );
    },
  });
};
