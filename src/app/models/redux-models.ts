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
export interface ordersSliceModel {
  orders?: any;
}
export interface productsSliceModel {
  products?: any;
  saveSuccess?: boolean;
  deleteSuccess?: boolean;
}
export interface usersSliceModel {
  mobile?:string | null;
  login?:any | null;
}
export interface usersSliceModel {
  userInfo?: userModel;
  rolesList?: any[];
  countriesList?: any[];
  usersListResponse?: any;
}
export interface appSliceModel {
  apiLoading: boolean;
  collapseMenu: boolean;
}
