import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import HeaderBar from '../../atoms/HeaderBar.vue';

describe('Header', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderBar, { props: { name: 'Restaurent' } });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toContain('Restaurent');
  });
});
