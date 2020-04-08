import { createSelector } from 'reselect'
import { AppState } from './store';
import { User } from '../types';

export const usersSelector = (state: AppState) => state.users
export const querySelector = (state: AppState) => state.search

const lowerQuerySelector = createSelector(
    querySelector,
    query => query.toLowerCase()
)

export const filteredUsers = createSelector(
    [lowerQuerySelector, usersSelector],
    (query, users) => users.filter(({ name }: User) => name.toLowerCase().includes(query))
)
