import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ResturantList from '../../molecules/ResturantList.vue';
import type { Restaurant } from '@/interfaces';

describe('Restaurant List', () => {
  let wrapper: any;
  const restaurants: Restaurant[] = [
    {
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
        formatted_address:
          'Jungfernstieg 16 - 20\n4. OG\n20354 Hamburg\nGermany'
      }
    },
    {
      name: 'Kleinhuis´ Bistro & Weinhandel',
      id: 'Wv-vnqZJFCKw3B7zOhGXqA',
      url: 'https://www.yelp.com/biz/kleinhuis-bistro-und-weinhandel-hamburg-2?adjust_creative=nMAD8ywU1QBl_RMSM215Bg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=nMAD8ywU1QBl_RMSM215Bg',
      phone: '+494035906720',
      display_phone: '+49 40 35906720',
      rating: 5,
      photos: [
        'https://s3-media1.fl.yelpcdn.com/bphoto/wBfVF5XvA5XL9DQhDE4t9A/o.jpg'
      ],
      location: {
        address1: 'Fehlandtstr. 26',
        city: 'Hamburg',
        postal_code: '20354',
        formatted_address: 'Fehlandtstr. 26\n20354 Hamburg\nGermany'
      }
    }
  ];

  beforeEach(() => {
    wrapper = mount(ResturantList, {
      props: {
        restaurants
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the restaurant items properly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.findAll('li').length).toBe(restaurants.length);
  });
  it('return id when click the item', async () => {
    wrapper.find('li').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('restaurantClick')[0]).toEqual([restaurants[0].id]);
  });
});
