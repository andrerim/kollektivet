<script lang="ts">
  import { weekNumber } from "weeknumber";
  const currentWeekNr = weekNumber(new Date());

  interface User {
    username: string;
    name: string;
    dutiesWeek: "even" | "odd";
  }

  interface Users extends Array<User> {}

  export let name: string;

  let users: Users = [
    {
      username: "petter123",
      name: "petter",
      dutiesWeek: "odd",
    },
    {
      username: "lisa123",
      name: "lisa",
      dutiesWeek: "even",
    },
    {
      username: "petter123",
      name: "anders",
      dutiesWeek: "odd",
    },
    {
      username: "lisa123",
      name: "rotmo",
      dutiesWeek: "even",
    },
  ];
</script>

<main>
  <header>
    <h1>Vaskeliste @ Elvevegen</h1>
    <h2>Week number: {currentWeekNr}</h2>
  </header>

  <p>
    This means that
    {#each users as user}
      {#if user.dutiesWeek === "odd"}
        {`${user.name} `}
      {/if}
    {/each}
    is cleaning
  </p>

  <h3>Duties:</h3>
  <form>
    <label> <input type="checkbox" />Vaske badet</label>
    <label> <input type="checkbox" />Vaske kjøkkenet</label>
    <label> <input type="checkbox" />Vaske stua</label>
    <label> <input type="checkbox" />Vaske gangen</label>
  </form>
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
