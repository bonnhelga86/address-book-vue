<!-- <script setup>
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Users from "@/components/Users.vue";
import Form from "@/components/Form.vue";
</script>

<template>
  <header class="wrapper">
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div>
      <Header />
    </div>
  </header>

  <main>
    <div class="mainWrapper">
      <Users />
      <Form />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .wrapper {
    margin-bottom: 30px;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .mainWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 0 2rem;
  }
}
</style> -->

<!-- Options API -->
<script>
import Header from "./components/Header.vue";
import Users from "@/components/Users.vue";
import Form from "@/components/Form.vue";
export default {
  // name: "App",
  components: {
    Header,
    Users,
    Form,
  },
};
</script>

<template>
  <header class="wrapper">
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div>
      <Header />
    </div>
  </header>

  <main>
    <div class="mainWrapper">
      <Users />
      <Form />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .wrapper {
    margin-bottom: 30px;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .mainWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 0 2rem;
  }
}
</style>
