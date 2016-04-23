import router from 'koa-route';
import { getHome, getAbout } from '../controllers/home';

const routes = (app) => {
  app.use(router.get('/home', getHome));
  app.use(router.get('/about', getAbout));
};

export default routes;
