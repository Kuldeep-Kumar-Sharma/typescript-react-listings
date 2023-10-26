import styles from './price-history-card.module.scss';

import { IRealEstateListingHistory } from '@/models/IRealEstateListing';

type Props = IRealEstateListingHistory;

const PriceHistoryCard = (props: Props) => {
  return (
    <div className={styles['container']}>
      <table className={styles['price-card']}>
        <tbody>
          <tr className={styles['price-card__header']}>
            <th scope="col">Date</th>
            <th scope="col">Price (eur)</th>
          </tr>
          <tr>
            <td>{props?.created_date}</td>
            <td>{props?.price_eur}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PriceHistoryCard;
