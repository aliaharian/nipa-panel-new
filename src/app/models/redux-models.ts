import { BasicData } from "./basicData";
import { usersResponseModel } from "./user";
import {userLoginType} from "@models/auth";

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
  orderGroups?: any;
}
export interface translationsSliceModel {
  keywords?: any[] | null;
  saveSuccess?: boolean;
  languages?: any[] | null;
}
export interface productsSliceModel {
  products?: any;
  saveSuccess?: boolean;
  updateSuccess?: boolean;
  deleteSuccess?: boolean;
  productSteps?: productStep[];
  productStepInfo?: productStepInfo;
}
export interface walletSliceModel {
  transactions?: any;
  transactionsListLoading?: boolean;
  transactionStatuses?: any[] | null;

}
export interface financialSliceModel {
  invoices?: any;
  invoicesListLoading?: boolean;
  factorStatuses?: any[] | null

}
export interface rolePermissionSliceModel {
  roles?: any[] | null;
  permissions?: permission[] | null;
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
  count_type: string;
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
  conditions?: condition[];
}
export interface condition {
  form_field_id: number;
  form_field_option_id: number;
  id: number;
  next_product_step_id: number;
  product_step_id: number;
}
export interface usersSliceModel {
  mobile?: string | null;
  login?: userLoginType | null;
  roles?: role[] | null;
  permissions?: permission[] | null;
  customers?: any[];
}

export interface userModel {
  created_at: string;
  email: string | null;
  email_verified_at: string | null;
  id: number;
  last_name: string;
  mobile: string;
  mobile_verified_at: string | null;
  name: string;
  roles?: role[] | null;
  permissions: permission[];
  updated_at: string;
  wallet: {
    balance: number;
    credit: number;
    blocked: number;
  }
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
  childs?: any[];
  parent_id?: number | null;
  pivot?: {
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
  openMenu: boolean;
}

export interface basicDatasSliceModel {
  basicDatas: BasicData[] | null;
}

