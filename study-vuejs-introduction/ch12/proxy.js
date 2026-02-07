const target = {
  message1: 'hello',
  message2: 'proxy',
};
const handler = {};
const proxy = new Proxy(target, handler);
console.log(proxy.message1, proxy.message2);

const target2 = {
  message1: 'hello',
  message2: 'proxy',
};
const handler2 = {
  get(target, property, receiver) {
    return 'hi';
  },
};
const proxy2 = new Proxy(target2, handler2);
console.log(proxy2.message1, proxy2.message2);

const target3 = {
  message1: 'hello',
  message2: 'proxy',
};
const handler3 = {
  get(target, property, receiver) {
    if (property === 'message1') {
      return 'hi';
    } else {
      return Reflect.get(...arguments);
    }
  },
};
const proxy3 = new Proxy(target3, handler3);
console.log(proxy3.message1, proxy3.message2);

const target4 = {
  message1: 'hello',
  message2: 'proxy',
};
const handler4 = {
  set(target, property, value, receiver) {
    console.log(`Setting ${property} property to ${value}`);
    target[property] = value;
    return true;
  },
};
const proxy4 = new Proxy(target4, handler4);
proxy4.message1 = 'hey1';

const target5 = {
  message1: 'hello',
  message2: 'proxy',
};
const handler5 = {
  set(target, property, value, receiver) {
    if (property === 'message1') {
      return false;
    } else {
      target[property] = value;
      return true;
    }
  },
};
const proxy5 = new Proxy(target5, handler5);
proxy5.message1 = 'hi';
proxy5.message2 = 'ye';
console.log(proxy5.message1);
console.log(proxy5.message2);
