export interface User {
  id: number;
  login: string;
  location: string | null;
  avatar_url: string;
  followers: number;
  following: number;
}

export interface UserRepository {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  clone_url: string;
}
