<!-- <script setup lang="ts">
import { ref, computed, watch } from "vue";
import Search from "@/components/Search.vue";
import Sort from "./Sort.vue";
import UserItem from "./UserItem.vue";

interface User {
  name: string;
  surname: string;
  lastname: string;
  address: string;
}

let users: User[] = localStorage["userList"]
  ? JSON.parse(localStorage.getItem("userList"))
  : [];

watch(
  () => users.length,
  () => {
    users = JSON.parse(localStorage.getItem("userList"));
  }
);

const sortParam = ref("surname");
const filterParam = ref("");

const getFilterUsersList = () =>
  users.filter((user) =>
    Object.values(user).some((value) =>
      value.toLowerCase().includes(filterParam.value.toLowerCase())
    )
  );

const sortedFilterUsersList = (filterList) =>
  filterList.sort((a, b) =>
    a[sortParam.value].toLowerCase() > b[sortParam.value].toLowerCase() ? 1 : -1
  );

const filteredAndSortedUserList = computed(() =>
  sortedFilterUsersList(getFilterUsersList())
);

// provide("sortKey", {
//   sortedFilterUsersList,
// });
</script>-->

<script>
import Search from "@/components/Search.vue";
import Sort from "./Sort.vue";
import UserItem from "./UserItem.vue";

export default {
  components: {
    Search,
    Sort,
    UserItem,
  },
  methods: {
    getFilterUsersList(users) {
      return users.filter((user) =>
        Object.values(user).some((value) =>
          value.toLowerCase().includes(this.filterParam.toLowerCase())
        )
      );
    },
    sortedFilterUsersList(filterList) {
      return filterList.sort((a, b) =>
        a[this.sortParam].toLowerCase() > b[this.sortParam].toLowerCase()
          ? 1
          : -1
      );
    },
    getUsers() {
      return localStorage["userList"]
        ? JSON.parse(localStorage.getItem("userList"))
        : [];
    },
  },
  data() {
    return {
      sortParam: "surname",
      filterParam: "",
      users: this.getUsers(),
    };
  },
  computed: {
    filteredAndSortedUserList() {
      return this.sortedFilterUsersList(this.getFilterUsersList(this.users));
    },
  },
};
</script>

<template>
  <div>
    <div class="control">
      <Search v-model:filterParam="filterParam" />
      <Sort v-model:sortParam="sortParam" />
    </div>

    <UserItem
      v-for="({ name, surname, lastname }, index) in filteredAndSortedUserList"
      :key="index"
    >
      <template #heading>{{ `${surname} ${name} ${lastname}` }}</template>
      Адрес пользователя
    </UserItem>
  </div>
</template>

<style scoped>
.control {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>
