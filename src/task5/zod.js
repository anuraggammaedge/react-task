import z from "zod";

export const Step1Schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export const Step2Schema = z.object({
  email: z.email("Invalid email address"),
  phonenumber: z
    .string()
    .regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format"),
});
export const Step3Schema = z.object({
  username: z.string().min(4, "Invalid Usernanme"),
  password: z
    .string()
    .min(8, { message: "Password must be a 8 digit" })
    .max(20, { message: "Please give only 20 digits" }),
});
