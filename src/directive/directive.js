// 自定义指令
import Vue from "vue";
import "./style.css";

Vue.directive("slidein", {
  inserted(el, binding) {
    // 隐藏元素
    el.style.opacity = "0";

    let slideInDirectiveEvent = () => {
      const viewHeight = document.documentElement.clientHeight;
      const elTop =
        el.getBoundingClientRect().y || el.getBoundingClientRect().top;
      const className = binding.arg === "delay" ? "slide-in-delay" : "slide-in";
      if (elTop < 0.8 * viewHeight && elTop > 0.1 * viewHeight) {
        el.classList.add(className);
      } else if (elTop > 1 * viewHeight || elTop < -0.3 * viewHeight) {
        // 如果不是只执行一次，隐藏元素
        if (!binding.modifiers.once) {
          el.classList.remove(className);
        }
      }
    };

    slideInDirectiveEvent();
    window.addEventListener("scroll", slideInDirectiveEvent, false);

    // 性能优化，移除事件
    el.unbindEventListener = () => {
      window.removeEventListener("scroll", slideInDirectiveEvent, false);
    };
  },
  unbind(el) {
    el.unbindEventListener();
  }
});
