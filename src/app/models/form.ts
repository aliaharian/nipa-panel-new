export interface FormField {
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
  label: string;
  id: number;
  options?: FormOption[];
  onlyImage?: boolean;
}

export interface FormOption {
  index?: number;
  id?:number;
  label: any;
  value: string;
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
