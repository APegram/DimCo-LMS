export const createassignment = (assignment) => {
  return (dispatch, getState, { getFirestore }) => {
    // reference our db and collection
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('assignments').add({
      ...assignment,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date()
    })
      .then(() => {
        console.log('created')
        dispatch({
          type: 'CREATE_PROJECT',
          assignment
        })
      })
      .catch((err) => {
        dispatch({
          type: 'CREATE_PROJECT_ERROR',
          err
        })
      })
  }
}

export default createassignment

