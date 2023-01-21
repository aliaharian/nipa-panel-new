import { usersResponseModel } from "./user";

export interface userModel {
  address: string;
  avatar: string;
  birth_date: string;
  city: string;
  country: string;
  created_at: string;
  created_at_p: string;
  email: string;
  family: string;
  gender: string;
  id: number;
  is_active: string;
  name: string;
  permissions: permissionsModel[];
  phone_number: string;
  // roles: []
  // site: {id: 7, url: "https://kids.rhythmitica.com", name: "rhythmitica kids", active: "1",…}
  // site_id: "7"
  // skype_id: null
  // star: "0"
  timezone: string;
  updated_at: string;
}
export interface permissionsModel {
  id: number;
  name: string;
  slug: string;
  protected: string;
}
export interface blogSliceModel {
  blogCategories?: any[];
}
export interface usersSliceModel {
  mobile?:string | null;
}
export interface usersSliceModel {
  userInfo?: userModel;
  rolesList?: roleModel[];
  countriesList?: countryModel[];
  usersListResponse?: any;
}
export interface appSliceModel {
  apiLoading: boolean;
}
export interface socketSliceModel {
  ws: WebSocket | null;
  config: any;
  readyState?: string;
  userInfo?: any;
  pts?: number | null;
  ptsTime?: number | null;
}

export interface countryModel {
  id: number;
  countryName: string;
}
export interface roleModel {
  id: number;
  name: string;
  slug: string;
}

export interface contactModel {
  peer?: contactPeerModel;
  block: boolean;
  id: number;
  ownerId: number;
  phone: string;
  firstName: string;
  lastName: string;
  userId: number;
  deleted: boolean;
}

export interface contactPeerModel {
  username: string;
  photoId: number;
  callsAvailable: boolean;
  status: status;
  wasOnline: number;
}

export interface cacheModel {
  channels: any[];
  dialogs: any[];
  groups: any[];
  messages: any[];
}

export enum status {
  CS_OFFLINE = "CS_OFFLINE",
  CS_ONLINE = "CS_ONLINE",
  CS_TYPING = "CS_TYPING",
  CS_STOP_TYPING = "CS_STOP_TYPING",
}
