import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import ResturantDetail from '../../molecules/ResturantDetail.vue';
import type { Restaurant } from '@/interfaces';

describe('Restaurant Detail', () => {
  let wrapper: VueWrapper<any>;
  const restaurant: Restaurant = {
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
    wrapper = mount(ResturantDetail, {
      props: {
        restaurant
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the restaurant details properly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('a').text()).toContain(restaurant.name);
    expect(wrapper.find('address').text()).toContain(
      restaurant.location.formatted_address
    );
    expect(wrapper.findAll('li').length).toEqual(0);
    expect(wrapper.find('li').exists()).toBe(false);
    expect(wrapper.find('a').attributes('href')).toContain(restaurant.url);
    expect(wrapper.find('[aria-label="total-rating"]').text()).toContain(
      restaurant.rating
    );
    expect(wrapper.find('[aria-label="phone"]').text()).toContain(
      restaurant.phone
    );
  });
});
