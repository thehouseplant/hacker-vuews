<template>
  <div>
    <h1>{{ data.title }}</h1>
    <p>
      {{ data.domain }}
    </p>
    <p>
      <small>
        {{ data.points }} points |  
        Posted by <router-link class="underline" :to="`/user/${data.user}`">{{ data.user }}</router-link> 
        {{ data.time_ago }}
      </small>
    </p>
    <hr />
    <div v-for="comment in data.comments" :key="comment.id">
      <p v-html="comment.content" />
      <small>
        > Posted by <router-link class="underline" :to="`/user/${comment.user}`">{{ comment.user }}</router-link> 
        {{ comment.time_ago }}
      </small>
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