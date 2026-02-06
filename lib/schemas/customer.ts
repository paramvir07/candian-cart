import { z } from "zod"

const customerSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
  address: z.string().min(1),
  city: z.string().min(1),
  province: z.string().min(1),
  mobile: z.string().min(1),
  hasCar: z.boolean(),
});

export default customerSchema;