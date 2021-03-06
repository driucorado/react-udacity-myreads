import {REMOVE_COMMENT, SET_CURRENT_COMMENT, CHANGE_BODY_COMMENT, EMPTY_ADD_COMMENT} from '../actions'

const initialState = {comment: {body: ''}}


export function comment(state = initialState, action) {
	switch(action.type) {
		case CHANGE_BODY_COMMENT:
			return {...state, comment:{...state.comment, body: action.body}}
		case EMPTY_ADD_COMMENT:
			return {...state, comment: {body: ''}}
		case SET_CURRENT_COMMENT:
			return {...state, comment: action.comment}
		case REMOVE_COMMENT:
			if (state.comment.id && state.comment.id === action.id) {
				return {...state, comment: {body: ''}}
			} else {
				return state
			}
		default :
			return state
	}
}