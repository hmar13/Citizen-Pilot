import Proposals from '../../interfaces/currentProposals'

const currentProposalMock: Proposals[] = [
  {
    id: 1,
    title: 'build more benches',
    description: 'benches!! love to sit down, and its helpful for the older types, also maybe a bin next to the benches?',
    location: 'everywhere',
    img: 'https://source.unsplash.com/kOi3ZejUA4s/200x200',
    votes: 0,
  },
  {
    id: 2,
    title: 'build less benches',
    description: 'less benches!! we hate seeing people sat down enjoying them selfs! remove the benches',
    location: 'less places',
    img: 'https://source.unsplash.com/kOi3ZejUA4s/200x200',
    votes: 0,
  },
];

export default currentProposalMock;