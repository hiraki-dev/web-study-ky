"use strict";

import { baseComponent as base } from "./base.mjs";

export class footerComponent extends base {
  targetElement = "#insert-footer";
  htmlPath = "/view/component/footer.html";
  resource = `
<span id="footer-copyright">© 2024 KY</span>
<span id="footer-disclaimer"
  >本サイトの記載情報により生じた損害の責任は負いかねます。ご了承を。</span
>
`;

  constructor() {
    super();
  }
}
