import { nanoid } from "nanoid";
import { create } from "zustand";

type UserType = {
  id: string;
  active: boolean;
  name: string;
  age: number;
  email: string;
  position: string;
  tags: string[];
};

export type UserDataStoreType = {
  users: UserType[];
  setUsers: (users: UserType[]) => void;
  addUser: (user: UserType) => void;
  updateUser: (user: UserType) => void;
  deleteUser: (id: string) => void;
};

export type UserActionsStoreType = {
  users: UserType[];
  setUsers: (users: UserType[]) => void;
  addUser: (user: UserType) => void;
  updateUser: (user: UserType) => void;
  deleteUser: (id: string) => void;
};

export const userStore = create<UserDataStoreType & UserActionsStoreType>(
  (set) => ({
    users: [],
    setUsers: (users: UserType[]) => set({ users }),
    addUser: (user: UserType) =>
      set((state) => ({ users: [...state.users, { ...user, id: nanoid() }] })),
    updateUser: (user: UserType) =>
      set((state) => ({
        users: state.users.map((u) =>
          u.id === user.id ? { ...u, ...user } : u
        ),
      })),
    deleteUser: (id: string) =>
      set((state) => ({
        users: state.users.filter((u) => u.id !== id),
      })),
  })
);

// Exporta um hoock que retorna apenas os dados
export const useUserData = () =>
  userStore((state) => ({
    users: state.users,
  }));

// Exporta um hoock que retorna apenas as ações de acordo coma chave passada
export const useUserActions = (key: keyof UserActionsStoreType) =>
  userStore((state) => ({
    [key]: state[key],
  }));
