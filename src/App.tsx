import Header from '@components/Header/Header';
import Listings from '@containers/Listings/Listings';
import PricesHistory from '@containers/PricesHistory/PricesHistory';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { applyMiddleware, Store } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

import {
  DispatchType,
  RealEstateListingAction,
  RealEstateListingHistoryAction,
  RealEstateListingHistoryDT,
  RealEstateListingsState,
} from './models/type';
import reducer from './store/reducer';

const store: Store<
  RealEstateListingsState,
  RealEstateListingAction | RealEstateListingHistoryAction
> & {
  dispatch: DispatchType | RealEstateListingHistoryDT;
} = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <>
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/priceHistory/:id" element={<PricesHistory />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);

export default App;
