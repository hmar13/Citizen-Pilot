export default interface newsInterface {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  location: string;
  image: string;
  date: string;
}

export default interface ContactItemsInterface {
  title: string;
  phoneNumber: string;
  email: string;
  img: string;
}

export default interface CurrentPropsalTypes {
  id: number,
  title: string,
  description: string,
  location: string,
  votes: number,
  img: string,
}

