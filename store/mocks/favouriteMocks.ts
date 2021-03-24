import favouriteInterface from '../../interfaces/favouriteInterface';

const favourites: favouriteInterface[] = [
  {
    id: '1',
    type: 'current proposals',
    title: 'Build more benches around the city',
    description:
      'Petition to build more benches around the city in key location for workers and tourists to enjoy coastal views without destroying the rehabilitation of grass areas',
    location: 'City of Gold Coast',
    img:
      'https://images.unsplash.com/photo-1588453613975-b590a9c5e1c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    votes: 60,
  },
  {
    id: '2',
    type: 'current proposals',
    title: 'Get rid of all the benches',
    description:
      'Too many benches are littering our streets and a proposal is to get ride of between 15-30% of all benches around the city',
    location: 'less places',
    img:
      'https://images.unsplash.com/photo-1607317485651-da69ca25ea72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    votes: 12,
  },
  {
    id: '3',
    type: 'projects',
    title: 'Building the worlds largest bench',
    description:
      'We are building the worlds largest bench in honor of our leader, Corona Laufer of the famous Laufer family',
    location: 'On top of the council',
    img:
      'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzL2E2ZDkwYjlmYzM0NGEyMjI5NV9Xb3JsZCdzX0xhcmdlc3RfUm9ja2luZ19DaGFpciAoMikuanBnIl0sWyJwIiwiY29udmVydCIsIiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjYwMHg-Il1d/World%27s_Largest_Rocking_Chair%20%282%29.jpg',
  },
];

export default favourites;
