<template lang='pug'>
  .card(style='width: 350px;')
    .card-body
      .card-title.text-center
        img(src='@/assets/images/logo-rapid-chat.svg')
        label We create a private place to chat.
      .card-text
        template(v-if='getStep === "step1"')
          ol
            li Randomly pick a person for you.
            li Chat anything in ten minutes.
            li Choose to exchange your contact info or not.
            li Get the contact info if both of you choose to exchange at the same time.
        template(v-else-if='getStep === "step2"')
          InputContact(
            title='your contact info'
          )
      a.btn.btn-dark(
        href='javascript:;'
        @click='nextStep'
      ) START
        i.fas.fa-arrow-right
</template>

<script>
import InputContact from '@/components/InputContact'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IndexCard',
  components: {
    InputContact
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getStep: 'getStep'
    })
  },
  methods: {
    ...mapActions({
      setStep: 'setStep'
    }),
    nextStep () {
      var nowStep = this.getStep
      if (nowStep === 'step1') {
        this.setStep('step2')
      } else if (nowStep === 'step2') {
        // validate
        this.setStep('searchStep')
      }
    }
  }
}
</script>

<style lang='sass'>
  .card
    background-color: $yellow
    border-radius: 20px
    border: none
    .card-body
      padding: 40px 40px
      h5
        display: inline
        padding-left: 8px
        font-family: 'Lexend Deca', sans-serif !important
        font-size: 24px
        font-weight: bold
        text-transform: uppercase
    .card-text
      margin-bottom: 25px
      margin-left: -16px;
      ol
        padding-left: 15px
    label
      font-size: 16px
    i
      margin-left: 12px
</style>
