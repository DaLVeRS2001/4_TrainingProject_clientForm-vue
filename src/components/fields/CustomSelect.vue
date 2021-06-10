<template>
    <div class="select">
      <div @click.stop="activeHandler(); errorNotice && errorNotice()" class="switcher" >
        <input :placeholder="this.placeholder" :name="this.name" v-model.trim="selectValue" disabled
               class="field"/>
        <span  class="mark">∨</span>
      </div>
      <div v-if="active" class="items">
        <div v-for="(item, idx) in selectItems" @click.stop="clickSelect(idx)"
             class="item" :class="{'clickedItem': item.clicked}" :key="item.name">
          {{item.name}}
        </div>
      </div>
    </div>
</template>
<script>

export default{
  emits: {
    'click-select': (val)=> typeof val === 'object',
  },
  props: {
    multipleMode: {
      type: Boolean,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    itemsData: {
      type: Array,
      required: true
    },
    selectType: {
      type: String,
      required: true,
    },
    errorNotice: {
      type: Function,
      required: false,
    }
  },

  data(){
    return {
      active: false,
      selectItems:[],
      selectValue: ''
    }
  },

  created() {
    this.selectItems = this.itemsData
  },

  mounted() {
    window.addEventListener('click', ()=>  this.active = false)
  },

  beforeUnmount() {
    window.removeEventListener('click', ()=>  this.active = false)
  },

  methods: {
    activeHandler(){
        this.active = !this.active
    },
    clickSelect(idx){
      if(this.multipleMode){
        this.selectItems[idx].clicked = !this.selectItems[idx].clicked
        this.selectValue = this.filteredItems.join(', ')
      }else{
       this.selectItems.map(i=> i.clicked = false)
        this.selectItems[idx].clicked = !this.selectItems[idx].clicked
        this.selectValue = this.selectItems[idx].name
      }
    }
  },

  computed: {
    filteredItems(){
      return this.selectItems.map(item=> item.clicked && item.name).filter(item=> item)
    }
  },

  watch: {
    selectValue(){
      this.$emit('click-select', {selectValue: this.selectValue, selectType: this.selectType})
    }
  }
};
</script>



<style lang="sass">
@import "./select"
</style>
