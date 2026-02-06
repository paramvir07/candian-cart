"use server";

import { auth } from "@/lib/auth";
import customerSchema from "@/lib/schemas/customer";
import { formDataToObject } from "@/lib/validation/form";

export const cutomerSignupAction = async (formData: FormData) => {
    const rawData = formDataToObject(formData);
    const data = customerSchema.parse(rawData)

  await auth.api.signUpEmail({
    body: {
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/",
    },
  });
};
