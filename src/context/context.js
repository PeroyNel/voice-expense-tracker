import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ExpenseTrackerContext.Provider value={{ appName: 'Expense Tracker' }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}