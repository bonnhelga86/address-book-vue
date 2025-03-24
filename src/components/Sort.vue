<!-- <script setup>
// import { inject } from "vue";
// const { sortedFilterUsersList } = inject("sortKey");

const { sortParam } = defineProps({
  sortParam: {
    type: String,
  },
});

const selectDict = {
  name: "Имя",
  surname: "Фамилия",
  lastname: "Отчество",
};

defineEmits(["update:sortParam"]);
</script>

<template>
  <select class="sort" @change="$emit('update:sortParam', $event.target.value)">
    <option disabled value="">-- Сортировать по полю... --</option>
    <option
      v-for="([key, value], index) in Object.entries(selectDict)"
      :key="key"
      :value="key"
    >
      {{ value }}
    </option>
  </select>
</template>

<style scoped>
.sort {
  width: 100%;
  height: 32px;
  border-radius: 8px;
}
</style> -->

<script>
export default {
  props: {
    sortParam: {
      type: String,
    },
  },
  data() {
    return {
      selectDict: {
        name: "Имя",
        surname: "Фамилия",
        lastname: "Отчество",
      },
    };
  },
  emits: ["update:sortParam"],
};
</script>

<template>
  <select class="sort" @change="$emit('update:sortParam', $event.target.value)">
    <option disabled value="">-- Сортировать по полю... --</option>
    <option
      v-for="([key, value], index) in Object.entries(selectDict)"
      :key="key"
      :value="key"
    >
      {{ value }}
    </option>
  </select>
</template>

<style scoped>
.sort {
  width: 100%;
  height: 32px;
  border-radius: 8px;
}
</style>
