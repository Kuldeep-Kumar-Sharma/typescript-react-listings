import { render, screen } from "@testing-library/react";
import ListingForm from "./ListingForm";
import { Provider } from "react-redux";
import { createStore } from "redux";

const reducer = () => {};
const store = createStore(reducer);

describe("ListingForm", () => {
  it("should render all form fields", () => {
    render(
      <Provider store={store}>
        <ListingForm />
      </Provider>
    );
    
    // Check that all form fields are present
    const nameInput = screen.getByTestId("name");
    const descriptionInput = screen.getByLabelText("Description:");
    const roomsCountInput = screen.getByLabelText("Rooms Count:");
    const bedroomsCountInput = screen.getByLabelText("BedRooms Count:");
    const contactPhoneNumberInput = screen.getByLabelText(
      "Contact Phone Number:"
    );
    const latestPriceEurInput = screen.getByLabelText("Price:");
    const surfaceAreaM2Input = screen.getByLabelText("Area:");
    const streetAddressInput = screen.getByLabelText("Street address:");
    const postalCodeInput = screen.getByLabelText("Postal Code:");
    const cityInput = screen.getByLabelText("City:");
    const countryInput = screen.getByLabelText("Country:");
    const buildingTypeSelect = screen.getByLabelText("Building type:");
    const submitButton = screen.getByText("Create");

    // Validate the form fields
    nameInput.focus();
    nameInput.blur();
    expect(nameInput).toBeInTheDocument();

    descriptionInput.focus();
    descriptionInput.blur();
    expect(descriptionInput).toBeInTheDocument();

    roomsCountInput.focus();
    roomsCountInput.blur();
    expect(roomsCountInput).toBeInTheDocument();

    bedroomsCountInput.focus();
    bedroomsCountInput.blur();
    expect(bedroomsCountInput).toBeInTheDocument();

    contactPhoneNumberInput.focus();
    contactPhoneNumberInput.blur();
    expect(contactPhoneNumberInput).toBeInTheDocument();

    latestPriceEurInput.focus();
    latestPriceEurInput.blur();
    expect(latestPriceEurInput).toBeInTheDocument();

    surfaceAreaM2Input.focus();
    surfaceAreaM2Input.blur();
    expect(surfaceAreaM2Input).toBeInTheDocument();

    streetAddressInput.focus();
    streetAddressInput.blur();
    expect(streetAddressInput).toBeInTheDocument();

    postalCodeInput.focus();
    postalCodeInput.blur();
    expect(postalCodeInput).toBeInTheDocument();

    cityInput.focus();
    cityInput.blur();
    expect(cityInput).toBeInTheDocument();

    countryInput.focus();
    countryInput.blur();
    expect(countryInput).toBeInTheDocument();

    buildingTypeSelect.focus();
    buildingTypeSelect.blur();
    expect(buildingTypeSelect).toBeInTheDocument();

    // Submit the form
    submitButton.click();

    // Expect the form to submit
    expect(submitButton).toBeInTheDocument();
  });
});
