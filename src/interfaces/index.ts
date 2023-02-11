export interface Location {
  address1: string;
  city: string;
  postal_code: string;
  formatted_address: string;
}

export interface Review {
  text: string;
  rating: number;
}

export interface RestaurantListItem {
  name: string;
  id: string;
  url: string;
  phone: string;
  display_phone: string;
  rating: number;
  photos: string[];
  location: Location;
}

export interface Restaurant extends RestaurantListItem {
  reviews?: Review[];
}
