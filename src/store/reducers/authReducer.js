const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      console.log('signed up')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error', action.err)
      return {
        ...state,
        authError: action.err
      }
    case 'SIGNUP_INCOMPLETE':
      return {
        ...state,
        authError: 'Please completely all fields on the form'
      }
    default:
      return state
  }
}

export default authReducer