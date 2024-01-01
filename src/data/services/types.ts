type ServiceDataPriceTypes = {
  monthly: number;
  annual: number;
};

type ServiceDataType = {
  name: string;
  price: ServiceDataPriceTypes;
  description: string;
};

export type { ServiceDataPriceTypes, ServiceDataType };
