import { render, screen } from "@testing-library/react";
import PricesHistory from "./PricesHistory";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Import redux-thunk middleware
import rootReducer from "../../store/reducer"; // Import your root reducer

// Create a mock Redux store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

describe("PricesHistory", () => {
  it("should render the title and link to the home page", () => {
    render(
      <Provider store={store}>
        <PricesHistory />
      </Provider>
    );

    // Check that the title is rendered
    expect(screen.getByText("Prices History")).toBeInTheDocument();

    // Check that the link to the home page is rendered
    expect(screen.getByText("← Back Home")).toBeInTheDocument();
  });
});
