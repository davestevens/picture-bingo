<script type="ts">
  import { navigateTo } from "../services/router";
  export let path: string;

  const onNavigate = (): void => {
    navigateTo(path);
  };
</script>

<style>
</style>

<a href={`#${path}`} on:click|preventDefault={onNavigate}>
  <slot />
</a>
