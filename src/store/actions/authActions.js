export const signUp = (newUser) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { firstName, lastName, email } = newUser
    // console.log(newUser)
    firestore.collection('users').doc(newUser.auth.uid).set({
      firstName,
      lastName,
      initials: firstName[0] + lastName[0],
      email,
      memberSince: new Date()
    })
    .then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    })
    .catch(err => {
      dispatch({type: 'SIGNUP_ERROR', err})
    })
  }
}

export const formValidation = () => {
  return (dispatch, getState) => {
    dispatch({type: 'SIGNUP_INCOMPLETE'})
  }
}