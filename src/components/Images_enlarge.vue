<template>
  <div class="modal_back">
    <div class="modal_content_box">
      <img class="modal_content" :src="props.receivedImgurl" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["receivedImgurl"]);
</script>
<style scoped>
.modal_back {
  position: fixed;
  z-index: 100;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

.modal_content_box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
}

.modal_content {
  max-width: 100%;
  max-height: 100%;
}

.modal_content {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}
</style>
