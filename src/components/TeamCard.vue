<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <img v-if="this.team.conference.name === 'Eastern'" src="../assets/eastern_conference.png" height="40" alt="Eastern">
        <img v-else-if="this.team.conference.name === 'Western'" src="../assets/western_conference.png" height="40" alt="Western">

        <img v-if="this.team.division.name === 'Pacific'" src="../assets/pacific_division.png" height="40" alt="Pacific Division">
        <img v-else-if="this.team.division.name === 'Central'" src="../assets/central_division.png" height="40" alt="Central Division">
        <img v-else-if="this.team.division.name === 'Atlantic'" src="../assets/atlantic_division.png" height="40" alt="Atlantic Division">
        <img v-else-if="this.team.division.name === 'Metropolitan'" src="../assets/metropolitan_division.png" height="40" alt="Metropolitan Division">
      </div>

      <div class="col-7">
        {{this.team.name}} <a :href="this.team.officialSiteUrl" target="blank">Official Website</a>
      </div>
      <div class="col-3">
        <button v-on:click="collectRoster" class="btn btn-info">{{ showRoster?"Hide":"Show" }} Roster</button>
      </div>
    </div>
    <div id="roster" v-show="showRoster">
      <div v-for="player in roster" :key="player.id">
        <p>Name: {{ player.person.fullName }}--Position: {{ player.position.name }}--Jersey: {{player.jerseyNumber}}
          <PlayerStats :playerid = player.person.id />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PlayerStats from '@/components/PlayerStats.vue'

export default {
  components: {
    PlayerStats
  },
  props: {
    team: Object
  },
  data () {
    return {
      roster: null,
      showRoster: false
    }
  },
  methods: {
    collectRoster () {
      this.showRoster = !this.showRoster
      if (this.roster === null) {
        axios.get('https://statsapi.web.nhl.com/api/v1/teams/' + this.team.id + '/roster')
          .then(
            response => {
              this.roster = response.data.roster
            }
          )
          .catch(error => {
            console.log(error)
            this.errored = true
          })
      }
    },
    showPlayerStats () {

    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  margin-bottom: 12px;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
}
.card > .title {
  margin: 0;
}
</style>
