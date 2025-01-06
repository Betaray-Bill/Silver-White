import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
    flat: '',
    area: '',
    landmark: '',
    state: '',
    pincode: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser(state, action) {
            state[action.payload.field] = action.payload.value;
        },
        resetUser(state) {
            return initialState;
        }
    }
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;