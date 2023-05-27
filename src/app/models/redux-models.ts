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
  productSteps?: productStep[];
  productStepInfo?: productStepInfo;
}
export interface productStepInfo {
  id: number;
  global_step_id: number;
  product_id: number;
  step_name: string;
  parent_step_id: number | null;
  meta: string | null;
  parent_id: number | null;
  forms: any[];
  global_step: {
    id: number;
    name: string;
    description: string;
    parent_id: number;
    created_at: string;
    updated_at: string;
  };
  global_step_parent: any;
  product: product;
}
export interface product {
  id: number;
  code: string;
  name: string;
  custom: number;
  status: number;
  created_at: string;
  updated_at: string;
}

export interface productStep {
  id: number;
  global_step_id: number;
  product_id: number;
  step_name: string;
  parent_step_id: number;
  meta: string;
  parent_id: number;
  forms: any[];
  roles?: role[];
}
export interface usersSliceModel {
  mobile?: string | null;
  login?: any | null;
  roles?: role[] | null;
}
export interface role {
  id: number;
  name: string;
  slug: string;
  permissions?: permission[];
}

export interface permission {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  pivot: {
    role_id: number;
    permission_id: number;
  };
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
