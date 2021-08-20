import { createSlice } from '@reduxjs/toolkit'

// const [user, setuser] =  useState(null);
// const [userEmail, setUserEmail] =  useState(null);
const initialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.user = action.payload.user
        },
        setSignOut: state => {
            state.user = null
        }
    }
});

export const { setSignIn, setSignOut } = userSlice.actions

export const selectUser = state => state.user.user

export default userSlice.reducer