import { render, screen } from "@testing-library/react";
import Listings from "./Listings";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Import redux-thunk middleware
import rootReducer from "../../store/reducer"; // Import your root reducer

// Create a mock Redux store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));
global.fetch = jest.fn().mockImplementation(() => {
  // Return a mock response
  return new Promise((resolve) => {
    resolve({
      json: () =>
        Promise.resolve({
          data: [
            {
              bedrooms_count: 2,
              building_type: "STUDIO",
              contact_phone_number: "+219779210354",
              created_date: "2023-01-17T14:19:22.808738",
              description: "",
              id: 1,
              latest_price_eur: 710000.0,
              name: "Mikhail Schmiedt",
              postal_address: {
                city: "Berchtesgaden",
                country: "DE",
                postal_code: "21810",
                street_address: "Johan-Ernst-Ring 7",
              },
              rooms_count: 6,
              surface_area_m2: 167.0,
              updated_date: "2023-01-17T14:20:47.707666",
            },
          ],
        }),
    });
  });
});

//This test case more work, I haven't done this before :()

describe("Listings", () => {
  it("should render the title, aside, and section elements", () => {
    render(
      <Provider store={store}>
        <Listings />{" "}
      </Provider>
    );

    // Check that the title element is rendered
    expect(screen.getByText("Main Listings page")).toBeInTheDocument();

    // Check that the aside element is rendered
    expect(screen.getByText("Add a listing")).toBeInTheDocument();

    // Check that the section element is rendered
    expect(screen.getByText("Listings")).toBeInTheDocument();
  });
});
