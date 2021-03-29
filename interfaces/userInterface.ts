export default interface userInterface {
  user?: {
    user: {
      id: number;
      fname: string;
      lname: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    },
    token: string;
  },
  isLoggedIn?: boolean;
}

