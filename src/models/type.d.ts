import {
  IRealEstateListing,
  IRealEstateListingHistory,
  IRealEstateListingHistorys,
} from './IRealEstateListing';

type RealEstateListingsState = {
  realEstateListing: IRealEstateListing[] | null;
  realEstateListingHistorys: IRealEstateListingHistorys[] | null;
};

type RealEstateListingAction = {
  type: string;
  realEstateListing: IRealEstateListing[];
};

type RealEstateListingHistoryAction = {
  type: string;
  id: number;
  realEstateListingHistory: IRealEstateListingHistory[];
};

type RealEstateListingHistoryDT = (
  args: RealEstateListingHistoryAction,
) => RealEstateListingHistoryAction;

type DispatchType = (args: RealEstateListingAction) => RealEstateListingAction;
