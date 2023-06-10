export interface BasicData {
  id: number;
  name: string;
  type: string;
  items_count?:number;
  items: BasicDataItem[];
}

export interface BasicDataItem {
  id: number;
  name: string;
  code: string;
  status: number | boolean;
}
