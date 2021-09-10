interface User {
  name: string;
  dutiesWeek: "even" | "odd";
};

export interface Users extends Array<User> {};
