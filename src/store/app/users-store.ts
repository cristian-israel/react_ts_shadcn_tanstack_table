import { nanoid } from "nanoid";
import { create } from "zustand";

import {
  UserActionsStoreType,
  UserDataStoreType,
  UserStoreType,
} from "./users-store-types";

export const userStore = create<UserDataStoreType & UserActionsStoreType>(
  (set) => ({
    users: [],
    setUsers: (users: UserStoreType[]) => set({ users }),
    addUser: (user: UserStoreType) =>
      set((state) => ({ users: [...state.users, { ...user, id: nanoid() }] })),
    updateUser: (user: UserStoreType) =>
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
export function useUserData() {
  return userStore((state) => state.users);
}

// Exporta um hoock que retorna apenas as ações de acordo coma chave passada
export function useUserActions(key: keyof UserActionsStoreType) {
  return userStore((state) => state[key]);
}
