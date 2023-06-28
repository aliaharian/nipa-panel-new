export interface FormField {
  name: string;
  placeholder: string;
  type: string;
  typeId: number;
  required: boolean;
  label: string;
  id: number;
  options?: FormOption[];
  basicDataItems?: FormOption[];
  basic_data_id?: number | null;
  basic_data?: any | null;
  onlyImage?: boolean;
  server_id?: number | null;
  form?: any | null;
  fromRelatedFields?: boolean;
}

export interface FormOption {
  index?: number;
  id?: number;
  label?: any;
  name?: any;
  value: any;
  server_id?: number;
}

export interface Condition {
  id: number;
  field?: string | number | null;
  operation?: FormOption | null;
  values?: FormOption[];
  relationField?: string | number | null;
  saved?: boolean;
}

export interface selectedFieldType {
  label: string;
  value: string;
  options?: any;
}

export interface FormFieldType {
  id: number;
  label: string;
  type: string;
  icon: string;
  validations: any;
  has_options: number;
}
export interface FormTypes {
  formFieldTypes: FormFieldType[] | null;
}
