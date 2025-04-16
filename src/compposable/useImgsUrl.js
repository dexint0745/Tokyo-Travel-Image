let Imgs = [];
let data_ref;
import { ref, watch } from "vue";
function useImgsUrl(data) {
  Imgs = [];
  data_ref = ref(data);
  for (let i = 1; i < 101; i++) {
    if (data_ref.value == "東京市區") {
      Imgs.push("./東京雜圖/東京雜圖_" + i + ".jpg");
    } else if (data_ref.value == "富士山") {
      Imgs.push("./富士山雜圖/富士山雜圖_" + i + ".jpg");
    } else if (data_ref.value == "仙台") {
      Imgs.push("./仙台雜圖/仙台雜圖_" + i + ".jpg");
    } else {
      Imgs.push("./東京雜圖/東京雜圖_" + i + ".jpg");
      Imgs.push("./富士山雜圖/富士山雜圖_" + i + ".jpg");
      Imgs.push("./仙台雜圖/仙台雜圖_" + i + ".jpg");
    }
  }
  return Imgs;
}
export default useImgsUrl;
