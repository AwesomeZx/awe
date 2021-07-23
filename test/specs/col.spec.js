import nCol from '../../packages/awe-col';
import { mount } from '@vue/test-utils';

describe('nCol', () => {
  it('name should return NCol', () => {
    const wrapper = mount(nCol);
    expect(wrapper.exists()).toBe(true);
  });
});
