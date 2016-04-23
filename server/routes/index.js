import router from 'koa-route';
import { getHome } from '../controllers/home';

const routes = (app) => {
  app.use(router.get('/home', getHome));
};

export default routes;
