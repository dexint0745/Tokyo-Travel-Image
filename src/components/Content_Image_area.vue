<template>
  <div class="toggle" :style="styleObject" @click="toggleModalClose()">
    <Images_enlarge :receivedImgurl="data"></Images_enlarge>
  </div>
  <div class="contentout">
    <div class="content">
      <div class="container-fluid">
        <div class="row justify-content-around">
          <template v-for="(img, index) in imgs">
            <div class="image_box col-3">
              <img :src="img" alt="" @click="toggleModalOpen($event)" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Images_enlarge from "./Images_enlarge.vue";
import useImgsUrl from "../compposable/useImgsUrl";
import { ref, watch } from "vue";
let props = defineProps(["receivedclickBar", "receivedclickLocation"]);
////////顯示圖片
let Img_change;
let imgs = useImgsUrl(Img_change);
watch(
  () => props.receivedclickLocation,
  (newclick) => {
    Img_change = newclick;
    imgs = useImgsUrl(Img_change);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
);

////////控制Images_enlarge開啟關閉
const styleObject = ref({
  display: "none",
});
watch(
  () => props.receivedclickBar,
  (newclick) => {
    if (newclick == 0 || newclick == 1) {
      styleObject.value.display = "none";
      document.body.style.overflow = "auto";
    }
  }
);
function toggleModalClose() {
  styleObject.value.display = "none";
  document.body.style.overflow = "auto";
}
let eventimgurl;
let data = "";
function toggleModalOpen(eventimg) {
  if (window.innerWidth > 995) {
    styleObject.value.display = "";
    document.body.style.overflow = "hidden";
    eventimgurl = eventimg.target.src;
    data = eventimgurl;
  }
}
</script>

<style scoped>
.content {
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
}
.contentout {
  margin-bottom: 30px;
  justify-content: center;
  display: flex;
}
@media screen and (min-width: 995px) {
  .content {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 15px;
    width: 70%;
    height: 100%;
    padding-bottom: 20px;
  }
  .contentout {
    margin-top: 30px;
    margin-bottom: 30px;
    justify-content: center;
    display: flex;
  }
}
/*-------------------------------------------image*/
.image_box {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 550px;
}
img {
  border-radius: 10px;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  filter: drop-shadow(10px 10px 5px rgb(54, 52, 52));
}
@media screen and (min-width: 995px) {
  .image_box {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 300px;
  }
  img {
    border-radius: 10px;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
    transition: 0.5s ease;
  }
  img:hover {
    scale: 1.1;
    opacity: 0.8;
  }
}
</style>
