import { withFluid } from "@fluid-tailwind/tailwind-merge"
import clsx, { ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const tw = extendTailwindMerge(withFluid)
export const cn = (...classes: ClassValue[]) => tw(clsx(...classes))
