# WEB STUDY KY

## 概要

* フロントエンド学習のアウトプットを行うために作成
* ポートフォリオサイトの叩き台として、完成後にリプレースを行う

HTML/CSS/JavaScriptを理解するためにエコシステムを使わずバニラで実装を行っている。

## ディレクトリ設計

```text
.
├── asset 
│   ├── css
│   ├── js              
│   │   ├── component
│   │   ├── const
│   │   ├── error
│   │   ├── lib
│   │   ├── module
│   │   └── page
│   └── ...
├── content-detail.html: 
├── contents.html
├── error.html
├── index.html
└── view: Webページに埋め込むコンテンツをhtmlファイルで定義
    ├── content: コンテンツファイル群
    ├── error: エラーファイル群
    └── ...
```

### root

| パス     | 機能                                                       |
| -------- | ---------------------------------------------------------- |
| ./*.html | webページ                                                  |
| ./asset  | css/js/image等のリソースファイル                           |
| /view    | コンポーネント化した埋め込みコンテンツ（変更の可能性あり） |

### js

| パス      | 説明                                 |
| --------- | ------------------------------------ |
| component | ヘッダー、フッター等のコンポーネント |
| const     | 定数ファイル                         |
| error     | エラー時の制御                       |
| lib       | 外部ライブラリ                       |
| module    | 共通処理等のモジュール               |
| page      | ページレンダリング制御（controller） |

## 使用素材

[icooon-mono.com](https://icooon-mono.com/)

## ホスティング

**正常にホスティング出来ているかの確認用に未完成のものを一旦アップロードしている。（2024/6/14）**

https://keisei.cloudfree.jp/web-study-ky
