import * as PostAPI from '../../api/PostAPI'
import * as CommentAPI from '../../api/CommentAPI'

//changes
export const CHANGE_BODY_POST = "CHANGE_BODY_POST"
export const CHANGE_TITLE_POST = "CHANGE_TITLE_POST"

export const ADD_POST = 'ADD_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const RECIEVE_COMMENTS = 'RECIEVE_COMMENTS'

export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const GET_POST = 'GET_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const RECIEVE_POST = 'RECIEVE_POST'
export const BACK_TO_CATEGORY = 'BACK_TO_CATEGORY'


export const PREPARE_ADD_POST = 'PREPARE_ADD_POST'

export function voteComment(option, comment) {
	return {type: PREPARE_ADD_POST, option: option, comment}
}

export function backToCategory(category) {
	return {type: BACK_TO_CATEGORY, category: category}

}

export function changeBody(body) {
	return {type:CHANGE_BODY_POST,  body:body}
}

export function changeTitle(title) {
	return {type:CHANGE_TITLE_POST,  title:title}
}

export function prepareAddPost(cat) {
	return {type:PREPARE_ADD_POST, category:cat}
}

export function addPost({title, body, author, category}) {
	return {type:ADD_POST, title, body, author, category}
}

export function updatePost({title, body, author, category, id}) {
	return {type:UPDATE_POST, id, title, body, author, category}
}

export function removePost({id}) {
	return {type:REMOVE_POST, id}
}

export function recievePost(data) {
	return {type:RECIEVE_POST, post:data}
}

export function recieveComments(data) {
	return {type:RECIEVE_COMMENTS, comments:data}
}

export const getPost = (id) => dispatch => (
	PostAPI.getById(id)
		.then((data) => dispatch(recievePost(data))))

export const getCommentsByPost = (id) => dispatch => (
	CommentAPI.getCommentsByPost(id)
		.then((data) => dispatch(recieveComments(data)))
)

export const editPost = (post) => dispatch => (
	PostAPI.updatePostDetails(post)
	.then(data => dispatch(updatePost(data)))
)

export const createPost = ({title, body, author, category}) => dispatch => (
	PostAPI
	.add({
		title,
		body,
		author,
		category
	})
	.then(data => dispatch(addPost(data))))




