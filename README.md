## 使い方

envファイル を作成する

```shell
# JSONファイル名
JSON_FILE='dbSuccess.json'

# ステータスコード
STATUS_CODE=200

# タイムアウト設定（ミリ秒）
TIMEOUT_TIME=0
```

json-server を起動する

```shell
$ node server.js
```

以上の手順で、下記へのアクセスが可能となる
```shell
POST http://localhost:8000/api
```