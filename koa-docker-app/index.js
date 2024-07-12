const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const app = new Koa();

// Use bodyParser middleware to parse request bodies
app.use(bodyParser());

app.use(async (ctx) => {
  ctx.body = "Hello, Koa with Docker!....Mohsin";
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
