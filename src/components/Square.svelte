<script type="ts">
  export let image: string;
  export let selectable: boolean = false;
  export let selected: boolean = false;

  const handleClick = (): void => {
    if (!selectable) {
      return;
    }
    selected = !selected;
  };
</script>

<style>
  .cell {
    width: 16.666%;
    float: left;
    position: relative;
    border: 1px solid black;
    box-sizing: border-box;
  }

  .cell:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .cell.selectable {
    cursor: pointer;
  }

  .cell.selected {
    background: red;
  }

  .cell.selected img {
    opacity: 0.6;
  }

  .cell img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="cell" class:selected class:selectable on:click={handleClick}>
  {#if image}<img src={image} alt="" />{/if}
</div>
