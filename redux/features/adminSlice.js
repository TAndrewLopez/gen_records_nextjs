import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    vinyls: [],
    artists: [],
    tracks: [],
    orders: [],
    lineItems: [],
    isLoading: false,
    error: false,
    message: "",
  },
  reducers: {
    clearToast(state) {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAdminContent.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAdminContent.fulfilled, (state, action) => {
      const { users, vinyls, artists, tracks, orders, lineItems } =
        action.payload;
      state.vinyls = vinyls;
      state.users = users;
      state.tracks = tracks;
      state.orders = orders;
      state.artists = artists;
      state.lineItems = lineItems;
      state.isLoading = false;
    });

    builder.addCase(deleteVinyl.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteVinyl.fulfilled, (state, { payload }) => {
      const filteredVinyls = state.vinyls.filter(
        (vinyl) => vinyl.id !== payload.vinyl.id
      );
      state.vinyls = filteredVinyls;
      state.isLoading = false;
    });

    builder.addCase(updateVinyl.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateVinyl.fulfilled, (state, { payload }) => {
      const { updatedVinyl } = payload;
      const updatedVinyls = state.vinyls.map((vinyl) => {
        if (vinyl.id === updatedVinyl.id) {
          vinyl = { ...updatedVinyl };
        }
        return vinyl;
      });
      state.vinyls = updatedVinyls;
      state.isLoading = false;
    });
  },
});

export const getAdminContent = createAsyncThunk("getAdminContent", async () => {
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
});

export const updateVinyl = createAsyncThunk("updateVinyl", async (form) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/vinyls/${form.id}`, {
    method: "PUT",
    headers: {
      authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

export const deleteVinyl = createAsyncThunk("deleteVinyl", async (id) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/vinyls/${id}`, {
    method: "DELETE",
    headers: {
      authorization,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

export default adminSlice.reducer;
