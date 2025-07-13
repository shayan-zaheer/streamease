import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_id: null,
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    profile_image_url: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userProfile: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearUser: () => {
            return initialState;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;