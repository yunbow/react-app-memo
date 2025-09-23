# シンプルメモ帳 (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたメモ管理アプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-app-memo/demo/

## 主要機能

### メモ管理
- メモの追加・編集・削除
- メモの自動保存（3秒後）
- メモの永続化（localStorage）
- 作成日時順での並び替え

### 操作方法
- **新規メモボタン**: 新しいメモを作成
- **保存ボタン**: 現在のメモを手動保存
- **削除ボタン**: 選択中のメモを削除
- **メモ一覧**: クリックでメモを選択・切り替え
- **自動保存**: 入力停止3秒後に自動保存

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                # 機能別モジュール
│   └── memo/                # メモ管理機能
│       ├── components/      # 機能専用コンポーネント
│       │   ├── AppHeader/   # アプリケーションヘッダー
│       │   ├── MemoEditor/  # メモ編集エリア
│       │   ├── MemoItem/    # メモリスト項目
│       │   └── MemoList/    # メモ一覧表示
│       ├── MemoApp/         # 機能ルートコンポーネント
│       ├── useMemos.ts      # メモ管理フック
│       └── types.ts         # 機能固有の型定義
├── components/              # 共通UIコンポーネント
│   ├── Button/              # 操作ボタン
│   ├── Input/               # テキスト入力
│   └── Text/                # テキスト表示
├── stories/                 # Storybook用ストーリー
├── App.tsx                  # メインアプリ
└── main.tsx                 # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License