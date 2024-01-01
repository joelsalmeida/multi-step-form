import { ServiceDataType, ServiceDataPriceTypes } from "./types";

const Service = class Plan implements ServiceDataType {
  name: string;
  price: ServiceDataPriceTypes;
  description: string;

  constructor(name: string, price: ServiceDataPriceTypes, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
};

const OnlineService = new Service(
  "Online service",
  { monthly: 1, annual: 10 },
  "Access to multiplayer games",
);

const LargerStoreService = new Service(
  "Larger storage",
  { monthly: 2, annual: 20 },
  "Extra 1TB of cloud save",
);

const CustomizableProfileService = new Service(
  "Customizable profile",
  { monthly: 2, annual: 20 },
  "Custom theme on your profile",
);

export { OnlineService, LargerStoreService, CustomizableProfileService };
