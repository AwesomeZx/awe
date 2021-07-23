import nMessage from '../../packages/awe-message';

describe('nMessage', () => {
  it('create', () => {
    nMessage({ message: 'message' });
    expect(document.querySelector('.base-message')).toBeTruthy();
  });
});
