export const SET_CLIENTS = 'clients/SET_CLIENTS'

const initialState = {
  clients_list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENTS:
      return {
        ...state,
        clients_list: action.clients
      }

    default:
      return state
  }
}

export const setClients = (clients) => {
  return dispatch => {
    dispatch({
      type: SET_CLIENTS,
      clients
    })
  }
}
