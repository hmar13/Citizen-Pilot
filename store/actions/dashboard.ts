import { Dispatch } from 'redux';
import {
  SAVE_NEWS,
  SAVE_CONTACTS,
  SAVE_PROJECTS,
  SAVE_PROPOSALS
}
  from './ActionTypes';
import { getAllNews, getContacts, getProjects } from '../../services/Apiclient';



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

// export function fetchContacts () {
//   return function (dispatch) {
//     getContacts()
//       .then((contacts: []) => {
//         dispatch(setContacts(contacts));
//       })
//   };
// }

// export function fetchProjects () {
//   return function (dispatch) {
//     getProjects()
//       .then((projects: []) => {
//         dispatch(setProjects(projects));
//       })
//   };
// }

// export function fetchProposals () {
//   return function (dispatch) {
//     getProposals()
//       .then((proposals: []) => {
//         dispatch(setProposals(proposals));
//       })
//   };
// }





export const setContacts = (contacts: []) => ({
  type: SAVE_CONTACTS,
  payload: contacts
});


export const setProjects = (projects: []) => ({
  type: SAVE_PROJECTS,
  payload: projects,
});

export const setProposals = (proposals: []) => ({
  type: SAVE_PROPOSALS,
  payload: proposals

});

