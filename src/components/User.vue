<template>
  <div>
    <h1>{{ data.id }}</h1>
    <cite>
      {{ data.about }}
    </cite>
    <p v-if="data.karma">
      {{ data.karma }} total karma
    </p>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      data: []
    }
  },
  beforeMount () {
    this.getUser()
  },
  methods: {
    async getUser () {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${this.$props.user}.json?print=pretty`)
      const data = await res.json()
      this.data = data
    }
  }
}
</script>