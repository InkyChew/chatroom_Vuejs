<template lang='pug'>
  .stickers.collapse
    .box.d-flex.justify-content-center
      template(v-for='(sticker, index) in stickers')
        a(
          href='.stickers'
          @click='sendStickerIndex(index)'
          data-toggle="collapse"
        )
          img(:src='sticker')
</template>

<script>
export default {
  name: 'Stickers',
  data () {
    return {
      stickers: [
        require('@/assets/images/sticker-hi.svg'),
        require('@/assets/images/sticker-lol.svg'),
        require('@/assets/images/sticker-no.svg'),
        require('@/assets/images/sticker-ok.svg'),
        require('@/assets/images/sticker-thx.svg'),
        require('@/assets/images/sticker-wtf.svg')
      ]
    }
  },
  methods: {
    sendStickerIndex (index) {
      console.log(index)
      this.$emit('sendSticker', this.stickers[index])
    }
  }
}
</script>

<style lang='sass'>
  .stickers
    position: absolute
    bottom: 50px
    .box
      height: 135px
      border-radius: 20px
      background-color: #FFEB95
      img
        margin-right: 10pxr
</style>
