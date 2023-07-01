<script lang="ts">
  import { page } from "$app/stores";
  import {
    Avatar,
    Button,
    Dropdown,
    DropdownHeader,
    DropdownItem,
    NavBrand,
    Navbar,
  } from "flowbite-svelte";

  export let user: SessionUser | null;
</script>

<Navbar
  navClass="sticky left-0 top-0 z-50 flex h-16 w-full border-b px-4 shadow-md"
  navDivClass="mx-auto flex h-full flex-wrap items-center justify-between"
>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl dark:text-white">CLDict</span>
  </NavBrand>

  <div class="flex items-center">
    {#if user}
      <Button pill color="light" id="avatar-menu" class="border-none !p-1">
        <Avatar class="mr-2" />
        {user.username}
      </Button>
      <Dropdown placement="bottom" triggerdBy="#avatar-menu" class="!w-auto">
        <a href="/@{user.username}">
          <DropdownHeader class="flex items-center">
            <Avatar class="mr-2 !inline-flex" />
            <span class="text-sm">{user.username}</span>
          </DropdownHeader>
        </a>
        <form method="post">
          <!-- <DropdownItem href="/profile/{user.username}">프로필</DropdownItem>
          <DropdownItem href="/settings">설정</DropdownItem>
          <DropdownDivider /> -->
          <DropdownItem
            class="hover:bg-red-50 hover:text-red-500"
            type="submit"
            formaction="/sign/out?redirectTo={$page.url.pathname}"
          >
            로그아웃
          </DropdownItem>
        </form>
      </Dropdown>
    {:else}
      <ul class="flex items-center">
        <li class="mr-2"><a href="/sign/up?redirectTo={$page.url.pathname}">회원가입</a></li>
        <li><a href="/sign/in?redirectTo={$page.url.pathname}">로그인</a></li>
      </ul>
    {/if}
  </div>
</Navbar>
