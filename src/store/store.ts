import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import users from './users/users-reducer'
import nots from './nots/nots-reducer'

const reducers = { users, nots }

const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializebleCheck: false,
			thunk: true,
		}),
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type SliceActions<T> = {
	[K in keyof T]: T[K] extends (...args: any[]) => infer A ? A : never
}[keyof T]

export type BaseThunk<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>

//@ts-ignore
window.store = store
