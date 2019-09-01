<template lang='pug'>
  .chatRoom
    .row.mx-0
      .cols.d-flex.align-items-start.flex-column
        FriendInfoCard
        InfoCard
        img.mt-auto(src='@/assets/images/logo-rapid-chat.svg')
      .col
        .chatBox
          .msgBox(ref='msgBox')
            .friendMsg This is some text within a card body.
            //-
            .d-flex.align-items-end.flex-column
              template(v-for='selfMsg in selfMsgs')
                .selfMsg(:class='{ img : selfMsg.type === "sticker" }')
                  template(v-if='selfMsg.type === "text"')
                    | {{ selfMsg.content }}
                  template(v-else-if='selfMsg.type === "picture"')
                    img(:src='selfMsg.content')
                  template(v-else-if='selfMsg.type === "sticker"')
                    img(:src='selfMsg.content')
          .controlBox.row.mx-0.d-flex.justify-content-between
            .col-3.my-auto
              label.paperclip
                input(
                  type='file'
                )
              i.fas.fa-paperclip
              //-
              label.uploadImage
                input(
                  type='file'
                  accept='image/jpg, image/png, image/jpeg'
                  @change='uploadImage'
                )
              i.fas.fa-image
              //-
              Stickers(
                @sendSticker='showSticker'
              )
              a(
                data-toggle="collapse"
                href='.stickers'
              )
                i.far.fa-laugh
            .col-9.input-group
              input(
                type='text'
                v-model='message'
              )
              a(
                href='javascript:;'
                @keyup.enter='sendMsg'
                @click='sendMsg'
              )
                i.fab.fa-telegram-plane
</template>

<script>
import FriendInfoCard from '@/components/FriendInfoCard'
import InfoCard from '@/components/InfoCard'
import Stickers from '@/components/Stickers'

export default {
  name: 'chatRoom',
  components: {
    FriendInfoCard,
    InfoCard,
    Stickers
  },
  data () {
    return {
      message: '',
      picture: '',
      selfMsgs: [
        {
          type: 'text',
          content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.😀'
        }
      ],
      selfStickers: []
    }
  },
  watch: {
    selfMsgs: {
      handler (val) {
        this.$nextTick(() => {
          this.scrollToBottom()
        })
      },
      deep: true
    }
  },
  methods: {
    sendMsg () {
      const msg = {
        type: 'text',
        content: this.message
      }
      this.selfMsgs.push(msg)
    },
    showSticker (e) {
      const sticker = {
        type: 'sticker',
        content: e
      }
      this.selfMsgs.push(sticker)
    },
    uploadImage (e) {
      const image = {
        type: 'picture',
        content: e
      }
      this.selfMsgs.push(image)
      console.log(e.target.value)
    },
    scrollToBottom () {
      const box = this.$refs.msgBox
      var boxHeight = box.scrollHeight
      this.$nextTick(() => {
        box.scrollTop = boxHeight
      })
      console.log(this.$refs.msgBox.scrollHeight)
      console.log('top:' + this.$refs.msgBox.scrollTop)
    }
  }
}
</script>

<style lang='sass'>
  .chatRoom
    height: 100vh
    background-color: $bg-yellow
    background-image: url('../assets/images/bg-pattern-unit.svg')
    background-repeat: repeat
    padding: 51px 85px
    .chatBox
      padding: 40px 40px
      // width: 746px
      height: 698px
      border-radius: 20px
      background-color: $yellow
      .msgBox
        height: 580px
        margin-bottom: 10px
        overflow: auto
        .friendMsg
          width: 50%
          max-width: 405px
          border: 1px solid
          border-radius: 20px
          padding: 11px 24px
          margin-bottom: 24px
        .selfMsg
          background-color: $black
          color: $white
          max-width: 405px
          border-radius: 20px
          padding: 11px 24px
          margin-bottom: 24px
          &.img
            background-color: transparent
            border: none
            border-radius: none
            padding: 0px 0px
      .controlBox
        a
          color: $black
        i
          font-size: 20px
          margin-right: 30px
          cursor: pointer
        label.paperclip
          width: 20px
          height: 22px
          overflow: hidden
          position: absolute
          opacity: 0.5
        label.uploadImage
          width: 20px
          height: 22px
          overflow: hidden
          position: absolute
          opacity: 0.5
        .input-group
          position: relative
          input
            width: 100%
            height: 40px
            border-radius: 20px
            padding: 20px
            border: none
            outline: none
          i
            position: absolute
            right: 3%
            top: 25%
</style>
