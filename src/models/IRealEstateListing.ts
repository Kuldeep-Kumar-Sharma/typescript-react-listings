import { PostalAddress } from './PostalAddress';
import { RealEstateListingBuildingType } from './RealEstateListingBuildingType';

export interface IRealEstateListing {
  id: number;
  name?: string;
  postal_address?: PostalAddress;
  description?: string;
  building_type?: RealEstateListingBuildingType;
  latest_price_eur?: number;
  surface_area_m2?: number;
  rooms_count?: number;
  bedrooms_count?: number;
  contact_phone_number?: string;
  created_date?: string;
  updated_date?: string;
}

export interface IRealEstateListingHistory {
  created_date?: string;
  price_eur?: string;
}

export interface IRealEstateListingHistorys {
  id: number;
  realRealStateListingHistory: IRealEstateListingHistory[];
}
