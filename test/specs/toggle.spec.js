import nToggle from '../../packages/awe-toggle';
import { mount } from '@vue/test-utils';

describe('nToggle', () => {
  it('name should return NToggle', () => {
    const wrapper = mount(nToggle);
    expect(wrapper.exists()).toBe(true);
  });
});
