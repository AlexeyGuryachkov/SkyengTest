import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SliceActions } from '../store'

import { INot, INotsState } from './nots-types'

const initialState: INotsState = {
	nots: [],
}

const nots = createSlice({
	name: 'nots',
	initialState,
	reducers: {
		setNots: (state, action: PayloadAction<{ not: INot }>) => {
			state.nots = [...state.nots, action.payload.not]
		},

		clearNots: (state, action) => {
			state.nots = action.payload
		},
	},
})

const { actions, reducer } = nots

export const { setNots, clearNots } = actions

export default reducer

export type NotsActions = SliceActions<typeof actions>
