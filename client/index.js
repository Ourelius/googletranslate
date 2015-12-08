import { say, shout } from './module.js';

class ClientWhoop {
  constructor() {
    console.log('Yep. From client dude.');
  }
}

const clientWhoop = new ClientWhoop();

say();
shout();
