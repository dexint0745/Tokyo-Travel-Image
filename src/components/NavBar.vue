<template>
  <nav
    @click="
      $emit('clickBar', Img_enlarge);
      Img_enlargeclick();
    "
    class="navbar fixed-top navbar-expand-lg"
    style="
      background: linear-gradient(
        90deg,
        rgb(180, 151, 194),
        rgb(157, 118, 177)
      );
    "
  >
    <div class="container-fluid">
      <a class="navbar-brand"
        ><img
          src="/src/assets/\brand.png"
          alt=""
          width="250px"
          height="60px"
          class="d-inline-block align-text-top"
      /></a>
      <button
        class="navbar-toggler navbar_button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar1"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar1">
        <ul class="navbar-nav me-auto">
          <template v-for="Navbar_Option in Navbar_Options">
            <li class="nav-item">
              <a
                class="nav-link fst-italic fw-bold location"
                @click="
                  location_click($event);
                  $emit('clickLocation', location_to_app);
                "
                >{{ Navbar_Option }}</a
              >
            </li>
          </template>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link fst-italic fw-bold other_picture"
              href="https://dexint0745.github.io/Tokyo-Travel/"
              target="_blank"
              >旅遊介紹</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="navbar_back"></div>
</template>

<script setup>
import { ref } from "vue";
const Navbar_Options = ["全部圖片", "東京市區", "富士山", "仙台"];

//////////點擊navbar關閉Images_enlarge傳送直到App
defineEmits(["clickBar", "clickLocation"]);
let bool = true;
let refvalue = ref(0);
let Img_enlarge = ref(refvalue);
function Img_enlargeclick() {
  if (bool) {
    refvalue.value = 1;
    bool = false;
  } else {
    refvalue.value = 0;
    bool = true;
  }
}
//////////點擊地點傳送內容至APP
let location = ref("");
let location_to_app;
function location_click(location_event) {
  location.value = location_event.target.innerText;
  location_to_app = ref(location);
}

/////////點擊後收起navbar
document.body.addEventListener("click", bodyClickHandler);
function bodyClickHandler() {
  if (window.innerWidth < 995) {
    const navbar = document.querySelector("#navbar1");
    const bsCollapse = new bootstrap.Collapse(navbar, {
      toggle: false,
    });
    bsCollapse.hide();
  }
}
</script>

<style scoped>
.navbar-brand {
  margin-right: 200px;
}

.location {
  border-left: solid 3px rgb(210, 175, 243);
  margin-left: 50px;
  color: rgb(210, 175, 243);
  cursor: pointer;
  font-size: 30px;
}

.location:hover {
  transition: 0.5s ease;
  transform: scale(1.1);
  border-left: solid 3px rgb(113, 96, 131);
  color: rgb(101, 79, 124);
}

.other_picture {
  color: rgb(219, 196, 233);
  font-size: 30px;
}

.other_picture:hover {
  color: rgb(219, 196, 233);
}

.other_picture:focus {
  color: rgb(219, 196, 233);
}

.location:focus {
  color: rgb(101, 79, 124);
}

.navbar_back {
  width: 100%;
  height: 88px;
}

#navbar_back {
  display: none;
  position: fixed;
  z-index: 100;
  padding-top: 200px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

@media (max-width: 995px) {
  .navbar-toggler {
    font-size: 3rem;
    padding: 1rem 1.5rem;
  }
  .navbar_button {
    margin-left: 5px;
    margin-top: 3px;
    font-size: 3rem;
    padding: 0.5rem 1rem;
  }
  .location,
  .other_picture {
    font-size: 3rem;
  }
}
</style>
