<script type="ts">
  import getRandomFromArray from "../services/getRandomFromArray";
  import { images, PLAYER_IMAGE_COUNT } from "../consts";
  import RouterLink from "../components/RouterLink.svelte";
  import Square from "../components/Square.svelte";

  const shuffledImages = getRandomFromArray(images, images.length);
  let selectedImages: string[] = [];

  const handleSelect = (): void => {
    selectedImages = [...selectedImages, shuffledImages.pop()];
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
    <Square {image} selected={selectedImages.indexOf(image) > -1} />
  {/each}
</div>
<div>
  <RouterLink path="/">Back</RouterLink>
</div>
