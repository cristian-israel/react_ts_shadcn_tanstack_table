import { z } from "zod";

export const UserStoreSchema = z.object({
  id: z.string().min(1),
  active: z.boolean(),
  name: z.string().min(4, "Name must be at least 4 characters long"),
  age: z.number().min(0, "Age must be a positive number"),
  // tags: z.array(z.string()),
});

// export const UserStoreSchema = z.object({
//   id: z.string().min(1),
//   name: z.string().min(4, "Name must be at least 4 characters long"),
//   active: z.boolean(),
//   tags: z.array(z.string()),
// });

export type UserStoreType = z.infer<typeof UserStoreSchema>;

export const keyofUserType = Object.keys(
  UserStoreSchema.shape
) as (keyof UserStoreType)[];

export type UserDataStoreType = {
  users: UserStoreType[];
  setUsers: (users: UserStoreType[]) => void;
  addUser: (user: UserStoreType) => void;
  updateUser: (user: UserStoreType) => void;
  deleteUser: (id: string) => void;
};

export type UserActionsStoreType = {
  users: UserStoreType[];
  setUsers: (users: UserStoreType[]) => void;
  addUser: (user: UserStoreType) => void;
  updateUser: (user: UserStoreType) => void;
  deleteUser: (id: string) => void;
};
