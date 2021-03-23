import newsInterface from '../../interfaces/newsInterface';

const news: newsInterface[] = [
  {
    id: '1',
    title: 'Tinder for cows',
    category: 'General',
    shortDescription:
      'This new application by Matthew Dodsworth is one of a kind',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    location: 'Matthews Farm',
    date: '20/02/1952',
    img:
      'https://external-preview.redd.it/KYx-BCI1IVL0VlywRN69aJT339KQOHZ8nXefjE_PBFM.png?auto=webp&s=654f9ec8064656b063164fb7b3871336b8b92819',
  },
  {
    id: '2',
    title: 'Road block',
    category: 'Road closures',
    shortDescription: 'Road works for the upcoming 5 days',
    longDescription:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet',
    location: 'Town A',
    date: '22nd of May',
    img: 'https://www.sitespect.com/wp-content/uploads/2018/05/roadblock.jpg',
  },

  {
    id: '3',
    title: 'Storm warning',
    category: 'Weather warnings',
    shortDescription: 'Storm coming. Please evacuate',
    longDescription:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    location: 'The whole town',
    date: '1st of April',
    img:
      'https://yaleclimateconnections.org/wp-content/uploads/2020/11/1120_iota-sat-nov16_974.jpg',
  },
  {
    id: '4',
    title: 'South bound trains delayed',
    category: 'Transport delays',
    shortDescription: 'Train service interrupted',
    longDescription:
      'Due to leaves on the line the train service will be interrupted for the next 2 hours',
    location: 'The whole town',
    date: '1st of April',
    img:
      'https://yaleclimateconnections.org/wp-content/uploads/2020/11/1120_iota-sat-nov16_974.jpg',
  },
  {
    id: '5',
    title: 'Upcoming votes',
    category: 'Reminders',
    shortDescription: 'Council elections on March the 12th',
    longDescription:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    location: 'The whole town',
    date: '1st of April',
    img:
      'https://yaleclimateconnections.org/wp-content/uploads/2020/11/1120_iota-sat-nov16_974.jpg',
  },
  {
    id: '6',
    title: 'Christmas Market',
    category: 'General',
    shortDescription: 'Christmas market scheduled for the 15/12',
    longDescription:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    location: 'city-wide',
    date: '01/05/2021',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cologne-christmas-market-1603916555.jpg',
  },
];

export default news;
