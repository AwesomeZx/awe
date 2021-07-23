import nRow from '../../packages/awe-row';
import { mount } from '@vue/test-utils';

describe('nRow', () => {
  it('name should return NRow', () => {
    const wrapper = mount(nRow);
    expect(wrapper.exists()).toBe(true);
  });
});
