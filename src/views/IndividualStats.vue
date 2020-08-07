<template>
  <div class="playerStats">
    <h1>Individual Stats</h1>
    <hr />
    <div v-for="team in teams" :key="team.id">
      <TeamCard :team=team />
    </div>
  </div>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue'
import axios from 'axios'
export default {
  name: 'playerStats',
  components: {
    TeamCard
  },
  data () {
    return {
      teams: null
    }
  },
  created () {
    axios.get('https://statsapi.web.nhl.com/api/v1/teams')
      .then(
        response => {
          let teamList = response.data.teams
          teamList = teamList.sort(function (a, b) {
            // Compare the 2 dates
            if (a.conference.name > b.conference.name) return -1
            else if (a.conference.name < b.conference.name) return 1
            else {
              if (a.division.name < b.division.name) return -1
              else if (a.division.name > b.division.name) return 1
              else {
                if (a.name < b.name) return -1
                else if (a.name > b.name) return 1
                else return 0
              }
            }
          })
          this.teams = teamList
        }
      )
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  }
}
</script>
