<script lang="ts">
  import Duty from "./Duty.svelte";
  import { createEventDispatcher } from "svelte";

  let dutyValues = {
    kitchen: false,
    livingRoom: false,
    bathroom: false,
    hall: false,
  };

  function handleClick(e: any) {
    console.log(e.currentTarget);
    dutyValues;
  }

  const dispatch = createEventDispatcher();

  function sayHello(e: any) {
    console.log(e);
    console.log(e.currentTarget.children);
    console.log(e.currentTarget.childNodes);


    dispatch("message", {
      text: "Hello!",
    });
  }
</script>

<h3>Duties:</h3>
<div class="duties">
  <form on:change={sayHello}>
    <Duty description={"Vaske badet"} value={dutyValues["kitchen"]} />
    <Duty description={"Vaske kjøkkenet"} value={false} />
    <Duty description={"Vaske stua"} value={false} />
    <Duty description={"Vaske gangen"} value={false} />
  </form>
</div>

<style>
  .duties {
    display: flex;
  }

  .duty {
    background-color: aqua;
  }

  .checkedr {
    background-color: lightgreen;
  }

  /* input[type="checkbox"]:checked {
    box-shadow: 0 0 0 3px hotpink;
  }

  input:checked {
    background-color: red;
  } */
</style>
