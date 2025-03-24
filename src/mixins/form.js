export default {
  data() {
    return {
      userData: { ...initialState },
    };
  },
  methods: {
    checkUserData() {
      return Object.values(this.userData).every(Boolean);
    },
    saveFormData() {
      if (!this.checkUserData()) {
        alert("Заполните все поля формы");
        return;
      }
      let newLocalList = [];
      if (localStorage["userList"])
        newLocalList = JSON.parse(localStorage.getItem("userList"));
      newLocalList.push(this.userData);
      localStorage.setItem("userList", JSON.stringify(newLocalList));
      this.resetForm();
    },
    resetForm() {
      Object.assign(this.userData, initialState);
    },
  },
};

const initialState = {
  surname: "",
  name: "",
  lastname: "",
  address: "",
};
