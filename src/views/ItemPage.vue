<template>
  <Item :id="$route.params.id" />
</template>

<script>
import Item from '@/components/Item.vue'

export default {
  name: 'ItemPage',
  components: {
    Item
  }
}
</script>
