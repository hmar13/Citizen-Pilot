import { baseUrl } from '../appConfig'


// Login
export const fetchUserData = (username: string, password: string) =>
  fetch(`${baseUrl}/auth/login/user`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error('error', err));



// Register
export const postNewUser = (fname: string, lname: string, email: string, password: string) =>
  fetch(`${baseUrl}/auth/signup`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fname, lname, email, password })
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// Dashboard
export const getAllNews = () =>
  fetch(`${baseUrl}/news`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));

// city contacts
export const getContacts = () =>
  fetch(`${baseUrl}/contacts`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));

// projects
export const getProjects = () =>
  fetch(`${baseUrl}/projects`)
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));


// favourites
export const getFavourites = (token: string) =>
  fetch(`${baseUrl}/favourites`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));

// add a favourite
export const addFavourite = (token: string, favourite: any) =>
  fetch(`${baseUrl}/favourites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: favourite
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('err', err));


// Report a problem
export const postProblem = (token: string, report: any) =>
  fetch(`${baseUrl}/reports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: report
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('err', err));


// Propose a solution
export const postProposal = (token: string, report: any) =>
  fetch(`${baseUrl}/proposal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${token}`
    },
    body: report
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('err', err));


// Proposals
export const getProposals = () =>
  fetch(`${baseUrl}/proposal/approved`)
    .then(res => res.status <= 401 ? res : Promise.reject())
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));


// vote on current proposals
export const postVote = (token: string, id: number) =>
  fetch(`${baseUrl}/proposal/vote/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(res => res.status <= 400 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log(err));

export const getVotes = (token: string) =>
  fetch(`${baseUrl}/votes`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(res => res.status <= 401 ? res : Promise.reject(new Error('fail')))
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));