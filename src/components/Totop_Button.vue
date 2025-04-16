<template>
  <div id="to_top" v-show="isDesktop && showButton" @click="totop()">▲</div>
  <div id="to_top_phone" v-show="!isDesktop" @click="totop()">to Top</div>
</template>
<script setup>
import { ref, watch, computed } from "vue";
const width = ref(window.innerWidth);

const updateWidth = () => {
  width.value = window.innerWidth;
};
window.addEventListener("resize", updateWidth);
const isDesktop = computed(() => width.value > 995);

function totop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

const showButton = ref(false);
const handleScroll = () => {
  showButton.value = window.scrollY > 200;
};
window.addEventListener("scroll", handleScroll);
</script>
<style scoped>
#to_top_phone {
  cursor: pointer;
  display: flex;
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  color: rgb(189, 201, 212);
  background-color: rgb(57, 61, 87);
}
@media screen and (min-width: 995px) {
  #to_top {
    position: fixed;
    bottom: 70px;
    right: 5%;
    font-size: 30px;
    width: 100px;
    padding-left: 35px;
    cursor: pointer;
    color: rgb(172, 185, 136);
    background-color: rgb(114, 125, 187);
    border-radius: 20px;
    /*display: none;*/
  }
  #to_top:hover {
    transform: scale(1.2);
    transition: 0.7s ease;
    background-color: rgb(87, 102, 187);
  }
}
</style>
