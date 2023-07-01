<script lang="ts">
  import { page } from "$app/stores";
  import { Button } from "flowbite-svelte";

  import messages from "$lib/status-codes.json";

  const status = `${$page.status}`;
  const message = messages[status as keyof typeof messages][0];
  const description =
    $page.error?.message == "user not found"
      ? "존재하지 않는 유저입니다."
      : messages[status as keyof typeof messages][1];
</script>

<svelte:head>
  <title>{$page.status} {message} - CLDict</title>
</svelte:head>

<h1 class="text-4xl font-semibold leading-loose">{$page.status} {message}</h1>
{#if description}
  <h2 class="mb-10 text-xl">{description}</h2>
{/if}
<div class="my-4">
  <Button on:click={() => history.back()} color="alternative">이전 페이지</Button>
  <Button href="/">메인 페이지</Button>
</div>
