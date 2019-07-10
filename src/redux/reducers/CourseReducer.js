import * as types from '../actions/ActionTypes'

export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }]
    default:
      return state
  }
}
