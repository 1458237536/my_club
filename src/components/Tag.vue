<template>
    <!-- <div style="display: inline-block;line-height:normal;"> -->
    <div class="tag-main" :style="tagStyle">
        <!-- 使用默认插槽来显示传递进来的内容 -->
        <slot></slot>
    </div>
    <!-- </div> -->

</template>

<script>
export default {
    name: 'Tag',
    props: {
        // 设置默认背景颜色为#d9ecff
        backgroundColor: {
            type: String,
            default: '#d9ecff' // 默认背景色
        },
        tagName: {
            type: String,
            default: 'tagName' // 默认值
        },
        size: {
            type: String,
            default: 'default' // 默认size值
        }
    },
    computed: {
        // 使用计算属性根据size的值返回相应的样式对象
        tagStyle() {
            let style = {
                backgroundColor: this.backgroundColor, // 使用props中的背景色
            };
            switch (this.size) {
                case 'large':
                    style.fontSize = '16px';
                    style.padding = '4px 12px';
                    break;
                case 'small':
                    style.fontSize = '10px';
                    style.padding = '2px 8px';
                    break;
                default:
                    // 默认情况下使用这些值，包括当size为'default'时
                    style.fontSize = '12px';
                    style.padding = '3px 8px';
            }
            return style;
        }
    }
}
</script>

<style scoped>
.tag-main {
    height: auto;
    width: auto;
    display: inline-block;
    border-radius: 5px;
    margin: 0 10px;
    cursor: default;
    color: #111;
    line-height: normal;
}
</style>