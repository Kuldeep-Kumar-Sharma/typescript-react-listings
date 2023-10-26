import * as actionTypes from './actionTypes';

import { IRealEstateListing } from '@/models/IRealEstateListing';
import { DispatchType, RealEstateListingHistoryDT } from '@/models/type';

export function addListingHistory(realEstateListing: IRealEstateListing) {
  return async (dispatch: DispatchType) => {
    try {
      console.log(realEstateListing);
      const response = await fetch(`http://localhost:8080/listings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(realEstateListing),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Assuming the response is in JSON format
      dispatch({
        type: actionTypes.ADD_LISTING,
        realEstateListing: [data as IRealEstateListing],
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_LISTING,
        realEstateListing: [],
      });
      console.log(error);
    }
  };
}

export function fetchListingHistory(id: number) {
  return async (dispatch: RealEstateListingHistoryDT) => {
    try {
      const response = await fetch(
        `http://localhost:8080/listings/${id}/prices`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
          },
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Assuming the response is in JSON format
      dispatch({
        type: actionTypes.FETCH_LISTING_HISTORY,
        id: id,
        realEstateListingHistory: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_LISTING_HISTORY,
        id,
        realEstateListingHistory: [],
      });
      console.log(error);
    }
  };
}

export function httpRequest() {
  return async (dispatch: DispatchType) => {
    try {
      const response = await fetch('http://localhost:8080/listings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Assuming the response is in JSON format
      dispatch({ type: actionTypes.FETCH_LISTING, realEstateListing: data });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_LISTING, realEstateListing: [] });
      console.log(error);
    }
  };
}
