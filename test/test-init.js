import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.expect = expect;
global.sinon = sinon;

// force requiring css not to throw
require.extensions['.css'] = function () {
  return null;
};
