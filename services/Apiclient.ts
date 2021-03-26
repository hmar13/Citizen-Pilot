

// Login
export const fetchUserData = (username: string, password: string) =>
  fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.status <= 401 ? res : Promise.reject())
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => console.log('error goes here', err));



// Register
// export const postNewUser = (fname: string, lname: string, email: string, password: string) =>
//   fetch(`${baseUrl}/auth/signup`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ fname, lname, email, password})
//   })
//     .then(res => res.status <= 400 ? res : Promise.reject())
//     .then(res => res.status === 204 ? res : res.json())
//     .catch(err => console.log(err));


// Dashboard
// getUserFavourites(userID)
// getAllNews()
// getContacts()
// getProjects()


// Report a problem
// export const postProblem = (categoryTitle, imageUrl, urgency, text, latitude, longitude) =>
//   fetch(`${baseUrl}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({})
//   })
//     .then(res => res.status <= 400 ? res : Promise.reject())
//     .then(res => res.status === 204 ? res : res.json())
//     .catch(err => console.log(err));


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
// export const getProposals = () =>
//   fetch(`${baseUrl}/`)
//     .then(res => res.status <= 400 ? res : Promise.reject())
//     .then(res => res.status === 204 ? res : res.json())
//     .catch(err => console.log('error is:', err));


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
