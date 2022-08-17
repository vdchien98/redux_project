import { createSlice } from '@reduxjs/toolkit';
const initialStateValue = { name: '', age: 0, email: '' };
export const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            console.log('++++++', action.payload);
            state.value = action.payload; // payload chính là { name: 'Vdchien98', age: 24, email: 'vudangchien98@gmail.com' }
        },
        logout: (state, action) => {
            state.value = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
