import koa from 'koa';
import cors from 'koa-cors';
import serve from 'koa-static';
import favicon from 'koa-favicon';

const app = koa();
app.use(cors());
app.use(serve('public'));
app.use(favicon('public/favicon.ico'));

export default app;
