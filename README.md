# Rest Client Cognito

このツールはCognitoからアクセストークンを取得するための認証用Webサーバーを起動するものになっています。

## 開発背景

私はVisual Studio Code Extensionの[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)を用いてWebAPIの検証を行っていました。  
しかし、このExtensionだけではCognitoのアクセストークンを取得することができません。  
なので、Cognitoの認証サーバーをnodeを用いて簡易にアクセストークンを取得できれば検証作業が簡易になると思いこのツールを作成しました。

## 使用方法

準備としてプロジェクトフォルダ直下に`.env`ファイルを作成してください。
その中には次の項目を必ず含めるようにしてください。

- `RCC_USER_POOL_ID`: CognitoのユーザープールID
- `RCC_CLIENT_ID`: アプリクライアントID
- `RCC_USER_NAME`: ログインするユーザー名
- `RCC_PASSWORD`: ログインするユーザーのパスワード

`rcc`か`rcc -p 4000`コマンドをコールするだけでCognito用認証サーバーが起動するようになっています。

`-p`オプションを使用することで起動するサーバーのポート番号を変更することができます。
また、ポート番号のデフォルトは3000番になっています。
