<template>
<div class="container">
  <div class="card">
    <h2>{{$localization('app.title')}}</h2>
    <button class="btn" @click="changeLang()">
      {{$localization('app.langBtn')}}</button>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  inject: ['translate', 'getLang', 'languages'],
  data() {
    return {
      currentId: -1
    }
  },
  mounted() {
    let currentObj = this.languages.find(lang => lang.name === this.getLang())
    this.currentId = this.languages.indexOf(currentObj)
  },
  methods: {
    changeLang() {
      this.currentId++;
      if(this.currentId === this.languages.length) 
          this.currentId = 0
      
      let currentLanguage = this.languages[this.currentId].name
      this.translate(currentLanguage)
      this.$forceUpdate()
    }
  }
}
</script>
