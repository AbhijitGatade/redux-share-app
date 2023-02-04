import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import usersReducer from './user/usersSlice';

export default configureStore({
  reducer: {
    user:userReducer,
    users:usersReducer
  },
})