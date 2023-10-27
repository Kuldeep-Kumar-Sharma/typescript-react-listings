import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import styles from './listing-form.module.scss';

import { IRealEstateListing } from '@/models/IRealEstateListing';
import { addListingHistory } from '@/store/actionCreators';

const ListingForm = () => {
  const { register, handleSubmit } = useForm<IRealEstateListing>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<IRealEstateListing> = (data) => {
    dispatch(addListingHistory(data));
  };

  return (
    <form className={styles["listing-form"]} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles["listing-form__card"]}>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            data-testid="name"
            {...register("name", { required: true })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            {...register("description", { required: true })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="rooms_count">Rooms Count:</label>
          <input
            type="number"
            id="rooms_count"
            {...register("rooms_count", {
              required: true,
              setValueAs: (v) => parseInt(v),
            })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="bedrooms_count">BedRooms Count:</label>
          <input
            type="number"
            id="bedrooms_count"
            {...register("bedrooms_count", {
              required: true,
              setValueAs: (v) => parseInt(v),
            })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="contact_phone_number">Contact Phone Number:</label>
          <input
            type="number"
            id="contact_phone_number"
            {...register("contact_phone_number", { required: true })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="latest_price_eur">Price:</label>
          <input
            type="text"
            id="latest_price_eur"
            {...register("latest_price_eur", {
              required: true,
              setValueAs: (v) => parseInt(v),
            })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="surface_area_m2">Area:</label>
          <input
            type="number"
            id="surface_area_m2"
            {...register("surface_area_m2", {
              required: true,
              setValueAs: (v) => parseInt(v),
            })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="postal_address.street_address">Street address:</label>
          <input
            type="text"
            id="postal_address.street_address"
            {...register("postal_address.street_address", { required: true })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="postal_address.postal_code">Postal Code:</label>
          <input
            type="text"
            id="postal_address.postal_code"
            {...register("postal_address.postal_code", { required: true })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="postal_address.city">City:</label>
          <input
            type="text"
            id="postal_address.city"
            {...register("postal_address.city", { required: true })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="postal_address.country">Country:</label>
          <input
            type="text"
            id="postal_address.country"
            {...register("postal_address.country", { required: true })}
            className={styles["listing-form__input-text"]}
          />
        </div>
        <div className={styles["listing-form__input-group"]}>
          <label htmlFor="building_type">Building type:</label>
          <select
            id="building_type"
            {...register("building_type", { required: true })}
            className={styles["listing-form__select"]}
          >
            <option value="STUDIO">Studio</option>
            <option value="APARTMENT">Apartment</option>
            <option value="HOUSE">House</option>
          </select>
        </div>
        <button
          type="submit"
          id="create"
          className={styles["listing-form__button--submit"]}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default ListingForm;
