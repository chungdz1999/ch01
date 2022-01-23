import counterReducer from '../features/Counter/counterSlice';
import cartReducer from '../features/Cart/CartSlice';
import userReducer from '../features/Auth/userSlice';

const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
    counter: counterReducer,
    user: userReducer,
    cart: cartReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;