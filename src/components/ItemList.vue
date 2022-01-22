<template>
  <div class="py-3">
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
      >
        <Item
          :id="item.id"
          :title="item.title"
          :points="item.points"
          :user="item.user"
          :time-ago="item.time_ago"
          :comments-count="item.comments_count"
          :domain="item.domain"
          :url="item.url"
        />
        <div class="divider" />
      </li>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/Item'
export default {
  name: 'ItemList',
  components: {
    Item
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