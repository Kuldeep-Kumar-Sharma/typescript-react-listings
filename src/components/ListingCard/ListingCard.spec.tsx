import { render, screen, fireEvent } from "@testing-library/react";
import ListingCard from "./ListingCard";
import { IRealEstateListing } from "@/models/IRealEstateListing";
import { RealEstateListingBuildingType } from "@/models/RealEstateListingBuildingType";
import { BrowserRouter as Router } from "react-router-dom";


describe("ListingCard", () => {
  it("should render the listing information and a link to the price history page", () => {
    const listing: IRealEstateListing = {
      id: 1,
      latest_price_eur: 100000,
      building_type: RealEstateListingBuildingType.APARTMENT,
      surface_area_m2: 50,
      rooms_count: 2,
      postal_address: {
        street_address: "123 Schuma Street",
        postal_code: "12345",
        city: "Corwana",
        country: "Norway",
      },
      description: "A nice apartment in a great location.",
      updated_date: "2023-10-27T19:56:16Z",
    };

    render(
      <Router>
        <ListingCard {...listing} />
      </Router>
    );

    const textMatcher = (content: string | string[], element: any) =>
      content.includes("100000") && content.includes("€");
    const priceElement = screen.getByText(textMatcher);
    expect(priceElement).toBeInTheDocument();
    expect(screen.getByText("APARTMENT")).toBeInTheDocument();
    expect(screen.getByText("50m")).toBeInTheDocument();
    expect(screen.getByText("2rooms")).toBeInTheDocument();
    expect(
      screen.getByText("123 Schuma Street12345CorwanaNorway")
    ).toBeInTheDocument();
    expect(
      screen.getByText("A nice apartment in a great location.")
    ).toBeInTheDocument();
    const linkToPriceHistoryPage = screen.getByText("See history →");
    expect(linkToPriceHistoryPage).toBeInTheDocument();
    fireEvent.click(linkToPriceHistoryPage);
  });
});
