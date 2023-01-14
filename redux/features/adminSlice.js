import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    vinyls: [],
    artists: [],
  },
  extraReducers: (builder) => {
    //VINYLS THUNK
    builder.addCase(adminGetVinyls.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(adminGetVinyls.fulfilled, (state, action) => {
      const { vinyls } = action.payload;
      state.vinyls = [...vinyls.sort((a, b) => a.id - b.id)];
      state.isLoading = false;
    });

    //USERS THUNK
    builder.addCase(getAdminContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAdminContent.fulfilled, (state, action) => {
      const { users, artists } = action.payload;
      state.users = users;
      state.artists = artists;
      state.isLoading = false;
    });
  },
});

export const adminGetVinyls = createAsyncThunk(
  "adminGetVinyls",
  async (thunkAPI) => {
    const response = await fetch("/api/shop", {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export const getAdminContent = createAsyncThunk(
  "getAdminContent",
  async (thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const response = await fetch("/api/admin", {
      method: "GET",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export default adminSlice.reducer;
