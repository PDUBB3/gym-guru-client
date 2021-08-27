const reducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      user: null,
    };
  }

  if (action.type === "UPDATE_ATTENDING_GYM") {
    const newUser = { ...state.user };
    newUser.attendingGymId = action.payload.attendingGymId;

    const newState = {
      ...state,
      user: newUser,
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    return newState;
  }

  if (action.type === "UPDATE_OWNED_GYM") {
    const newUser = { ...state.user };
    newUser.ownedGymId = action.payload.ownedGymId;

    const newState = {
      ...state,
      user: newUser,
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    return newState;
  }

  return state;
};

export default reducer;
