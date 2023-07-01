import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  const { session } = await locals.auth.validateUser();
  if (session) throw redirect(302, "/");
  return {};
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request, url }) => {
    const data = await request.formData();

    const username = data.get("username");
    const password = data.get("password");
    const passwordAgain = data.get("password-again") || "";

    if (username instanceof File) return fail(400, { error: "올바르지 않은 아이디입니다." });
    if (password instanceof File || passwordAgain instanceof File)
      return fail(400, { error: "올바르지 않은 비밀번호입니다." });

    if (!username || !(2 <= username.length && username.length <= 30))
      return fail(400, { error: "2~30자의 아이디를 입력해 주세요." });
    if (!password || !(8 <= password.length && password.length <= 64))
      return fail(400, { error: "8~64자의 비밀번호를 입력해 주세요." });
    if (password !== passwordAgain) return fail(400, { error: "비밀번호가 일치하지 않습니다." });

    try {
      await auth.createUser({
        primaryKey: {
          providerId: "username",
          providerUserId: username,
          password,
        },
        attributes: {
          username,
        },
      });
    } catch (error) {
      return fail(400, { error: "이미 사용중인 이름입니다." });
    }

    throw redirect(302, url.searchParams.get("redirectTo") || "/");
  },
} satisfies Actions;
