import { useNavigate } from 'react-router-dom';

import styles from './listing-card.module.scss';

import { IRealEstateListing } from '@/models/IRealEstateListing';

type Props = IRealEstateListing;
const ListingCard = (props: Props) => {
  const navigate = useNavigate();
  const handleNavigation = (id: number) => navigate(`/priceHistory/${id}`);
  return (
    <article className={styles['listing-card']}>
      <span className={styles['listing-card__price']}>
        {props?.latest_price_eur} &euro;
      </span>
      <ul className={styles['listing-card__properties']}>
        <li className={styles['listing-card__properties-item']}>
          {props?.building_type}
        </li>
        <li className={styles['listing-card__properties-item']}>
          {props?.surface_area_m2}m<sup>2</sup>
        </li>
        <li className={styles['listing-card__properties-item']}>
          {props?.rooms_count}rooms
        </li>
      </ul>
      <section className={styles['listing-card__address']}>
        <address>
          {props?.postal_address?.street_address}
          {props?.postal_address?.postal_code}
          {props?.postal_address?.city}
          {props?.postal_address?.country}
        </address>
      </section>
      <section className={styles['listing-card__description']}>
        <h3>Property description: </h3>
        <p>{props?.description}</p>
      </section>
      <div className={styles['listing-card__footer']}>
        <p className={styles['listing-card__reference']}>
          Ref: {props?.id} <br />
          Last update: {props?.updated_date}
        </p>
        <button
          onClick={() => handleNavigation(props?.id)}
          className={styles['listing-card__link']}
        >
          See history &rarr;
        </button>
      </div>
    </article>
  );
};

export default ListingCard;
