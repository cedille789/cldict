import { prisma } from "$lib/server/prisma";
import type { AuthUser } from "@prisma/client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  let user_: AuthUser | null;

  try {
    user_ = await prisma.authUser.findUnique({
      where: {
        username: params.username,
      },
    });
  } catch (err) {
    console.error(err);
    throw error(500);
  }
  if (!user_) throw error(404, "user not found");

  return { user_ };
}) satisfies PageServerLoad;
