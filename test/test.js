import { expect } from 'chai';
import bindHandler from '../src';


describe('bindHandler', () => {
  it('should works', () => {
    class A {
      constructor() {
        bindHandler(this);
      }

      handleClick() {
        expect(this).to.not.equal(undefined);
      }
    }

    const a = new A();
    const handleClick = a.handleClick;

    handleClick();
  });

  it('should not bind when no `handle` appear in method name', () => {
    class A {
      constructor() {
        bindHandler(this);
      }

      click() {
        expect(this).to.equal(undefined);
      }
    }

    const a = new A();
    const click = a.click;

    click();
  });

  it('should not bind when `handle` is not first word in method name', () => {
    class A {
      constructor() {
        bindHandler(this);
      }

      xhandleClick() {
        expect(this).to.equal(undefined);
      }
    }

    const a = new A();
    const xhandleClick = a.xhandleClick;

    xhandleClick();
  });
});
