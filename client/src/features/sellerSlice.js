import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentSeller: null,
};

const sellerSlice = createSlice({
    name: 'seller',
    initialState,
    reducers: {

        setCredentials: (state, action) => {
            state.currentSeller = action.payload
        },
        signOut: (state) => {
            state.currentSeller = null;
        },
    },
});

export const {
    setCredentials,
    signOut
} = sellerSlice.actions;

export default sellerSlice.reducer;