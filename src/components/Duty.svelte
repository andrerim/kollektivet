<script lang="ts">
  export let value: boolean;
  export let description: string;
  function handleClicks(e: any) {
    console.log(e.currentTarget);
  }
</script>

<label class="duty" class:checked={value}
>
  <input
    type="checkbox"
    bind:checked={value}
    on:click={(e) => handleClicks(e)}
  />{description}</label
>

<style>
  .checked {
    background-color: lightgreen;
  }
</style>
