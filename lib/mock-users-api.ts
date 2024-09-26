interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const MockUsersApi = (email: string): Promise<User | undefined> => {
  return new Promise<User | undefined>((resolve) => {
    setTimeout(() => {
      const user = users.find((user) => user.email === email);
      resolve(user);
    }, 1500);
  });
};

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'test@test.com',
    password: 'test',
  },
];
