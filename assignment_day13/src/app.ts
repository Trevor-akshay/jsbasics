import koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import json from "koa-json";
import { userRouter } from "./routes/user";
import { bookRouter } from "./routes/book";
import { reviewRouter } from "./routes/review";

const app = new koa();

app.use(json()).use(bodyParser()).use(logger());
app
	.use(userRouter.routes())
	.use(userRouter.allowedMethods())
	.use(bookRouter.routes())
	.use(bookRouter.allowedMethods())
	.use(reviewRouter.routes())
	.use(reviewRouter.allowedMethods());

export default app;