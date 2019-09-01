<template lang='pug'>
  .card.info(style='width: 350px;')
    .card-body
      .row.d-flex.align-items-center
        .col-3
          .img-container.d-flex.align-center.justify-content-center
            img(:src='thumbs[nowThumb]')
        .col-9
          h4 {{ nickname }}
          .info.d-flex.align-items-center
            i.active.fab.fa-facebook
            label {{ contact }}
        a.ellipsis(
          data-toggle="collapse"
          href='.more'
          @click=''
        )
          i.fas.fa-ellipsis-v
      .more.collapse
        .row.mx-0
          .portrait
            label PORTRAIT
              i.fas.fa-arrow-right
            .thumb.d-flex.justify-content-between
              template(v-for='(thumb, index) in thumbs')
                img(
                  @click='chooseThumb(index)'
                  :src='thumb'
                  :class='{ active :  nowThumb === index }'
                )
          .nickname
            label nickname
              i.fas.fa-arrow-right
            input(
              type='text'
              v-model='nickname'
            )
          .contact
            InputContact(
              title='contact'
              :value='contact'
              @inputContact='contact = $event'
            )
          .save.mx-auto
            a.btn.btn-light(
              href='.more'
              @click='nextStep'
              data-toggle="collapse"
            ) SAVE
</template>

<script>
import InputContact from '@/components/InputContact'

export default {
  name: 'InfoCard',
  components: {
    InputContact
  },
  data () {
    return {
      nowThumb: 0,
      nickname: 'Nickname',
      contact: 'nickname1111',
      thumbs: [
        require('@/assets/images/thumbnail-1.svg'),
        require('@/assets/images/thumbnail-2.svg'),
        require('@/assets/images/thumbnail-3.svg'),
        require('@/assets/images/thumbnail-4.svg'),
        require('@/assets/images/thumbnail-5.svg'),
        require('@/assets/images/thumbnail-6.svg')
      ]
    }
  },
  methods: {
    chooseThumb (index) {
      this.nowThumb = index
    },
    inputContact () {

    }
  }
}
</script>

<style lang='sass'>
  .card.info
    background-color: $black
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
        a.ellipsis
          position: absolute
          right: 5%
          top: 35%
          color: white
  .more
    label
      font-weight: bold
      text-transform: uppercase
    .portrait
      display: block
      width: 100%
      margin-top: 20px
      .thumb
        img
          height: 45px
          border-color: white
          border: 2px solid
          border-radius: 50%
          cursor: pointer
          opacity: 0.5
          &.active
            opacity: 1
    .nickname
      width: 100%
      color: $white
      margin-top: 20px
      input
        display: block
        width: 100%
        outline: none
        border: none
        border-bottom: 2px solid
        border-bottom-color: $white
        background-color: $black
        color: $white
    .contact
      width: 100%
      margin-top: 20px
</style>
