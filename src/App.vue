<template>
  <NavBar @clickBar="callback_clickBar" @clickLocation="location"></NavBar>
  <Content_Image_area
    :receivedclickBar="clickBar_value"
    :receivedclickLocation="clickLocation_value"
  >
  </Content_Image_area>
  <Totop_Button></Totop_Button>
  <Content_Footer></Content_Footer>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Content_Image_area from "./components/Content_Image_area.vue";
import Content_Footer from "./components/Content_Footer.vue";
import Totop_Button from "./components/Totop_Button.vue";
import { watch, ref } from "vue";

//////////點擊navbar關閉Images_enlarge 取值後傳送至Content_Image_area
let clickBar_value = ref("");
function callback_clickBar(origin_value) {
  clickBar_value.value = origin_value;
}
//////////點擊地點 取值後傳送至Content_Image_area
let clickLocation_value = ref("");
function location(origin_value) {
  clickLocation_value.value = origin_value;
}
</script>

<style></style>
