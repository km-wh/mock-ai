require("dotenv").config();
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(process.env.JSON_FILE);
const middlewares = jsonServer.defaults();

// タイムアウト設定
const sleep = (time) => new Promise((r) => setTimeout(r, time));

server.use(middlewares);

server.use(async (req, res, next) => {
  if (process.env.TIMEOUT_TIME && Number(process.env.TIMEOUT_TIME) > 0) {
    // タイムアウトありの場合
    await sleep(Number(process.env.TIMEOUT_TIME));
  }
  if (req.method === "POST") {
    // POSTをGETに置き換え
    req.method = "GET";
    if (process.env.STATUS_CODE && Number(process.env.STATUS_CODE) !== 200) {
      // 200以外のステータスコードを設定する
      res.sendStatus(Number(process.env.STATUS_CODE));
    }
    next();
  }
});

server.use(router);

server.listen(8000, () => {
  console.log("JSON Server is running");
});
