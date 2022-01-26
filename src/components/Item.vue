<template>
  <div>
    <h1>{{ data.title }}</h1>
    <p>
      {{ data.domain }}
    </p>
    <p>
      <small>
        {{ data.points }} by {{ data.user }} {{ data.time_ago }}
      </small>
    </p>
    <hr />
    <div v-for="comment in data.comments" :key="comment.id">
      <p v-html="comment.content" />
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      data: []
    }
  },
  beforeMount () {
    this.getItem()
  },
  methods: {
    async getItem () {
      const res = await fetch(`https://api.hackerwebapp.com/item/${this.$props.id}`)
      const data = await res.json()
      this.data = data
    }
  }
}
</script>