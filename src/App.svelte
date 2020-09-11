<script lang="ts">
  import { currentRoute, navigateTo } from "./services/router";
  import type { Router } from "./services/router";
  import { onMount } from "svelte";
  import Home from "./pages/Home.svelte";
  import Player from "./pages/Player.svelte";
  import Caller from "./pages/Caller.svelte";

  const router: Router = {
    "/": Home,
    "/player": Player,
    "/caller": Caller,
  };

  onMount(() => {
    if (!history.state) {
      window.history.replaceState({ hash: "" }, "", "#/");
    }
    navigateTo(window.location.hash.substr(1));
  });

  const onNavigateBack = (event: PopStateEvent): void => {
    navigateTo(event.state.hash);
  };
</script>

<style>
  main {
    padding-bottom: 20px;
  }
</style>

<svelte:window on:popstate={onNavigateBack} />

<main>
  <svelte:component this={router[`${$currentRoute}`]} />
</main>
