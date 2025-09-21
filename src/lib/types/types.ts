// types.ts
export enum Page {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Pricing = 'pricing',
  Appointment = 'appointment',
}

export interface ServiceItem {
  particulars: string;
  largeSmallAnimal?: number | string;
  cat?: number | string;
  dog?: number | string;
  avianExotic?: number | string;
  remarks?: string;
}

export interface ServicePrice {
  category: string;
  items: ServiceItem[];
}
