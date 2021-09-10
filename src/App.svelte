<script lang="ts">
  import { weekNumber } from "weeknumber";
  import type { Users } from "./types/user.type";
  import Duties from "./components/Duties.svelte";

  const currentWeekNr = weekNumber(new Date());
  const oddWeek = currentWeekNr % 2 == 1;
  export let name: string;


	function handleMessage(event) {
		alert(event.detail.text);
	}

  let users: Users = [
    {
      name: "petter",
      dutiesWeek: "odd",
    },
    {
      name: "lisa",
      dutiesWeek: "even",
    },
    {
      name: "anders",
      dutiesWeek: "odd",
    },
    {
      name: "rotmo",
      dutiesWeek: "even",
    },
  ];
</script>

<main>
  <header>
    <h1>Vaskeliste @ Elvevegen</h1>
    <h2>Ukenummer: {currentWeekNr}</h2>
  </header>

  <p>
    This means that
    {#each users as user}
      {#if user.dutiesWeek === "odd" && oddWeek}
        {`${user.name} `}
      {:else if user.dutiesWeek === "even" && !oddWeek}
        {`${user.name} `}
      {/if}
    {/each}
    is cleaning
  </p>

  <Duties on:message={handleMessage}/>

  <!-- TODO Add sub tasks and defention of done -->
  <!-- TODO Firestore login -->
  <!-- TODO add notification for all tasks completed -->
  <!-- TODO Cleaning(leader)board - score points for tasks completed -->
</main>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  header {
    text-align: center;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
