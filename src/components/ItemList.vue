<template>
  <div class="py-3">
    <p
      v-for="item in items"
      :key="item.id"
    >
      <ItemRow
        :id="item.id"
        :title="item.title"
        :points="item.points"
        :user="item.user"
        :time-ago="item.time_ago"
        :comments-count="item.comments_count"
        :domain="item.domain"
        :url="item.url"
      />
    </p>
  </div>
</template>

<script>
import ItemRow from '@/components/ItemRow'

export default {
  name: 'ItemList',
  components: {
    ItemRow
  },
  data () {
    return {
      items: []
    }
  },
  beforeMount () {
    this.getTopItems()
  },
  methods: {
    async getTopItems () {
      const res = await fetch('https://api.hackerwebapp.com/news')
      const data = await res.json()
      this.items = data
    }
  }
}
</script>