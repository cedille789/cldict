import { env } from "$env/dynamic/private";
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();

if (env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export { prisma };
