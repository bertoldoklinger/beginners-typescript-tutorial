interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | Superadmin;
}

type Superadmin = "super-admin";

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
};
