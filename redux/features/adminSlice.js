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
    //ADMIN ACTIONS
    builder.addCase(deleteArtist.fulfilled, (state, { payload }) => {
      const filteredArtist = state.artists.filter(
        (artist) => artist.id !== payload.artist.id
      );
      if (payload) {
        state.artists = filteredArtist;
        state.message = "Artist has been deleted.";
      }
    });
    builder.addCase(updateArtist.fulfilled, (state, { payload }) => {
      const { updatedArtist } = payload;
      const updatedArtists = state.artists.map((artist) => {
        if (artist.id === updatedArtist.id) {
          artist = { ...updatedArtist };
        }
        return artist;
      });
      if (payload) {
        state.artists = updatedArtists;
        state.message = "Artist has been updated.";
      }
    });

    builder.addCase(deleteLineItem.fulfilled, (state, { payload }) => {
      const filteredLineItems = state.lineItems.filter(
        (artist) => artist.id !== payload.artist.id
      );
      if (payload) {
        state.lineItems = filteredLineItems;
        state.message = "Line item has been deleted.";
      }
    });
    builder.addCase(updateLineItem.fulfilled, (state, { payload }) => {
      const { updatedLineItem } = payload;
      const updatedLineItems = state.lineItems.map((lineItem) => {
        if (lineItem.id === updatedLineItem.id) {
          lineItem = { ...updatedLineItem };
        }
        return lineItem;
      });
      if (payload) {
        state.lineItems = updatedLineItems;
        state.message = "Line item has been updated.";
      }
    });

    builder.addCase(deleteOrder.fulfilled, (state, { payload }) => {
      const filteredLineItems = state.lineItems.filter(
        (artist) => artist.id !== payload.artist.id
      );
      if (payload) {
        state.lineItems = filteredLineItems;
        state.message = "Line item has been deleted.";
      }
    });
    builder.addCase(updateOrder.fulfilled, (state, { payload }) => {
      const { updatedLineItem } = payload;
      const updatedLineItems = state.lineItems.map((lineItem) => {
        if (lineItem.id === updatedLineItem.id) {
          lineItem = { ...updatedLineItem };
        }
        return lineItem;
      });
      if (payload) {
        state.lineItems = updatedLineItems;
        state.message = "Line item has been updated.";
      }
    });

    builder.addCase(deleteTrack.fulfilled, (state, { payload }) => {
      const filteredTracks = state.tracks.filter(
        (track) => track.id !== payload.track.id
      );
      if (payload) {
        state.tracks = filteredTracks;
        state.message = "Track has been deleted.";
      }
    });
    builder.addCase(updateTrack.fulfilled, (state, { payload }) => {
      const { updatedTrack } = payload;
      const updatedTracks = state.tracks.map((track) => {
        if (track.id === updatedTrack.id) {
          track = { ...updatedTrack };
        }
        return track;
      });
      if (payload) {
        state.lineItems = updatedTracks;
        state.message = "Track has been updated.";
      }
    });

    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      const filteredUsers = state.users.filter(
        (user) => user.id !== payload.user.id
      );
      if (payload) {
        state.users = filteredUsers;
        state.message = "User has been deleted.";
      }
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      const { updatedUser } = payload;
      const updatedUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          user = { ...updatedUser };
        }
        return user;
      });
      if (payload) {
        state.users = updatedUsers;
        state.message = "User has been updated.";
      }
    });

    builder.addCase(deleteVinyl.fulfilled, (state, { payload }) => {
      const filteredVinyls = state.vinyls.filter(
        (vinyl) => vinyl.id !== payload.vinyl.id
      );
      if (payload) {
        state.vinyls = filteredVinyls;
        state.message = "Vinyl has been deleted.";
      }
    });
    builder.addCase(updateVinyl.fulfilled, (state, { payload }) => {
      const { updatedVinyl } = payload;
      const updatedVinyls = state.vinyls.map((vinyl) => {
        if (vinyl.id === updatedVinyl.id) {
          vinyl = { ...updatedVinyl };
        }
        return vinyl;
      });
      if (payload) {
        state.vinyls = updatedVinyls;
        state.message = "Vinyl has been updated.";
      }
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

//UPDATE
export const updateArtist = createAsyncThunk("updateArtist", async (form) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/artists/${form.id}`, {
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
export const updateLineItem = createAsyncThunk(
  "updateLineItem",
  async (form) => {
    const authorization = localStorage.getItem("authorization");
    const response = await fetch(`/api/admin/lineItems/${form.id}`, {
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
  }
);
export const updateOrder = createAsyncThunk("updateOrder", async (form) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/orders/${form.id}`, {
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
export const updateTrack = createAsyncThunk("updateTrack", async (form) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/tracks/${form.id}`, {
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
export const updateUser = createAsyncThunk("updateUser", async (form) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/users/${form.id}`, {
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

//DELETE
export const deleteArtist = createAsyncThunk("deleteArtist", async (id) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/artists/${id}`, {
    method: "DELETE",
    headers: {
      authorization,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});
export const deleteLineItem = createAsyncThunk("deleteLineItem", async (id) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/lineItems/${id}`, {
    method: "DELETE",
    headers: {
      authorization,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});
export const deleteOrder = createAsyncThunk("deleteOrder", async (id) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/orders/${id}`, {
    method: "DELETE",
    headers: {
      authorization,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});
export const deleteTrack = createAsyncThunk("deleteTrack", async (id) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/tracks/${id}`, {
    method: "DELETE",
    headers: {
      authorization,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch(`/api/admin/users/${id}`, {
    method: "DELETE",
    headers: {
      authorization,
    },
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

export const { clearToast } = adminSlice.actions;

export default adminSlice.reducer;
