export interface userFilterModel {
  search?: string;
  page?: number;
  role?: string;
  status?: string;
  country?: string;
}

export interface userModel {
  id?: number;
  name?: string;
  family?: string;
  email?: string;
  avatar?: string;
}

export interface peerModel {
  block?: boolean;
  firstName?:string;
  id?: number;
  lastName?: string;
  mute?: boolean;
  status: string;
  username: string;
  wasOnline: number;
}

export interface usersResponseModel {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  data: userModel[];
}
