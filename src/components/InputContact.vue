<template lang='pug'>
  .form-group
    label {{ title }}
      i.fas.fa-arrow-right
    input(
      :class='{ "into" : getStep !== "step2" }'
      type='text'
      :value='value'
      @input='$emit("inputContact", $event.target.value)'
    )
    .social-icon
      template(v-for='(icon, index) in socialIcons')
        i(
          @click='chooseSocial(index)'
          :class='[icon, { active : nowSocial === index }]'
        )
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InputContact',
  data () {
    return {
      nowSocial: 0,
      socialIcons: [
        'fab fa-facebook',
        'fab fa-instagram',
        'fab fa-line'
      ]
    }
  },
  props: {
    title: {
      type: String,
      default: 'contact'
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      getStep: 'getStep'
    })
  },
  methods: {
    chooseSocial (index) {
      this.nowSocial = index
    }
  }
}
</script>

<style lang='sass'>
  .form-group
    position: relative
    label
      font-weight: bold
      text-transform: uppercase
    input
      display: block
      width: 100%
      outline: none
      border: none
      border-bottom: 2px solid
      border-bottom-color: $black
      background-color: #ffd500
      &.into
        border-bottom-color: $white
        background-color: $black
        color: $white
    .social-icon
      position: absolute
      bottom: 0
      right: 0
      font-size: 24px
      i
        cursor: pointer
        opacity: 0.5
        &.active
          opacity: 1
</style>
