// export const actionCreator = () => async (dispatch) => {
//   try {
//     const { putData } = await axios.put('the route we are affecting');
//     dispatch({
//       type: yourAddAction,
//       payload: putData
//     })
//     const { postData } = await axios.post('the route we are affecting');
//     dispatch({
//       type: yourChangeAction,
//       payload: { ...state, newState }
//     })
//     const { deleteData } = await axios.delete('the route we are affecting');
//     dispatch({
//       type: yourDeleteAction,
//       payload: itemToDelete
//     })
//   } catch (error) {
//     dispatch({
//     })
//   }
// }

export const putData = (data) => {
  return {
    type: 'UPDATE_ALL_PRODUCTS',
    payload: data,
  }
}

export const postData = (data) => {
  return {
    type: 'ADD_PRODUCT',
    payload: { key: data.key, value: data.value },
  }
}

export const deleteData = (keyToDelete) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: keyToDelete,
  }
}
