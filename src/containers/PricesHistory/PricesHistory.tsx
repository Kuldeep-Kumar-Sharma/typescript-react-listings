import { useEffect } from 'react';
import PricesHistoryCard from '@components/PriceHistoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './prices-history.module.scss';

import { IRealEstateListingHistorys } from '@/models/IRealEstateListing';
import { RealEstateListingsState } from '@/models/type';
import { fetchListingHistory } from '@/store/actionCreators';

const PricesHistory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // eslint-disable-next-line prettier/prettier
  const listingsHistory = useSelector<
    RealEstateListingsState,
    IRealEstateListingHistorys[] | null
  >(
    // eslint-disable-next-line prettier/prettier
    (state) => state.realEstateListingHistorys,
  );
  const realRealStateListingHistory = listingsHistory?.find(
    (fetchListingHistory) =>
      fetchListingHistory?.id && id && fetchListingHistory.id === parseInt(id),
  );

  useEffect(() => {
    if (
      !(
        listingsHistory &&
        id &&
        listingsHistory?.find(
          (fetchListingHistory) => fetchListingHistory?.id === parseInt(id),
        )
      )
    ) {
      dispatch(fetchListingHistory(id));
    }
  }, [dispatch, id, listingsHistory]);
  return (
    <div className={styles['container']}>
      <h1>Prices History</h1>
      {realRealStateListingHistory?.realRealStateListingHistory &&
        realRealStateListingHistory?.realRealStateListingHistory.length > 0 &&
        realRealStateListingHistory?.realRealStateListingHistory.map(
          (listingsHistory) => <PricesHistoryCard {...listingsHistory} />,
        )}

      <a href="/" className={styles['link']}>
        &larr; Back Home
      </a>
    </div>
  );
};
export default PricesHistory;
