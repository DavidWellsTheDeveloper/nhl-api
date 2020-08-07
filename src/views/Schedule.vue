<template>
  <div class="container">
    <h1>Schedule</h1>
    <table>
      <tr>
        <th>Status</th>
        <th>Home</th>
        <th>Away</th>
        <th>Start</th>
      </tr>
      <tr v-for="game in scheduleData.dates[0].games" :key="game.pk">
        <td>
          <span class="badge badge-warning align-middle" v-if="game.status.abstractGameState === 'Live'">Live</span>
          <span class="badge badge-danger align-middle" v-if="game.status.abstractGameState === 'Final'">Final</span>
          <span class="badge badge-success align-middle" v-if="game.status.abstractGameState === 'Preview'">Preview</span>
        </td>
        <td>{{ game.teams.home.team.name }} </td>
        <td>{{ game.teams.away.team.name }}</td>
        <td>{{ getGameTime(game.gameDate) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import dateFormat from 'dateformat'
export default {
  created () {
    const today = new Date()
    const todayFormat = dateFormat(today, 'yyyy-mm-dd')
    // let tomorrow = new Date()
    // tomorrow = tomorrow.setDate(today.getDate() + 1)
    // const tomorrowFormat = dateFormat(tomorrow, 'yyyy-mm-dd')
    axios.get('https://statsapi.web.nhl.com/api/v1/schedule?startDate=' + todayFormat + '&endDate=' + todayFormat + '&hydrate=team,linescore&site=en_nhl')
      .then(response => {
        this.scheduleData = response.data
        this.selDateGames = response.data.dates[0].games
        console.log(response.data)
      })
  },
  data () {
    return {
      scheduleData: null,
      selDateGames: null,
      selDate: new Date()
    }
  },
  computed: {

  },
  methods: {
    getGameTime (gameDate) {
      const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      return new Date(gameDate).toLocaleDateString('en-US', options)
    }
  }
}
</script>

<style lang="scss" scoped>
  table {
    margin: 1em 0;
    border: 1px solid black;
    tr {
      border: 1px solid black;
      td, th {
        border: 1px solid black;
        padding: 1em;
      }
    }
  }
</style>
