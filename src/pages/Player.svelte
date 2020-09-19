<script type="ts">
  import { player } from "../stores/player";
  import { images } from "../consts";
  import RouterLink from "../components/RouterLink.svelte";
  import Square from "../components/Square.svelte";

  const handleNewGame = () => {
    if (confirm("Start a new game?")) {
      player.newGame();
    }
  };

  const handleSelect = (image: string): void => {
    player.toggleSelected(image);
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

<h1>Player</h1>
<div class="grid">
  {#each images as image}
    <Square
      image={$player.images.indexOf(image) > -1 ? image : ''}
      onSelect={$player.images.indexOf(image) > -1 ? () => handleSelect(image) : null}
      selected={$player.selected.indexOf(image) > -1} />
  {/each}
</div>
<div>
  <button on:click={handleNewGame}>New Game</button>
  <RouterLink path="/">Back</RouterLink>
</div>
