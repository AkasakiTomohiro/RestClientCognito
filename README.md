# Rest Client Cognito

このツールは Cognito からアクセストークンを取得するための認証用 Web サーバーを起動するものになっています。

## 準備

準備としてプロジェクトフォルダ直下に`.env`ファイルを作成してください。
その中には次の項目を必ず含めるようにしてください。

- `RCC_USER_POOL_ID`: Cognito のユーザープール ID
- `RCC_CLIENT_ID`: アプリクライアント ID
- `RCC_USER_NAME`: ログインするユーザー名
- `RCC_PASSWORD`: ログインするユーザーのパスワード

## 使用方法

`rcc`か`rcc -p 4000`コマンドをコールするだけで Cognito 用認証サーバーが起動します。

`-p`オプションを使用することで起動するサーバーのポート番号を変更することができます。
また、ポート番号のデフォルトは 3000 番になっています。

`curl localhost:3000/login`でアクセストークンを取得することができます。
以下の構造が取得に成功した際のデータ構造になっています。

```token.json
{
  "token": "アクセストークン",
  "idToken": "IDトークン"
}
```

REST Client を記述しているファイルに次をコピーして利用してください。

```RestClient.rest
@rccPort = 3000

###

# @name login

GET http://localhost:{{rccPort}}/login

@authToken = {{login.response.body.token}}
@authIdToken = {{login.response.body.idToken}}
```
