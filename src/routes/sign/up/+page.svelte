<script lang="ts">
  import { page } from "$app/stores";
  import { Alert, Button, Input, Label } from "flowbite-svelte";
  import type { ActionData } from "./$types";

  export let form: ActionData;

  let redirectTo = $page.url.searchParams.get("redirectTo") || "/";
  let message = form?.error;
  let username: string, password: string, passwordAgain: string;
  let disabled = true;

  function checkValid() {
    let valid =
      2 <= username.length &&
      username.length <= 30 &&
      8 <= password.length &&
      password.length <= 64 &&
      8 <= passwordAgain.length &&
      passwordAgain.length <= 64 &&
      password == passwordAgain;

    disabled = !valid;
    return valid;
  }
</script>

<svelte:head>
  <title>회원가입 - CLDict</title>
</svelte:head>

<div class="mx-auto max-w-xs md:max-w-sm">
  <h3 class="mb-4 text-center text-2xl font-semibold">회원가입</h3>

  {#if message}
    <Alert color="red">{message}</Alert>
  {/if}

  <form
    method="post"
    action="?redirectTo={redirectTo}"
    id="form"
    name="form"
    on:submit={checkValid}
  >
    <div class="mb-4">
      <Label for="id">아이디</Label>
      <Input
        type="text"
        name="username"
        id="username"
        required
        minlength={2}
        maxlength={30}
        on:change={checkValid}
        bind:value={username}
      />
    </div>
    <div class="mb-4">
      <Label for="password">비밀번호</Label>
      <Input
        type="password"
        name="password"
        id="password"
        required
        minlength={8}
        maxlength={64}
        on:change={checkValid}
        bind:value={password}
      />
    </div>
    <div class="mb-4">
      <Label for="password-again">비밀번호 확인</Label>
      <Input
        type="password"
        name="password-again"
        id="password-again"
        required
        minlength={8}
        maxlength={64}
        on:change={checkValid}
        bind:value={passwordAgain}
      />
    </div>
    <div class="text-center">
      <Button type="submit" id="submit-btn" bind:disabled>회원가입</Button>
    </div>
  </form>
</div>
