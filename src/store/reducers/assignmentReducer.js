const initState = {
  assignments: []
}

const assignmentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created assignment', action.assignment)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('create assignment error', action.err)
      return state
    default:
      return state
  }
}

export default assignmentReducer