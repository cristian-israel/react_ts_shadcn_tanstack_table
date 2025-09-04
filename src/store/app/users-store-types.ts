import { z } from "zod";

export const UserStoreSchema = z.object({
  id: z.string().min(1),
  active: z.boolean().default(true),
  name: z.string().min(4, "Name must be at least 4 characters long"),
  tags: z.array(z.string()).default([]),
});

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
