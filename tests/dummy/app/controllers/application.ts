import Controller from '@ember/controller';

export default class Application extends Controller {
   sample1 = "let x: string = 'foo'";
  // anything which *must* be merged to prototype here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    application: Application;
  }
}
