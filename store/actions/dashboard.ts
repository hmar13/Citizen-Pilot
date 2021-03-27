import { Dispatch } from 'redux';
import {
  SAVE_NEWS,
  SAVE_CONTACTS,
  SAVE_PROJECTS,
  SAVE_PROPOSALS,
  SAVE_FAVOURITES
}
  from './ActionTypes';
import { getAllNews, getContacts, getProjects, getProposals, getFavourites } from '../../services/Apiclient';



export function fetchNews() {
  return function (dispatch: Dispatch) {
    getAllNews()
      .then((news: []) => {
        dispatch(setNews(news));
      })
  };
}
export const setNews = (news: []) => ({
  type: SAVE_NEWS,
  payload: news,
});

export function fetchContacts() {
  return function (dispatch: Dispatch) {
    getContacts()
      .then((contacts: []) => {
        dispatch(setContacts(contacts));
      })
  };
}

export const setContacts = (contacts: []) => ({
  type: SAVE_CONTACTS,
  payload: contacts
});

export function fetchProjects() {
  return function (dispatch: Dispatch) {
    getProjects()
      .then((projects: []) => {
        dispatch(setProjects(projects));
      })
  };
}

export const setProjects = (projects: []) => ({
  type: SAVE_PROJECTS,
  payload: projects,
});

export function fetchProposals() {
  return function (dispatch: Dispatch) {
    getProposals()
      .then((proposals: []) => {
        dispatch(setProposals(proposals));
      })
  };
}


export const setProposals = (proposals: []) => ({
  type: SAVE_PROPOSALS,
  payload: proposals

});


export function fetchFavourites(token: string) {
  return function (dispatch: Dispatch) {
    getFavourites(token)
      .then((favourites: []) => {
        dispatch(setFavourites(favourites));
      })
  };
}


export const setFavourites = (favourites: []) => ({
  type: SAVE_FAVOURITES,
  payload: favourites
});


