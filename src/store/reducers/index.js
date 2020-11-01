const initialState = {
    userData: []
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_DATA") {
      state.userData.push(action.payload);
    };
    if (action.type === "EDIT_DATA") {
      const { title, name } = action.payload
      const existingRecord = state.userData.find(userTitle => userTitle.title === title)
      if (existingRecord) {
        console.log("existiong record found")
        existingRecord.title = title
        existingRecord.name = name
    };}
    return state;
  };
  
  export default rootReducer;