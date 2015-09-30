export default function bindHandler(target) {
  var proto = Object.getPrototypeOf(target);
  var props = Object.getOwnPropertyNames(proto);

  props
    .filter(p => /^handle/i.test(p))
    .forEach(p => {
      target[p] = target[p].bind(target);
    });
}
