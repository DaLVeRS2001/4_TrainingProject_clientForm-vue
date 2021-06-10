<template>
  <div class="inputBlock">
    <label :for="this.label">{{this.titleName}}</label><br>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    titleName: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  }

}
</script>