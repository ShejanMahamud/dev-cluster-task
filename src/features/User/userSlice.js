import { createSlice } from "@reduxjs/toolkit"
import auth from "../../config/firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


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

  export const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
return signInWithPopup(auth,googleProvider) 
  }
  
export const logOut = () => {
    return signOut(auth)
}

export default userSlice.reducer;