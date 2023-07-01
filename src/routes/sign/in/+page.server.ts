import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals, url }) => {
  const { session } = await locals.auth.validateUser();
  if (session) throw redirect(302, url.searchParams.get("redirectTo") || "/");
  return {};
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request, locals, url }) => {
    const data = await request.formData();

    const username = data.get("username") || "";
    const password = data.get("password") || "";

    if (username instanceof File) return fail(400, { error: "올바르지 않은 아이디입니다." });
    if (password instanceof File) return fail(400, { error: "올바르지 않은 비밀번호입니다." });

    try {
      const key = await auth.useKey("username", username, password);
      const session = await auth.createSession(key.userId);
      locals.auth.setSession(session);
    } catch (error) {
      console.log(error);
      return fail(400, { error: "올바른 아이디 또는 비밀번호를 입력해 주세요." });
    }

    throw redirect(302, url.searchParams.get("redirectTo") || "/");
  },
} satisfies Actions;
