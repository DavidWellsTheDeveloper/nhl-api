<template>
  <div class="container">
    <div class="row" >
      <span class="badge badge-warning align-middle col-1 gameStatus" v-if="gameData.status.abstractGameState === 'Live'">Live</span>
      <span class="badge badge-danger align-middle col-1 gameStatus" v-if="gameData.status.abstractGameState === 'Final'">Final</span>
      <span class="badge badge-success align-middle col-1 gameStatus" v-if="gameData.status.abstractGameState === 'Preview'">Preview</span>
      <div class="col-2">
        <div v-if="gameData.linescore.currentPeriod != 0">
          <h5>
            Period:
            <span v-if="gameData.linescore.currentPeriod > 3">OT {{ gameData.linescore.currentPeriod - 3 }}</span>
            <span v-else>{{ gameData.linescore.currentPeriod }}</span>
          </h5>
        </div>
        <div v-else>
          <h6>Not Started</h6>
          <h5><strong>{{gameTime}}</strong></h5>
        </div>
      </div>
      <div class="col-3">
        Home: <br><img :src="'teams/' + gameData.teams.home.team.name + '.gif'" height="50%" alt="home team">
        <span v-if="gameData.status.abstractGameState != 'Preview'" class="score">
          {{gameData.teams.home.score}}
        </span>
        <br><i>Wins: {{gameData.teams.home.leagueRecord.wins}}</i>
        <br><i>Losses: {{gameData.teams.home.leagueRecord.losses}}</i>
        <br><i v-if="gameData.teams.home.leagueRecord.ot != 0">OT Losses: {{gameData.teams.home.leagueRecord.ot}}</i>
      </div>
      <div class="col-3">
        Away: <br><img :src="'teams/' + gameData.teams.away.team.name + '.gif'" height="50%" alt="away team">
        <span v-if="gameData.status.abstractGameState != 'Preview'" class="score">
          {{gameData.teams.away.score}}
        </span>
        <br><i>Wins: {{gameData.teams.away.leagueRecord.wins}}</i>
        <br><i>Losses: {{gameData.teams.away.leagueRecord.losses}}</i>
        <br><i v-if="gameData.teams.away.leagueRecord.ot != 0">OT Losses: {{gameData.teams.away.leagueRecord.ot}}</i>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from 'dateformat'
export default {
  name: 'Game',
  props: {
    gameData: Object
  },
  computed: {
    gameTime () {
      console.log(this.gameData.gameDate)
      return dateFormat(new Date(this.gameData.gameDate), 'hh:MM TT')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: box-shadow 0.3s ease-in-out;
  }
  .gameStatus {
    border-radius: 0px 20px 20px 0px;
    margin: 30px 0px;
  }
  .score {
    font-size: 2em;
    font-weight: bold;
  }
}
</style>
