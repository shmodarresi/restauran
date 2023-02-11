import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ReviewItem from '../../atoms/ReviewItem.vue';
import type { Review } from '@/interfaces';

describe('Review Item', () => {
  let wrapper: any;
  const item: Review = {
    rating: 4,
    text: "I've had decent lunches at Billy The Butcher a couple of times now. It's what I would describe as a trendy burger joint on the 4th floor of the Alsterhaus..."
  };

  beforeEach(() => {
    wrapper = mount(ReviewItem, {
      props: {
        item
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the Review text', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.comment').text()).toBe(item.text);
  });
  it('renders the Review rating', () => {
    expect(wrapper.find('span').text()).toContain(item.rating);
  });
});
