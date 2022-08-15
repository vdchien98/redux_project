import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: { name: 'Vdchien98', age: 0, email: 'vudangchien98@gmail.com' } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
