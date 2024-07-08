import { createSlice } from "@reduxjs/toolkit"
import auth from "../../config/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const userSlice = createSlice({
 name: 'user',
 initialState: {
    user: null,
    loading: true
 },
 reducers: {
    setUser: (state,action) => {
        state.user = action.payload;
        state.loading = false
    },
    clearUser: (state) => {
        state.user = null;
        state.loading = false
    },
    setLoading: (state,action) => {
        state.loading = action.payload;
    }
 }
})

export const {setUser,setLoading,clearUser} = userSlice.actions;


export const initializeAuth = () => (dispatch) => {
    dispatch(setLoading(true));
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  };

  export const signInWithGoogle = () => async (dispatch) => {
    try {
        const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(googleProvider);
      dispatch(setUser(result.user));
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };
  
  export const signOut = () => async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(clearUser());
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

export default userSlice.reducer;