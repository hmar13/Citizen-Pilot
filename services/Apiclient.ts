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
    .then(res => res.status <= 401 ? res : Promise.reject())
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
    .then(res => res.status <= 401 ? res : Promise.reject())
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));


// Dashboard
export const getAllNews = () =>
  fetch(`${baseUrl}/news`)
    .then(res => res.status <= 401 ? res : Promise.reject())
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));

// city contacts
export const getContacts = () =>
  fetch(`${baseUrl}/contacts`)
    .then(res => res.status <= 401 ? res : Promise.reject())
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));

// projects
export const getProjects = () =>
  fetch(`${baseUrl}/projects`)
    .then(res => res.status <= 401 ? res : Promise.reject())
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
    .then(res => res.status <= 401 ? res : Promise.reject())
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.error(err));




// Report a problem
export const postProblem = (
  urgency: boolean,
  description: string,
  longitude: number,
  latitude: number,
  category: string,
  image: string,) =>
  fetch(`${baseUrl}/reports`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ urgency, description, longitude, latitude, category, image })
  })
    .then(res => res.status <= 401 ? res : Promise.reject())
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log(err));


// Propose a solution
// export const postProposal = (titleText: string, descriptionText: string, categoryTitle: string, imageUrl: string) =>
//   fetch(`${baseUrl}/`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({})
//   })
//     .then(res => res.status <= 400 ? res : Promise.reject())
//     .then(res => res.status === 204 ? res : res.json())
//     .catch(err => console.log(err));


// Proposals
export const getProposals = () =>
  fetch(`${baseUrl}/proposal/approved`)
    .then(res => res.status <= 401 ? res : Promise.reject())
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error is:', err));


// postVote(id)
// export const postVote = (id) =>
//   fetch(`${baseUrl}/`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({id})
//   })
//     .then(res => res.status <= 400 ? res : Promise.reject())
//     .then(res => res.status === 204 ? res : res.json())
//     .catch(err => console.log(err));
