import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import userApi from '../../api/user-api'

import { BaseThunk, SliceActions } from '../store'

import { NotsActions, setNots } from '../nots/nots-reducer'

import { IUserInfo, IUsersState } from './users-types'
import { INot } from '../nots/nots-types'

const initialState: IUsersState = {
	users: [],
	count: 0,
	isLoading: false,
	filters: {
		name: '',
		sort: 'repositories',
		page: 1,
	},
}

const users = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<{ users: IUserInfo[] }>) => {
			state.users = action.payload.users
		},

		setCount: (state, action: PayloadAction<{ count: number }>) => {
			state.count = action.payload.count
		},

		setFilters: (state, action) => {
			state.filters = { ...state.filters, ...action.payload.filters }
		},

		setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading
		},
	},
})

const { actions, reducer } = users

export const { setUsers, setIsLoading, setFilters, setCount } = actions

export const requestUsers = (): Thunk => async (dispatch, getState) => {
	const {
		users: {
			filters: { name, sort, page },
		},
	} = getState()

	dispatch(setIsLoading({ isLoading: true }))

	try {
		const res = await userApi.getUsersByName({ name, sort, page })
		dispatch(setCount({ count: res.total_count }))
		dispatch(setUsers({ users: res.items }))
	} catch (e: any) {
		const not: INot = {
			message: e.response.data.message,
			id: Date.now(),
		}
		dispatch(setNots({ not }))
	}

	dispatch(setIsLoading({ isLoading: false }))
}

export const clearUsersState = (): Thunk => async (dispatch) => {
	dispatch(setUsers({ users: [] }))
	dispatch(setFilters({ name: '', sort: 'repositories', page: 1 }))
}

export type UsersActions = SliceActions<typeof actions>
type Thunk = BaseThunk<UsersActions | NotsActions, void>

export default reducer
