<template>
<div class="container">
  <div class="card">
    <button class="btn primary" @click="toggleNotification()">
      {{showNotification ? 'Hide' : 'Show'}} notification
    </button>
  </div>
  <Notification 
    v-if="showNotification"
    title="Fail!"
    text="We fucked up"
    type="danger"
    closable
    @close="showNotification = false" />
</div>
</template>

<script>
import Notification from './Notification.vue'
import notificationMixin from '@/notificationMixin'

export default {
  name: 'App',
  mixins: [notificationMixin],
  components: {
    Notification
  }
}
</script>
