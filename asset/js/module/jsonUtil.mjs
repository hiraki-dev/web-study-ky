"use strict";

export class jsonUtil {
  json;

  constructor() {}

  // jsonで定義した設定ファイルをfetchで読み込み
  includeConfigJson = async (jsonPath) => {
    try {
      const response = await fetch(jsonPath);
      const json = await response.json();

      return json;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
}
