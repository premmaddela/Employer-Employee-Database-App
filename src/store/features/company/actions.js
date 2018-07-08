import types from './types';

function addCompany(data) {
  return {
    type: types.ADD_COMPANY,
    payload: data
  }
}

function addPerson(data) {
  return {
    type: types.ADD_PERSON,
    payload: data
  }
}

export default {
  addCompany,
  addPerson
};