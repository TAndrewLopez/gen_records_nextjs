import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    allVinyls: [],
    singleVinyl: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopVinyls.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getShopVinyls.fulfilled, (state, action) => {
      const { vinyls } = action.payload;
      state.allVinyls = vinyls.sort((a, b) => a.id - b.id);
      state.isLoading = false;
    });
    builder.addCase(getSingleVinyl.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleVinyl.fulfilled, (state, action) => {
      const { payload } = action;
      state.singleVinyl = payload.vinyl;
      state.isLoading = false;
    });
  },
});

export const getShopVinyls = createAsyncThunk("getShopVinyls", async () => {
  const response = await fetch("/api/shop", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

export const getSingleVinyl = createAsyncThunk(
  "getSingleVinyl",
  async (vinylId) => {
    const response = await fetch(`/api/shop/${vinylId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export default shopSlice.reducer;
