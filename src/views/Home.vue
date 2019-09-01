<template lang='pug'>
  .container-fulid.d-flex.justify-content-center.d-flex.align-items-center
    template(v-if='getStep !== "searchStep"')
      IndexCard
    template(v-else-if='getStep === "searchStep"')
      .d-flex.flex-column
        img(src='@/assets/images/logo-rapid-chat.svg')
        label.text-center Setting up a chatting room for you…
        InfoCard
</template>

<script>
import IndexCard from '@/components/IndexCard'
import InfoCard from '@/components/InfoCard'
import { mapGetters } from 'vuex'
import { setTimeout } from 'timers'

export default {
  name: 'home',
  components: {
    IndexCard,
    InfoCard
  },
  data () {
    return {
    }
  },
  watch: {
    getStep: {
      handler (val) {
        if (val === 'searchStep') {
          setTimeout(this.gotoChatRoom, 3000)
        }
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters({
      getStep: 'getStep'
    })
  },
  methods: {
    gotoChatRoom () {
      this.$router.push({ path: '/about' })
    }
  }
}
</script>

<style lang='sass'>
  .container-fulid
    height: 100vh
    background-color: $bg-yellow
    background-image: url('../assets/images/bg-pattern-unit.svg')
    background-repeat: repeat
</style>
