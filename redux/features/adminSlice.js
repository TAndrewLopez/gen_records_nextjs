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

//CREATE
export const createArtist = createAsyncThunk(
  "createArtist",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/artists`, {
      method: "POST",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const createLineItem = createAsyncThunk(
  "createLineItem",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/lineItems`, {
      method: "POST",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const createOrder = createAsyncThunk(
  "createOrder",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/orders`, {
      method: "POST",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const createTrack = createAsyncThunk(
  "createTrack",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/tracks`, {
      method: "POST",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const createUser = createAsyncThunk(
  "createUser",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/users`, {
      method: "POST",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const createVinyl = createAsyncThunk(
  "createVinyl",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/vinyls`, {
      method: "POST",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);

//UPDATE
export const updateArtist = createAsyncThunk(
  "updateArtist",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/artists/${form.id}`, {
      method: "PUT",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const updateLineItem = createAsyncThunk(
  "updateLineItem",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/lineItems/${form.id}`, {
      method: "PUT",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const updateOrder = createAsyncThunk(
  "updateOrder",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/orders/${form.id}`, {
      method: "PUT",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const updateTrack = createAsyncThunk(
  "updateTrack",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/tracks/${form.id}`, {
      method: "PUT",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const updateUser = createAsyncThunk(
  "updateUser",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/users/${form.id}`, {
      method: "PUT",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const updateVinyl = createAsyncThunk(
  "updateVinyl",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/vinyls/${form.id}`, {
      method: "PUT",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);

//DELETE
export const deleteArtist = createAsyncThunk(
  "deleteArtist",
  async (id, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/artists/${id}`, {
      method: "DELETE",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const deleteLineItem = createAsyncThunk(
  "deleteLineItem",
  async (id, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/lineItems/${id}`, {
      method: "DELETE",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const deleteOrder = createAsyncThunk(
  "deleteOrder",
  async (id, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/orders/${id}`, {
      method: "DELETE",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const deleteTrack = createAsyncThunk(
  "deleteTrack",
  async (id, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/tracks/${id}`, {
      method: "DELETE",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);
export const deleteVinyl = createAsyncThunk(
  "deleteVinyl",
  async (id, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { success } = await fetch(`/api/admin/vinyls/${id}`, {
      method: "DELETE",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (success) {
      thunkAPI.dispatch(getAdminContent());
    }
    return success;
  }
);

export const { clearToast } = adminSlice.actions;

export default adminSlice.reducer;
