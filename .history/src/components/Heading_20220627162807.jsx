import { defineComponent, h } from "vue";
export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup (props, { slots } ) {
    return () => {
      'h' + props.level, // 标签名
      {},
      slots.default() // 子节点
    }
  }
})