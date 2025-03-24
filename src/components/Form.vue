<!-- <script setup>
import { reactive } from "vue";

const initialState = {
  surname: "",
  name: "",
  lastname: "",
  address: "",
};

const userData = reactive({ ...initialState });

function resetForm() {
  Object.assign(userData, initialState);
}

const saveFormData = () => {
  let newLocalList = [];

  if (localStorage["userList"])
    newLocalList = JSON.parse(localStorage.getItem("userList"));

  newLocalList.push(userData);

  localStorage.setItem("userList", JSON.stringify(newLocalList));
  resetForm();
};
</script>

<template>
  <div>
    <h1>Добавить адресата</h1>
    <form class="form">
      <input v-model="userData.surname" placeholder="Введите фамилию" />
      <input v-model="userData.name" placeholder="Введите имя" />
      <input v-model="userData.lastname" placeholder="Введите отчество" />
      <input v-model="userData.address" placeholder="Введите адрес" />
      <button type="button" @click="saveFormData">Сохранить</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input {
  width: 100%;
  height: 32px;
  border-radius: 8px;
}

input::placeholder {
  text-align: center;
}

button {
  width: 100%;
  height: 32px;
  border-radius: 8px;
}
</style> -->

<script>
import form from "@/mixins/form";
export default {
  mixins: [form],
  // data() {
  //   return {
  //     userData: { ...initialState },
  //   };
  // },
  methods: {
    // checkUserData() {
    //   return Object.values(this.userData).every(Boolean);
    // },
    // saveFormData() {
    //   if (!this.checkUserData()) {
    //     alert("Заполните все поля формы");
    //     return;
    //   }
    //   let newLocalList = [];
    //   if (localStorage["userList"])
    //     newLocalList = JSON.parse(localStorage.getItem("userList"));
    //   newLocalList.push(this.userData);
    //   localStorage.setItem("userList", JSON.stringify(newLocalList));
    //   this.resetForm();
    // },
    // resetForm() {
    //   Object.assign(this.userData, initialState);
    // },
  },
};

// const initialState = {
//   surname: "",
//   name: "",
//   lastname: "",
//   address: "",
// };
</script>

<template>
  <div>
    <h1>Добавить адресата</h1>
    <form class="form">
      <input v-model="userData.surname" placeholder="Введите фамилию" />
      <input v-model="userData.name" placeholder="Введите имя" />
      <input v-model="userData.lastname" placeholder="Введите отчество" />
      <input v-model="userData.address" placeholder="Введите адрес" />
      <button type="button" @click="saveFormData">Сохранить</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input {
  width: 100%;
  height: 32px;
  border-radius: 8px;
}

input::placeholder {
  text-align: center;
}

button {
  width: 100%;
  height: 32px;
  border-radius: 8px;
}
</style>
