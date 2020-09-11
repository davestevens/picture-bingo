<script type="ts">
  import getRandomFromArray from "../services/getRandomFromArray";
  import { images, PLAYER_IMAGE_COUNT } from "../consts";
  import RouterLink from "../components/RouterLink.svelte";
  import Square from "../components/Square.svelte";

  const selectedImages = getRandomFromArray(images, PLAYER_IMAGE_COUNT);
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
      image={selectedImages.indexOf(image) > -1 ? image : ''}
      selectable={selectedImages.indexOf(image) > -1} />
  {/each}
</div>
<div>
  <RouterLink path="/">Back</RouterLink>
</div>
