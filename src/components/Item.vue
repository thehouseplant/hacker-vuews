<template>
  <span>
    <span>
      <span>
        <a class="underline" :href="url" target="_blank">
          {{ title }}
        </a>
      </span>
      <span v-if="domain">
        ({{ domain }})
      </span>
    </span>
    <p>
      <small>
        <span v-if="points">
          {{ points }} points
        </span>
        <span v-if="user">
          by <router-link class="underline" :to="`/user/${user}`">{{ user }}</router-link> |
        </span>
        <span>
          Posted {{ timeAgo }}
        </span>
        <span v-if="commentsCount > 0">
          | <router-link class="underline" :to="`/item/${id}`">{{ commentsCount }} comments</router-link>
        </span>
      </small>
    </p>
  </span>
</template>

<script>
export default {
  name: 'Item',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    points: {
      type: Number,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    timeAgo: {
      type: String,
      required: true
    },
    commentsCount: {
      type: Number,
      required: false,
      default: 0
    },
    domain: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>