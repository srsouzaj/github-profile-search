import { z } from "zod";
import type loginFormSchema from "../schema/login.schema";

export type LoginFormTypes = z.infer<typeof loginFormSchema>;
