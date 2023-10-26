import * as actionTypes from './actionTypes';

import {
  RealEstateListingAction,
  RealEstateListingHistoryAction,
  RealEstateListingsState,
} from '@/models/type';

const initialState = {
  realEstateListing: null,
  realEstateListingHistorys: null,
};

const reducer = (
  state: RealEstateListingsState = initialState,
  action: RealEstateListingAction | RealEstateListingHistoryAction,
): RealEstateListingsState => {
  switch (action.type) {
    case actionTypes.FETCH_LISTING:
      return {
        ...state,
        realEstateListing: [
          ...(action as RealEstateListingAction).realEstateListing,
        ],
      };
    case actionTypes.ADD_LISTING:
      return {
        ...state,
        realEstateListing: state.realEstateListing
          ? [
              ...state.realEstateListing,
              ...(action as RealEstateListingAction).realEstateListing,
            ]
          : [...(action as RealEstateListingAction).realEstateListing],
      };
    case actionTypes.FETCH_LISTING_HISTORY:
      return {
        ...state,
        realEstateListingHistorys:
          state.realEstateListingHistorys &&
          state.realEstateListingHistorys?.length > 0
            ? state.realEstateListingHistorys?.concat({
                id: (action as RealEstateListingHistoryAction).id,
                realRealStateListingHistory: [
                  ...(action as RealEstateListingHistoryAction)
                    .realEstateListingHistory,
                ],
              })
            : [
                {
                  id: (action as RealEstateListingHistoryAction).id,
                  realRealStateListingHistory: [
                    ...(action as RealEstateListingHistoryAction)
                      .realEstateListingHistory,
                  ],
                },
              ],
      };
  }
  return state;
};

export default reducer;
