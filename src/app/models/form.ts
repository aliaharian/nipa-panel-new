export interface FormField {
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
  label: string;
  id: number;
  options?: FormOption[];
}

export interface FormOption {
  label: any;
  value: string;
}
