<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  const sessionUser = data.user;
  const user = data.user_;
</script>

<svelte:head>
  <title>{user.username} - CLDict</title>
</svelte:head>

<div class="flex items-center">
  <h1 class="text-4xl font-semibold leading-normal">{user.username}</h1>
  <!-- {#if sessionUser?.username && sessionUser.username == user.username}
    <Button href="/settings" color="light" class="ms-auto">
      <CogOutline strokeWidth="1.5" class="mr-1" />
      설정
    </Button>
  {/if} -->
</div>
<hr class="my-2" />
