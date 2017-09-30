import {CHANGE_USER_NAME, LOGIN_USER} from '../actions'

const initialState = {user : '', newUser: ''}

export function user(state = initialState, action) {
	console.log(action)
	switch(action.type) {
		case CHANGE_USER_NAME:
			return {...state, newUser: action.user}
		case LOGIN_USER:  
			console.log('jojojojo')
			return {...state, user: action.user}
		default:
			return state
	}
}
