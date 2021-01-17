import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import SearchedPage from './Components/SearchedPage/SearchedPage';
import Shop from './Components/Shop/Shop';
import ProductInfo from './Components/ProductInfo/ProductInfo';
import Cart from './Components/Cart/Cart';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import ForgotPassword from './Components/Auth/ForgotPassword/ForgotPassword';
import Verification from './Components/Auth/Verification/Verification';
import HomepageLogin from './Components/HomepageLogin/HomepageLogin';
import OrderHistory from './Components/OrderHistory/OrderHistory';
import ViewOrder from './Components/ViewOrder/ViewOrder';
import ProfileUpdate from './Components/ProfileUpdate/ProfileUpdate';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Checkout from './Components/Checkout/Checkout';
import ConfirmOrder from './Components/ConfirmOrder/ConfirmOrder';
import LoginAdmin from './Components/Auth/LoginAdmin/LoginAdmin';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import AdminShops from './Components/AdminShops/AdminShops';
import AdminCreateShop from './Components/AdminShops/AdminCreateShop';
import AdminViewShops from './Components/AdminShops/AdminViewShops';
import AdminUpdateShop from './Components/AdminShops/AdminUpdateShop';
import AdminRemoveShop from './Components/AdminShops/AdminRemoveShop';
import AdminViewOrders from './Components/AdminOrders/AdminViewOrders';
import AdminViewSingleOrder from './Components/AdminOrders/AdminViewSingleOrder';
import AdminViewBarcodesList from './Components/AdminBarcodes/AdminViewBarcodesList';
import AdminBarcodes from './Components/AdminBarcodes/AdminBarcodes';
import AdminBarcodeEntry from './Components/AdminBarcodes/AdminBarcodeEntry';
import AdminUpdateBarcode from './Components/AdminBarcodes/AdminUpdateBarcode';
import AdminRemoveBarcode from './Components/AdminBarcodes/AdminRemoveBarcode';
import CartLogin from './Components/Cart/CartLogin';


const App=()=>{
  return(
    <div className="App" style={{ 'overflowX': 'hidden'}}>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/search-page' component={SearchedPage} />
          <Route path='/shop' component={Shop} />
          <Route path='/product' component={ProductInfo} />
          <Route path='/cart' component={Cart} />
          <Route path='/cart-login' component={CartLogin} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/otp-verification' component={Verification} />
          <Route path='/session-login' component={HomepageLogin} />
          <Route path='/order-history' component={OrderHistory} />
          <Route path='/view-order' component={ViewOrder} />
          <Route path='/profile' component={ProfileUpdate} />
          <Route path='/change-password' component={ChangePassword} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/confirm-order' component={ConfirmOrder} />
          <Route path='/admin-login' component={LoginAdmin} />
          <Route path='/admin-dashboard' component={AdminDashboard} />
          <Route path='/admin-shops' component={AdminShops} />
          <Route path='/create-shop' component={AdminCreateShop} />
          <Route path='/view-shop' component={AdminViewShops} />
          <Route path='/update-shop' component={AdminUpdateShop} />
          <Route path='/remove-shop' component={AdminRemoveShop} />
          <Route path='/admin-orders' component={AdminViewOrders} />
          <Route path='/admin-view-order' component={AdminViewSingleOrder} />
          <Route path='/admin-barcodes' component={AdminBarcodes} />
          <Route path='/view-barcodes-list' component={AdminViewBarcodesList} />
          <Route path='/add-barcode-entry' component={AdminBarcodeEntry} />
          <Route path='/update-barcode-entry' component={AdminUpdateBarcode} />
          <Route path='/remove-barcode-entry' component={AdminRemoveBarcode} />

        </Switch>
      </Router>
      
    
    </div>
  );
}

export default App;
