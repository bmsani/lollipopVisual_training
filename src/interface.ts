export interface VData {
  items: VDataTtem[];
  minValue: number;
  maxValue: number;
  target: number;
  formatString: string;
}

export interface VDataTtem {
  category: string;
  value: number;
}
