type IUser = {
    userName: string;
    email: string;
    password: string;
  };
  
  type ILogin = {
    userName: string;
    password: string;
  };
  
  export type ITask = {
    id: number;
    userId: string;
    text: string;
    completed: boolean;
  };
  
  export class ServiceFetch {
    connection: string;
  
    constructor() {
      this.connection = "http://localhost:3000/";
    }
  
    private getUserId(): string | null {
      return localStorage.getItem("@tasks-app:userId");
    }
  
    async getUsers() {
      const response = await fetch(`${this.connection}users`);
      const users = await response.json();
      return users;
    }
  
    async postUser(data: IUser) {
      const response = await fetch(`${this.connection}users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return response.status;
    }
  
    async postLogin(data: ILogin) {
      const response = await fetch(`${this.connection}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        return { status: response.status, userId: responseData.userId };
      }
  
      return { status: response.status, userId: null };
    }
  
    async getTasks(): Promise<ITask[]> {
      const userId = this.getUserId();
      if (!userId) return [];
  
      const response = await fetch(`${this.connection}tasks`, {
        headers: {
          "x-user-id": userId,
        },
      });
  
      if (response.ok) {
        return await response.json();
      }
  
      return [];
    }
  
    async postTask(text: string): Promise<ITask | null> {
      const userId = this.getUserId();
      if (!userId) return null;
  
      const response = await fetch(`${this.connection}tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": userId,
        },
        body: JSON.stringify({ text }),
      });
  
      if (response.ok) {
        return await response.json();
      }
  
      return null;
    }
  
    async toggleTask(id: number): Promise<boolean> {
      const userId = this.getUserId();
      if (!userId) return false;
  
      const response = await fetch(`${this.connection}tasks/${id}/toggle`, {
        method: "PATCH",
        headers: {
          "x-user-id": userId,
        },
      });
  
      return response.ok;
    }
  
    async deleteTask(id: number): Promise<boolean> {
      const userId = this.getUserId();
      if (!userId) return false;
  
      const response = await fetch(`${this.connection}tasks/${id}`, {
        method: "DELETE",
        headers: {
          "x-user-id": userId,
        },
      });
  
      return response.ok;
    }
  }