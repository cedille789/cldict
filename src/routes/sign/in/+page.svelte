<script lang="ts">
  import { page } from "$app/stores";
  import { Alert, Button, Input, Label } from "flowbite-svelte";
  import type { ActionData } from "./$types";

  export let form: ActionData;

  let redirectTo = $page.url.searchParams.get("redirectTo") || "/";
  let message = form?.error;
  let disabled = false;
</script>

<svelte:head>
  <title>로그인 - CLDict</title>
</svelte:head>

<div class="mx-auto max-w-xs md:max-w-sm">
  <h3 class="mb-4 text-center text-2xl font-semibold">로그인</h3>

  {#if message}
    <Alert color="red">{message}</Alert>
  {/if}

  <form method="post" action="?redirectTo={redirectTo}" id="form" name="form">
    <div class="mb-4">
      <Label for="id">아이디</Label>
      <Input type="text" name="username" id="username" required minlength={2} maxlength={30} />
    </div>
    <div class="mb-4">
      <Label for="password">비밀번호</Label>
      <Input type="password" name="password" id="password" required minlength={8} maxlength={64} />
    </div>
    <div class="text-center">
      <Button type="submit" id="submit-btn" bind:disabled>로그인</Button>
    </div>
  </form>
</div>
