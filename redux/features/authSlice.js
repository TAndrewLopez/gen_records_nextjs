import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    orders: [],
    cart: [],
    img: "",
    isAdmin: false,
    loggedIn: false,
    error: null,
    message: null,
  },
  reducers: {
    clearErrorMessage(state) {
      state.error = null;
      state.message = null;
    },
    clearSuccessMessage(state) {
      state.error = null;
      state.message = null;
    },
    getLocalOrder(state) {
      const cart = localStorage.getItem("localCart");
      if (cart) {
        state.cart = JSON.parse(cart);
      } else {
        localStorage.setItem("localCart", JSON.stringify([]));
      }
    },
    addItemLocally(state, { payload }) {
      const cart = JSON.parse(localStorage.getItem("localCart"));
      if (payload) {
        cart.push({ qty: 1, vinyl: payload });
        localStorage.setItem("localCart", JSON.stringify(cart));
        state.cart.push({ qty: 1, vinyl: payload });
        state.message = "Item added to cart.";
      }
    },
    removeItemLocally(state, { payload }) {
      const cart = JSON.parse(localStorage.getItem("localCart"));
      const filteredCart = cart.filter((item) => item.vinyl.id !== payload.id);
      localStorage.setItem("localCart", JSON.stringify(filteredCart));
      state.cart = [...filteredCart];
      state.message = "Item removed to cart.";
    },
    changeQuantityLocally(state, action) {
      const cart = JSON.parse(localStorage.getItem("localCart"));
      const adjustedCart = cart.map((item) => {
        if (action.payload.qty > item.vinyl.stock || action.payload.qty < 1) {
          state.error = true;
          state.message = "Unable to modify line item. Please try again.";
          return item;
        }
        if (action.payload.id === item.vinyl.id) {
          state.error = null;
          item.qty = action.payload.qty;
          state.message = "Changes saved.";
        }
        return item;
      });

      state.cart = [...adjustedCart];
      localStorage.setItem("localCart", JSON.stringify(adjustedCart));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, action) => {
      const { payload } = action;
      const { id, firstName, lastName, username, email, img, isAdmin } =
        payload;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.email = email;
      state.isAdmin = isAdmin;
      state.img = img;
      state.loggedIn = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      localStorage.removeItem("authorization");
      state.id = 0;
      state.firstName = "";
      state.lastName = "";
      state.username = "";
      state.email = "";
      state.orders = [];
      state.cart = [];
      state.img = "";
      state.isAdmin = false;
      state.loggedIn = false;
      state.error = null;
      state.message = null;
      state.cart = JSON.parse(localStorage.getItem("localCart"));
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.error = true;
        state.message = "Unable to update user information.";
        return;
      }
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.username = payload.username;
      state.email = payload.email;
      state.img = payload.img;
      state.isLoading = false;
      state.error = null;
      state.message = "Information has been saved!";
    });
    builder.addCase(getUserOrders.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload) {
        const [openOrder] = payload.filter((order) => order.complete === false);
        state.orders = [...payload];
        state.cart = [...openOrder.lineItems.sort((a, b) => a.id - b.id)];
      }
    });
    builder.addCase(addLineItem.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.error = true;
        state.message = "Unable to add line item.";
        return;
      }
      state.error = null;
      state.message = "Item added to cart.";
      state.cart.push(payload);
    });
    builder.addCase(changeLineItemQty.fulfilled, (state, action) => {
      const { payload } = action;
      if (!payload) {
        state.error = true;
        state.message = "Unable to modify line item. Please try again.";
        return;
      }
      const existingItems = state.cart.filter((item) => payload.id !== item.id);
      existingItems.push(payload);
      state.cart = [...existingItems.sort((a, b) => a.id - b.id)];
      state.error = null;
    });
    builder.addCase(removeLineItem.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cart = [...state.cart.filter((item) => item.id !== payload)];
        state.error = null;
        state.message = "Item removed from cart.";
      }
    });
  },
});

//AUTH
export const me = createAsyncThunk("me", async (thunkAPI) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch("/api/auth/me", {
    method: "GET",
    headers: { authorization },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

export const login = createAsyncThunk("login", async (form, thunkAPI) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  if (response.authorization) {
    localStorage.setItem("authorization", response.authorization);
    thunkAPI.dispatch(me());
  }
  return response.authorization;
});

export const logout = createAsyncThunk("logout", async (thunkAPI) => {
  const response = await fetch("/api/auth/logout", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

export const demoLogin = createAsyncThunk(
  "demoLogin",
  async (user, thunkAPI) => {
    let demoForm;
    if (user) {
      demoForm = {
        username: "administrator",
        password: "adminPassword",
      };
    } else {
      demoForm = {
        username: "visitor",
        password: "visitorPassword",
      };
    }
    const { authorization } = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(demoForm),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));

    if (authorization) {
      localStorage.setItem("authorization", authorization);
      thunkAPI.dispatch(me());
    }
    return authorization;
  }
);

export const createUser = createAsyncThunk(
  "createUser",
  async (form, thunkAPI) => {
    const { authorization } = await fetch("/api/auth/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));

    if (authorization) {
      localStorage.setItem("authorization", authorization);
      thunkAPI.dispatch(me());
    }
    return authorization;
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { user } = await fetch(`/api/auth/${form.id}`, {
      method: "PUT",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return user;
  }
);

//USER SPECIFIC ORDER
export const getUserOrders = createAsyncThunk(
  "getUserOrders",
  async (userId, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { userOrders } = await fetch(`/api/shop/cart/${userId}`, {
      method: "GET",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return userOrders;
  }
);

export const addLineItem = createAsyncThunk(
  "addLineItem",
  async (vinylId, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { itemWithContents } = await fetch(`/api/shop/cart/${vinylId}`, {
      method: "PUT",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return itemWithContents;
  }
);

export const changeLineItemQty = createAsyncThunk(
  "changeLineItemQty",
  async (item, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { updatedItem, error } = await fetch(`/api/shop/cart/qty`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization,
      },
      body: JSON.stringify({ id: item.id, qty: item.qty }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (error) {
      return error;
    }

    return updatedItem;
  }
);

export const removeLineItem = createAsyncThunk(
  "removeLineItem",
  async (lineItemId, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { lineItem } = await fetch(`/api/shop/cart/${lineItemId}`, {
      method: "DELETE",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return lineItem;
  }
);

export default authSlice.reducer;
export const {
  clearErrorMessage,
  clearSuccessMessage,
  getLocalOrder,
  addItemLocally,
  removeItemLocally,
  changeQuantityLocally,
} = authSlice.actions;
