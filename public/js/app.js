//* Cms -> Content Management System

const dataInnerModal = [
  {
    id: 1,
    title: "create-user",
    content: `
     <header class="modal-header">
          <h3>ایجاد کاربر جدید</h3>
          <button class="close-modal">
            <i class="fas fa-times"></i>
          </button>
        </header>
        <main class="modal-content">
          <input
            type="text"
            class="modal-input"
            placeholder="نام و نام خانوادگی را وارد نمائید ..."
            id="user-fullName"
          />
          <input
            type="text"
            class="modal-input"
            id="user-username"
            placeholder="نام کاربری را وارد نمائید ..."
          />
          <input
            type="email"
            class="modal-input"
            id="user-email"
            placeholder="ایمیل را وارد نمائید ..."
          />
          <input
          type="text"
          class="modal-input"
          id="user-password"
          placeholder="رمز عبور را وارد نمائید ..."
        />
        </main>
        <footer class="modal-footer">
          <button class="cancel">انصراف</button>
          <button class="submit">تائید</button>
        </footer>
        `,
  },
  {
    id: 2,
    title: "create-product",
    content: `
   <header class="modal-header">
            <h3>ایجاد محصول</h3>
            <button class="close-modal">
              <i class="fas fa-times"></i>
            </button>
          </header>
          <main class="modal-content">
            <input
              type="text"
              class="modal-input"
              placeholder="عنوان محصول را وارد نمائید ..."
              id="product-title"
            />
            <input
              type="number"
              class="modal-input"
              placeholder="قیمت محصول را وارد نمائید ..."
              id="product-price"
            />
            <input
              type="text"
              class="modal-input"
              placeholder="عنوان کوتاه محصول را وارد نمائید ..."
              id="product-shortName"
            />
          </main>
          <footer class="modal-footer">
            <button class="cancel">انصراف</button>
            <button class="submit">تائید</button>
          </footer>
        `,
  },
  {
    id: 3,
    title: "remove-user",
    content: `
    <i class="ui-border top red"></i>
        <i class="ui-border bottom red"></i>
        <header class="modal-header">
          <h3>اخراج کاربر</h3>
          <button class="close-modal">
            <i class="fas fa-times"></i>
          </button>
        </header>
        <main class="modal-content">
          <p class="remove-text">آیا از اخراج(بن) کردن این کاربر اطمینان دارید؟</p>
        </main>
        <footer class="modal-footer">
          <button class="cancel">انصراف</button>
          <button class="submit">تائید</button>
        </footer>
        `,
  },
  {
    id: 4,
    title: "edit-user",
    content: `
           <header class="modal-header">
          <h3>ویرایش اطلاعات کاربر</h3>
          <button class="close-modal">
            <i class="fas fa-times"></i>
          </button>
        </header>
        <main class="modal-content">
          <input
            type="text"
            class="modal-input"
            placeholder="نام و نام خانوادگی را وارد نمائید ..."
            id="user-fullName"
          />
          <input
            type="text"
            class="modal-input"
            id="user-username"
            placeholder="نام کاربری را وارد نمائید ..."
          />
          <input
            type="email"
            class="modal-input"
            id="user-email"
            placeholder="ایمیل را وارد نمائید ..."
          />
          <input
          type="text"
          class="modal-input"
          id="user-password"
          placeholder="رمز عبور را وارد نمائید ..."
        />
        </main>
        <footer class="modal-footer">
          <button class="cancel">انصراف</button>
          <button class="submit">تائید</button>
        </footer>
        `,
  },
  {
    id: 5,
    title: "remove-product",
    content: `
   <i class="ui-border top red"></i>
          <i class="ui-border bottom red"></i>
          <header class="modal-header">
            <h3>حذف محصول</h3>
            <button class="close-modal">
              <i class="fas fa-times"></i>
            </button>
          </header>
          <main class="modal-content">
            <p class="remove-text">آیا از حذف این محصول اطمینان دارید؟</p>
          </main>
          <footer class="modal-footer">
            <button class="cancel">انصراف</button>
            <button class="submit">تائید</button>
          </footer>
        `,
  },
  {
    id: 6,
    title: "edit-product",
    content: `
    <header class="modal-header">
            <h3>ویرایش محصول</h3>
            <button class="close-modal">
              <i class="fas fa-times"></i>
            </button>
          </header>
          <main class="modal-content">
            <input
              type="text"
              class="modal-input"
              placeholder="عنوان محصول را وارد نمائید ..."
              id="product-title"
            />
            <input
              type="number"
              class="modal-input"
              placeholder="قیمت محصول را وارد نمائید ..."
              id="product-price"
            />
            <input
              type="text"
              class="modal-input"
              placeholder="عنوان کوتاه محصول را وارد نمائید ..."
              id="product-shortName"
            />
          </main>
          <footer class="modal-footer">
            <button class="cancel">انصراف</button>
            <button class="submit">تائید</button>
          </footer>
        `,
  },
];

const data = {
  users: [],

  products: [],
};

let page = 1;
let pageCount = 4;
let theme = "light";

const modalScreen = document.querySelector(".modal-screen");
const modal = document.querySelector(".modal");
const toggleMenu = document.querySelector(".toggle-sidebar");
const toast = document.querySelector(".toast");
const toastContent = document.querySelector(".toast-content");
const toastProgress = document.querySelector(".process");
const containerData = document.querySelector(".table-body");
const paginationContainer = document.querySelector(".pagination");
const latestUsers = document.querySelector(".latest-users-container");
const usersData = document.querySelector(".users-data");
const productsData = document.querySelectorAll(".products-data");
const themeButton = document.querySelector(".theme-button");
const root = document.querySelector("html");
let closeModalX,
  userFullName,
  userUsername,
  userEmail,
  userPassword,
  submitBtn,
  modalBtn,
  dataId,
  productTitle,
  productPrice,
  productShortName,
  cancelBtn,
  dataModal;

// Load Data In Onload Document
function loadData() {
  if (
    document.title === "داشبورد ادمین" &&
    getItemFromLocalStorage("users") &&
    getItemFromLocalStorage("products")
  ) {
    data.users = getItemFromLocalStorage("users");
    data.products = getItemFromLocalStorage("products");
    lastUsers();
    lastProducts();
  }
  if (document.title === "مدیریت کاربران" && getItemFromLocalStorage("users")) {
    data.users = getItemFromLocalStorage("users");
    createData(data.users);
    usersData.innerText = data.users.length;
  }
  if (
    document.title === "مدیریت محصولات" &&
    getItemFromLocalStorage("products")
  ) {
    data.products = getItemFromLocalStorage("products");
    createData(data.products);
  }

  // Change Theme
  theme = getItemFromLocalStorage("theme");
  root.className = theme;
  if (theme === "light") {
    themeButton.innerHTML = `<i class="fas fa-sun"></i>
    `;
  } else {
    themeButton.innerHTML = `<i class="fas fa-moon"></i>`;
  }
  submitBtn = document.querySelector(".submit");
  modalBtn = document.querySelectorAll(".modal-btn");
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", modalHandler);
  });

  // Product Count
  productsData.forEach((productData) => {
    productData.innerHTML = data.products.length;
  });
}
// Show Last Users
function lastUsers() {
  latestUsers.innerHTML = "";
  usersData.innerText = data.users.length;
  let lastUsersArray = data.users.slice(0, 5);
  lastUsersArray.forEach((user) => {
    latestUsers.insertAdjacentHTML(
      "beforeend",

      `
      
      <article>
              <!-- user icon -->
              <span class="icon-card">
                <i class="fa-solid fa-user"></i>
              </span>
              <!-- user data -->
              <div>
                <p class="user-name">${user.name}</p>
                <p class="user-email">${user.email}</p>
              </div>
     </article>

    `
    );
  });
}

// Show Last Products

// Show Modal
function modalHandler(e) {
  dataModal = e.target.dataset.modal;
  dataId = e.target.dataset.id;
  const mainInnerModal = dataInnerModal.find((data) => {
    return data.title === dataModal;
  });
  modal.innerHTML = "";
  modalScreen.classList.remove("hidden");
  modal.insertAdjacentHTML("beforeend", mainInnerModal.content);
  closeModalX = document.querySelector(".close-modal");
  userFullName = document.querySelector("#user-fullName");
  userUsername = document.querySelector("#user-username");
  userEmail = document.querySelector("#user-email");
  userPassword = document.querySelector("#user-password");
  submitBtn = document.querySelector(".submit");
  productTitle = document.querySelector("#product-title");
  productPrice = document.querySelector("#product-price");
  productShortName = document.querySelector("#product-shortName");
  cancelBtn = document.querySelector(".cancel");
  cancelBtn.addEventListener("click", closeModal);
  submitBtn.addEventListener("click", createDataHandler);
  closeModalX.addEventListener("click", closeModal);
}

// Create Data By Data Modal
function createDataHandler() {
  if (dataModal === "edit-user") {
    editData(dataId);
  }

  if (dataModal === "create-user") {
    createUser();
  }
  if (dataModal === "remove-user") {
    removeData(dataId);
  }
  if (dataModal === "remove-product") {
    removeData(dataId);
  }
  if (dataModal === "create-product") {
    createProduct();
  }
  if (dataModal === "edit-product") {
    editData(dataId);
  }
}

// Create Data
function createData(data) {
  const startIndex = (page - 1) * pageCount;
  const lastIndex = startIndex + pageCount;
  const mainData = data.slice(startIndex, lastIndex);
  containerData.innerHTML = "";
  if (document.title === "مدیریت کاربران") {
    mainData.forEach((data) => {
      containerData.insertAdjacentHTML(
        "beforeend",
        `
          <div class="tableRow">
                <p class="user-fullName">${data.name}</p>
                <p class="user-username">${data.username}</p>
                <p class="user-email">${data.email}</p>
                <p class="user-password">${data.password}</p>
                <div class="product-manage">
                  <button class="modal-btn edit-btn" data-modal="edit-user" data-id ="${data.id}">
                    <!-- Edit icon -->
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="remove-btn modal-btn" data-modal="remove-user"  data-id ="${data.id}">
                    <!-- Ban icon -->
                    <i class="fas fa-ban"></i>
                  </button>
                </div>
              </div>
        `
      );
    });
  } else {
    mainData.forEach((data) => {
      containerData.insertAdjacentHTML(
        "beforeend",
        `
             <div class="tableRow">
              <p class="product-title">${data.title}</p>
              <p class="product-price">${data.price.toLocaleString()} تومان</p>
              <p class="product-shortName">${data.slug}</p>
              <div class="product-manage">
                  <button class="modal-btn edit-btn" data-modal="edit-product" data-id ="${
                    data.id
                  }">
                  <!-- Edit icon -->
                  <i class="fas fa-edit"></i>
                </button>
              <button class="remove-btn modal-btn" data-modal="remove-product"  data-id ="${
                data.id
              }">
                  <!-- Delete fas icon -->
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
        `
      );
    });
  }
  createPagination(data);
}

// Remove Data
function removeData(dataId) {
  if (document.title === "مدیریت کاربران") {
    const findIndexUser = data.users.findIndex((user) => {
      return user.id === +dataId;
    });
    data.users.splice(findIndexUser, 1);
    createData(data.users);
    saveToLocalStorage("users", data.users);
    loadData();
    closeModal();
    messageHnadler("success", "کاربر با موفقیت حذف شد");
  } else {
    const findIndexProduct = data.products.findIndex((product) => {
      return product.id === +dataId;
    });
    console.log(findIndexProduct);
    data.products.splice(findIndexProduct, 1);
    createData(data.products);
    saveToLocalStorage("products", data.products);
    messageHnadler("success", "محصول با موفقیت حذف شد");
    lastProducts();
    loadData();
    closeModal();
  }
}

// Edit Data
function editData(dataId) {
  if (document.title === "مدیریت کاربران") {
    if (
      userFullName.value.length < 3 ||
      userUsername.value.length < 3 ||
      userPassword.value.length < 5 ||
      !userEmail.value.includes("@gmail.com")
    ) {
      messageHnadler("failed", "اطلاعات وارد شده صحیح نمی باشد");
      closeModal();
    } else {
      const mainUser = data.users.find((user) => {
        return user.id === +dataId;
      });
      mainUser.name = userFullName.value;
      mainUser.username = userUsername.value;
      mainUser.email = userEmail.value;
      mainUser.password = userPassword.value;
      createData(data.users);
      saveToLocalStorage("users", data.users);
      loadData();
      messageHnadler("success", "اطلاعات با موفقیت ذخیره شد");
      closeModal();
    }
  } else {
    if (
      productTitle.value.length < 3 ||
      productPrice.value.length < 3 ||
      productShortName.value.length < 5
    ) {
      messageHnadler("failed", "اطلاعات وارد شده صحیح نمی باشد");
      closeModal();
    } else {
      const mainProduct = data.products.find((user) => {
        return user.id === +dataId;
      });
      mainProduct.title = productTitle.value;
      mainProduct.price = +productPrice.value;
      mainProduct.slug = productShortName.value;
      createData(data.products);
      lastProducts();
      saveToLocalStorage("products", data.products);
      loadData();
      messageHnadler("success", "اطلاعات با موفقیت ذخیره شد");
      closeModal();
    }
  }
}

// Create User
function createUser() {
  if (
    userFullName.value.length < 3 ||
    userUsername.value.length < 3 ||
    userPassword.value.length < 5 ||
    !userEmail.value.includes("@gmail.com")
  ) {
    messageHnadler("failed", "اطلاعات وارد شده صحیح نمی باشد");
    closeModal();
  } else {
    let newUser = {
      id: data.users.length + 1,
      name: userFullName.value,
      username: userUsername.value,
      email: userEmail.value,
      password: userPassword.value,
    };
    data.users.push(newUser);
    messageHnadler("success", "کاربر جدید با موفقیت اضافه شد");
    saveToLocalStorage("users", data.users);
    createData(data.users);
    closeModal();
  }
}

// Create Product
function createProduct() {
  if (
    productTitle.value.length < 3 ||
    productPrice.value.length < 3 ||
    productShortName.value.length < 5
  ) {
    messageHnadler("failed", "اطلاعات وارد شده صحیح نمی باشد");
    closeModal();
  } else {
    let newProduct = {
      id: data.products.length + 1,
      title: productTitle.value,
      price: +productPrice.value,
      slug: productShortName.value,
    };
    data.products.push(newProduct);
    messageHnadler("success", "محصول جدید با موفقیت اضافه شد");
    saveToLocalStorage("products", data.products);
    createData(data.products);
    closeModal();
  }
}

//  Create Pagination
function createPagination(arryaName) {
  paginationContainer.innerHTML = "";

  const pagination = arryaName.length / pageCount;
  for (let i = 0; i < pagination; i++) {
    paginationContainer.insertAdjacentHTML(
      "beforeend",
      `
      <span data-tabindex="${i + 1}" class="page ${
        i === page - 1 ? "active" : ""
      }"">${i + 1}</span>
      `
    );
  }

  const paginationBtn = document.querySelectorAll(".page");
  paginationBtn.forEach((btn) => {
    btn.addEventListener("click", nextPage);
  });
}

//
function nextPage(e) {
  paginationContainer.innerHTML = "";
  const tabindex = e.target.dataset.tabindex;
  page = tabindex;

  loadData();
}

// Save In To Local Storage
function saveToLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

// Get Data In Local Storage
function getItemFromLocalStorage(dataName) {
  return JSON.parse(localStorage.getItem(dataName));
}

function toastProgressBar() {
  let progressCount = 0;

  let progressBar = setInterval(() => {
    progressCount++;
    toastProgress.style.width = `${progressCount}%`;
    if (progressCount > 110) {
      toastProgress.style.width = `0%`;
      toast.classList.add("hidden");
      clearInterval(progressBar);
    }
  }, 50);
}

function closeModal() {
  modalScreen.classList.add("hidden");
}

function messageHnadler(status, message) {
  toast.className = `toast ${status}`;
  toastContent.innerText = `${message}`;
  toastProgressBar();
}

function changeTheme() {
  if (getItemFromLocalStorage("theme")) {
    if (theme === "light") {
      theme = "dark";
      saveToLocalStorage("theme", theme);
      themeButton.innerHTML = `<i class="fas fa-moon"></i>`;
    } else {
      theme = "light";
      saveToLocalStorage("theme", theme);
      themeButton.innerHTML = `<i class="fas fa-sun"></i>
`;
    }
  } else {
    theme = "light";
  }
  root.className = "theme"
  loadData();
}

function lastProducts() {
  containerData.innerHTML = "";
  let lastProductsArray = data.products.slice(-5);
  lastProductsArray.forEach((data) => {
    containerData.insertAdjacentHTML(
      "beforeend",
      `
           <div class="tableRow">
            <p class="product-title">${data.title}</p>
            <p class="product-price">${data.price.toLocaleString()} تومان</p>
            <p class="product-shortName">${data.slug}</p>
            <div class="product-manage">
                <button class="modal-btn edit-btn" data-modal="edit-product" data-id ="${
                  data.id
                }">
                <!-- Edit icon -->
                <i class="fas fa-edit"></i>
              </button>
            <button class="remove-btn modal-btn" data-modal="remove-product"  data-id ="${
              data.id
            }">
                <!-- Delete fas icon -->
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
      `
    );
  });
}

themeButton.addEventListener("click", changeTheme);

toggleMenu.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("open");
});
