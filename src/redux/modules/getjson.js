const initialState = {
  jsonResult: []
};

const getjson = (state = initialState, action) => {
  switch (action.type) {
    case 'JSON_TODOS':
      return {
        ...state,
        jsonResult: action.jsonResult
      }
          
    default:
      return state
  }
}

export default getjson