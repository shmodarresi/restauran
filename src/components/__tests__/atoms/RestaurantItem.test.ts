import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import RestaurantItem from '../../atoms/RestaurantItem.vue';
import type { RestaurantListItem } from '@/interfaces';

describe('RestaurantListItem', () => {
  let wrapper: any;
  const item: RestaurantListItem = {
    name: 'Billy The Butcher',
    id: 'g3jk6ppJc_NdKKhv1JGa7w',
    url: 'https://www.yelp.com/biz/billy-the-butcher-hamburg-2?adjust_creative=nMAD8ywU1QBl_RMSM215Bg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=nMAD8ywU1QBl_RMSM215Bg',
    phone: '+494057283299',
    display_phone: '+49 40 57283299',
    rating: 4,
    photos: [
      'https://s3-media2.fl.yelpcdn.com/bphoto/RDKmsxZZczP4EiTCB9AYOw/o.jpg'
    ],
    location: {
      address1: 'Jungfernstieg 16 - 20',
      city: 'Hamburg',
      postal_code: '20354',
      formatted_address: 'Jungfernstieg 16 - 20\n4. OG\n20354 Hamburg\nGermany'
    }
  };

  beforeEach(() => {
    wrapper = mount(RestaurantItem, {
      props: {
        item
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the restaurant name', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h2').text()).toBe(item.name);
  });
  it('renders the restaurant address', () => {
    expect(wrapper.find('address').text()).toBe(
      item.location.formatted_address
    );
  });
});
