import { RootState } from '../store'

export const getUsers = ({ users: { users } }: RootState) => users
export const getCount = ({ users: { count } }: RootState) => count
export const getFilters = ({ users: { filters } }: RootState) => filters
export const getIsLoading = ({ users: { isLoading } }: RootState) => isLoading
