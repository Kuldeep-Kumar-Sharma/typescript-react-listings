import { useEffect } from "react";
import ListingCard from "@components/ListingCard";
import ListingForm from "@components/ListingForm";
import { useDispatch, useSelector } from "react-redux";

import styles from "./listings.module.scss";

import { IRealEstateListing } from "@/models/IRealEstateListing";
import { RealEstateListingsState } from "@/models/type";
import { httpRequest } from "@/store/actionCreators";

const Listings = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line prettier/prettier
  const listings = useSelector<
    RealEstateListingsState,
    IRealEstateListing[] | null
  >(
    // eslint-disable-next-line prettier/prettier
    (state) => state.realEstateListing
  ); // Assuming your reducer has a 'listings' slice

  useEffect(() => {
    dispatch(httpRequest());
  }, [dispatch]);

  return (
    <main className={styles["listings"]}>
      <h1 className={styles["listings__title"]}>Main Listings page</h1>
      <div className={styles["listings__wrapper"]}>
        <aside className={styles["listings__aside"]}>
          <h2 className={styles["listings__sub-title"]}>Add a listing</h2>
          <ListingForm />
        </aside>
        <section className={styles["listings__section"]}>
          <h2 className={styles["listings__sub-title"]}>Listings</h2>
          <div className={styles["listinglistContainer"]}>
            {listings &&
              listings.length > 0 &&
              listings.sort((a, b) => {
                if (typeof a.created_date === "undefined") {
                  return 1;
                }
                if (typeof b.created_date === "undefined") {
                  return -1;
                }
                return new Date(b.created_date!) - new Date(a.created_date!);
              }) &&
              listings.map((realEstateListing) => (
                <ListingCard
                  key={realEstateListing.id}
                  {...realEstateListing}
                />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Listings;
