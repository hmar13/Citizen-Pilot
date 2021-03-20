/* eslint-disable prettier/prettier */

const userData: { email: string, password: string, fName: string, lName: string }[] = [
  {
    email: 'example@gmail.com',
    password: 'examplePassword',
    fName: 'efname',
    lName: 'elname',
  },
  {
    email: 'example2@gmail.com',
    password: 'example2Password',
    fName: 'efname2',
    lName: 'elname2',
  },
];

const report: { category: string, img: string, description: string, longitude: number, latitude: number }[] = [
  {
    category: 'Traffic Lights',
    img:
      'https://assets3.thrillist.com/v1/image/1797521/414x310/crop;jpeg_quality=65.jpg',
    description: 'Broken traffic lights on 52 anne street.',
    longitude: 5.251,
    latitude: 25.325,
  },
  {
    category: 'Roads',
    img:
      'https://cdn.theatlantic.com/media/img/photo/2018/08/sinkholes-when-the-earth-opens-up/s01_1024699572-1/original.jpg',
    description: 'Sinkhole next to my house. Please fix.',
    longitude: 62.521,
    latitude: 74.216,
  },
  {
    category: 'electicity',
    img:
      'https://www.swanleytowncouncil.gov.uk/wp-content/uploads/2018/01/powered-team-fixing-electricity-problems.jpg',
    description: 'No electricity in this part of town',
    longitude: 102.251,
    latitude: 52.425,
  },
];

const solutionProposals: { title: string, description: string, location: string, img: string }[] = [
  {
    title: 'build more benchs',
    description: 'benchs',
    location: 'everywhere',
    img:
      'https://www.riverco.co.uk/wp-content/uploads/2019/05/traditional_bench.jpg',
  },
  {
    title: 'build less benchs',
    description: 'less benchs',
    location: 'less places',
    img:
      'https://www.therusticcompany.com/wp-content/uploads/2017/01/solid-oak-bench.jpg',
  },
];

const news: { title: string, description: string, location: string, date: string, img: string }[] = [
  {
    title: 'tinder for cows',
    description:
      'lonley cows are looking for love, this new application by Matthew Dodsworth is one of a kind',
    location: 'Matthews Farm',
    date: '20/02/1952',
    img:
      'https://external-preview.redd.it/KYx-BCI1IVL0VlywRN69aJT339KQOHZ8nXefjE_PBFM.png?auto=webp&s=654f9ec8064656b063164fb7b3871336b8b92819',
  },
  {
    title: 'Road block',
    description: 'Road works for the upcoming 5 days',
    location: 'Town A',
    date: '22nd of May',
    img: 'https://www.sitespect.com/wp-content/uploads/2018/05/roadblock.jpg',
  },
  {
    title: 'Storm warning',
    description: 'Storm coming. Please evacuate',
    location: 'The whole town',
    date: '1st of April',
    img:
      'https://yaleclimateconnections.org/wp-content/uploads/2020/11/1120_iota-sat-nov16_974.jpg',
  },
  {
    title: 'Storm warning',
    description: 'Storm coming. Please evacuate',
    location: 'The whole town',
    date: '1st of April',
    img:
      'https://yaleclimateconnections.org/wp-content/uploads/2020/11/1120_iota-sat-nov16_974.jpg',
  },
  {
    title: 'Storm warning',
    description: 'Storm coming. Please evacuate',
    location: 'The whole town',
    date: '1st of April',
    img:
      'https://yaleclimateconnections.org/wp-content/uploads/2020/11/1120_iota-sat-nov16_974.jpg',
  },
];

const currentProposals: { title: string, description: string, location: string, img: string, votes: number }[] = [
  {
    title: 'build more benchs',
    description: 'benchs',
    location: 'everywhere',
    img: '',
    votes: 60,
  },
  {
    title: 'build less benchs',
    description: 'less benchs',
    location: 'less places',
    img: '',
    votes: 12421552,
  },
];

const contacts: { title: string, phoneNumber: string, email: string, img: string }[] = [
  {
    title: 'Mayor',
    phoneNumber: '07896542341',
    email: 'harrydaboss@village.com',
    img:
      'https://www.gannett-cdn.com/presto/2021/01/13/NARD/eabfbdbd-81b4-46f5-8291-24a5a93fd37f-1-14_arsoncase.JPG?width=660&height=528&fit=crop&format=pjpg&auto=webp',
  },
  {
    title: 'Police',
    phoneNumber: '000-555-242',
    email: 'policae@police.com',
    img: ''
  },
];

const whatAreWeWorkingOn: { title: string, description: string, location: string, img: string, progressDescription: string }[] = [
  {
    title: 'The bench',
    description: 'Birthday present for Corona from the council',
    location: "Corona's square",
    img: '',
    progressDescription: 'finalizing',
  },
  {
    title: 'Park in the A street',
    description: 'Small park for the children',
    location: 'Between street A and street B',
    img: '',
    progressDescription: 'finalizing',
  },
  {
    title: 'Ipads for primary school students',
    description:
      'We think all the students should use the latest technology for studying',
    location: 'Primary school',
    img: '',
    progressDescription: 'getting resources',
  },
];

export {
  userData,
  report,
  solutionProposals,
  news,
  currentProposals,
  whatAreWeWorkingOn,
  contacts,
};
