<template lang='pug'>
  .card.friend-info(style='width: 350px;')
    .card-body
      .row.d-flex.align-items-center
        .col-3
          .img-container.d-flex.align-center.justify-content-center
            img(src='@/assets/images/thumbnail-1.svg')
        .col-9
          h4 Nekoneko
          .info.d-flex.align-items-center
            i.active.fab.fa-facebook
            label 123456
        a(
          href='javascript:;'
          @click=''
        )
          i.fas.fa-ellipsis-v
</template>

<script>
export default {
  name: 'FriendInfoCard',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='sass'>
  .card.friend-info
    background-color: $yellow
    border-radius: 20px
    border: none
    color: $white
    width: 350px
    .card-body
      padding: 16px 16px
      .row
        position: relative
        .img-container
          width: 72px
          height: 72px
          border-radius: 20px
          background-color: $white
        .info
          i
            margin-left: 0
            margin-right: 4px
            font-size: 24px
          label
            margin-bottom: 0
        a
          position: absolute
          right: 5%
          top: 35%
          color: white
</style>
