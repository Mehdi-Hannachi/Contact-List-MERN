import {
  GET_CONTACT,
  GET_CONTACTS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../constants/actionsTypes";
import axios from "axios";

export const getContacts = () => (dispatch) => {
  axios
    .get("/api/contacts")
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const getContact = (id) => (dispatch) => {
  axios
    .get(`/api/contacts/${id}`)
    .then((res) => dispatch({ type: GET_CONTACT, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addContact = (newContact) => (dispatch) => {
  axios
    .post("/api/contacts", newContact)
    .then(() => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const deleteContact = (id) => (dispatch) => {
  axios
    .delete(`/api/contacts/${id}`)
    .then(() => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const editContact = (id, editContact) => (dispatch) => {
  axios
    .put(`/api/contacts/${id}`, editContact)
    .then(() => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};
