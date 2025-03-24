<!-- <script setup lang="ts">
const { filterParam } = defineProps({
  filterParam: {
    type: String,
    required: true,
  },
});

defineEmits(["update:filterParam"]);
</script>

<template>
  <div class="searchContainer">
    <input
      :value="filterParam"
      @input="
        $emit('update:filterParam', ($event.target as HTMLInputElement).value)
      "
      class="search"
      placeholder="Для поиска адреса введите Фамилию, Имя и Отчество"
    />
  </div>
</template>

<style scoped>
.searchContainer {
  margin-bottom: 20px;
}

.search {
  width: 100%;
  height: 32px;
  border-radius: 8px;
}

.search::placeholder {
  text-align: center;
}
</style> -->

<!-- Options API -->
<script lang="ts">
export default {
  props: {
    filterParam: {
      type: String,
      required: true,
    },
    emits: ['update:filterParam"'],
  },
};
</script>

<template>
  <div class="searchContainer">
    <input
      :value="filterParam"
      @input="
        $emit('update:filterParam', ($event.target as HTMLInputElement).value)
      "
      class="search"
      placeholder="Для поиска адреса введите Фамилию, Имя и Отчество"
    />
  </div>
</template>

<style scoped>
.searchContainer {
  margin-bottom: 20px;
}

.search {
  width: 100%;
  height: 32px;
  border-radius: 8px;
}

.search::placeholder {
  text-align: center;
}
</style>
