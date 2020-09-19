<script type="ts">
  import { caller } from "../stores/caller";
  // import getRandomFromArray from "../services/getRandomFromArray";
  import { images } from "../consts";
  import RouterLink from "../components/RouterLink.svelte";
  import Square from "../components/Square.svelte";

  const handleNewGame = () => {
    if (confirm("Start a new game?")) {
      caller.newGame();
    }
  };

  const handleSelect = (): void => {
    caller.selectNext();
  };
</script>

<style>
  .grid {
    width: 85%;
    max-width: 600px;
    margin: 0 auto;
    overflow: hidden;
  }
</style>

<h1>Caller</h1>
<button on:click={handleSelect}>Select</button>
<div class="grid">
  {#each images as image}
    <Square {image} selected={$caller.selected.indexOf(image) > -1} />
  {/each}
</div>
<div>
  <button on:click={handleNewGame}>New Game</button>
  <RouterLink path="/">Back</RouterLink>
</div>
