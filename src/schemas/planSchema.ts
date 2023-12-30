import * as z from "zod";

const planSchema = z.object({
  plan: z.string().min(2).max(50),
  planType: z.string().min(2).max(50).or(z.boolean()),
});

type PlanSchemaType = z.infer<typeof planSchema>;

export { planSchema };
export type { PlanSchemaType };
