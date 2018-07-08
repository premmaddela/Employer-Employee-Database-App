import types from './types';
import { createDefaultReducer } from '../../helpers'

import initialState from './initialState'

const addPerson = (state, payload) => {
    const { companies } = state;
    const { employer } = payload;
    companies[employer].persons.push(payload);
    return {
        ...state,
        companies
    }
};

const addCompany = (state, payload) => {
    const { companies } = state;
    var newItem = {
       company: payload,
       persons: [] 
    }
    companies.push(newItem);
    return {
        ...state,
        companies
    }
};


const actionMap = {
  [types.ADD_COMPANY]: addCompany,
  [types.ADD_PERSON]: addPerson,
};

export default createDefaultReducer(actionMap, initialState)