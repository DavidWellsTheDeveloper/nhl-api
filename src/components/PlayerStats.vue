<template>
  <div class="container">
    <button class="btn btn-info" v-on:click="collectStats">{{this.showStats?"Hide":"See"}} Player Stats</button>
    <div class="row" v-if="showStats">
      <div v-for="(value, key) in this.stats.stat" :key="key">
        <div class="card mt-3 col">
          {{key}}: <span class="badge badge-secondary">{{ value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    playerid: [String, Number]
  },
  created () {
    // this.collectStats()
  },
  data () {
    return {
      showStats: false,
      stats: null
    }
  },
  methods: {
    collectStats () {
      this.showStats = !this.showStats
      if (this.stats === null) {
        axios.get('https://statsapi.web.nhl.com/api/v1/people/' + this.playerid + '/stats?stats=statsSingleSeason')
          .then(
            response => {
              this.stats = response.data.stats[0].splits[0]
            }
          )
          .catch(error => {
            console.log(error)
            this.errored = true
          })
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
