export interface User {
    id: string;
    username: string;
    age: number;
    hobbies: string[];
  }
  
  let users: User[] = [];
  
  export const getUsers = (): User[] => {
    return users;
  };
  
  export const getUserById = (userId: string): User | undefined => {
    return users.find(user => user.id === userId);
  };
  
  export const createUser = (userData: Omit<User, 'id'>): User => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID
      ...userData,
    };
    users.push(newUser);
    return newUser;
  };
  
  export const updateUser = (userId: string, userData: Partial<User>): User | undefined => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...userData };
      return users[userIndex];
    }
    return undefined;
  };
  
  export const deleteUser = (userId: string): void => {
    users = users.filter(user => user.id !== userId);
  };
  