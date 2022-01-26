<template>
  <User :user="$route.params.user" />
</template>

<script>
import User from '@/components/User.vue'

export default {
  name: 'UserPage',
  components: {
    User
  }
}
</script>
