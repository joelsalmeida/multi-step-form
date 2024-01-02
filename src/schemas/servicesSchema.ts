import * as z from "zod";

const servicesSchema = z.object({
  services: z.array(z.string().min(2).max(50)),
});

type ServicesSchemaType = z.infer<typeof servicesSchema>;

export { servicesSchema };
export type { ServicesSchemaType };
