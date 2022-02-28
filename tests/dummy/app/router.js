import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  rootURL = config.rootURL;
  location = config.locationType;
}

Router.map(function() {
});
