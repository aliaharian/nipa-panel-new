export interface Product {
  name: string;
  code: string;
  custom: boolean | number;
  price?: string | number | null;
  status: boolean | number;
  description?: string | null;
  images?: Image[] | null;
  id?: number | null;
  initialFormId?: number | null;
}

export interface Image {
  hashCode?: string | null;
  name: string;
  value?: File | null;
}
