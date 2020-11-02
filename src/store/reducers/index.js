const initialState = {
    userData: []
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_DATA") {
      const { title, name } = action.payload
      const existingRecord = state.userData.find(userTitle => userTitle.title === title)
      if (!existingRecord) {
        state.userData.push(action.payload);};
    };

    if (action.type === "EDIT_DATA") {
      const { title, name } = action.payload
      const existingRecord = state.userData.find(userTitle => userTitle.title === title)
      if (existingRecord) {
        existingRecord.title = title
        existingRecord.name = name
    };}
    return state;
  };
  
  export default rootReducer;