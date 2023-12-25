import * as z from "zod";

const personalInfoSchema = z
  .object({
    name: z.string().min(2).max(50),
    phone: z.string().min(10).max(10),
    email: z.string().email(),
  })
  .required();

type PersonalInfoSchemaType = z.infer<typeof personalInfoSchema>;

export { personalInfoSchema };
export type { PersonalInfoSchemaType };
