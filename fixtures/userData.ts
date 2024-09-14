interface userProps {
  dob: string;
  name: string;
  email: string;
  gender: string;
  country: string;
  password: string;
  confirmPassword: string;
}

export const userData: userProps = {
  gender: 'Male',
  country: 'USA',
  name: 'Sushant',
  dob: '1996-09-02',
  password: 'Sush@nt123',
  email: 'sushant@gmail.com',
  confirmPassword: 'Sush@nt123',
};
