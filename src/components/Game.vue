<template>
  <div class="container">
    <div class="row" >
      <div class="col-1">
        <span class="badge badge-warning gameStatus" v-if="gameData.status.abstractGameState === 'Live'">Live</span>
        <span class="badge badge-danger gameStatus" v-if="gameData.status.abstractGameState === 'Final'">Final</span>
        <span class="badge badge-success gameStatus" v-if="gameData.status.abstractGameState === 'Preview'">Preview</span>
      </div>
      <div class="col-11 col-lg-2">
        <div v-if="gameData.linescore.currentPeriod != 0">
          <h5>
            Period:
            <span v-if="gameData.linescore.currentPeriod > 3">OT {{ gameData.linescore.currentPeriod - 3 }}</span>
            <span v-else>{{ gameData.linescore.currentPeriod }}</span>
          </h5>
          <p v-if="gameData.linescore.intermissionInfo.intermissionTimeRemaining != 0">{{gameData.linescore.intermissionInfo.intermissionTimeRemaining}} Remaining in Intermission</p>
          <p v-else><i>{{gameData.linescore.currentPeriodTimeRemaining}} Remaining in Period {{ gameData.linescore.currentPeriod }}</i></p>
        </div>
        <div v-else>
          <h6>Not Started</h6>
          <h5><strong>{{gameTime}}</strong></h5>
        </div>
      </div>
      <div class="col-6 col-lg-3" style="border: 1px solid #cccccc;">
        <h4 style="text-align: left;">Home</h4>
        <br><img style="float: left;" :src="'teams/' + gameData.teams.home.team.name + '.gif'" height="50%" alt="home team">
        <section v-if="gameData.status.abstractGameState != 'Preview'" class="gameStats">
          <span class="score">
            {{gameData.teams.home.score}}<br>
          </span>
          <p>Shots: <strong>{{gameData.linescore.teams.home.shotsOnGoal}}</strong></p>
        </section>
      </div>
      <div class="col-6 col-lg-3" style="border: 1px solid #cccccc;">
        <h4 style="text-align: left;">Away</h4>
        <br><img style="float: left;" :src="'teams/' + gameData.teams.away.team.name + '.gif'" height="50%" alt="away team">
        <section v-if="gameData.status.abstractGameState != 'Preview'" class="gameStats">
          <span class="score">
            {{gameData.teams.away.score}}<br>
          </span>
          <p>Shots: <strong>{{gameData.linescore.teams.away.shotsOnGoal}}</strong></p>
        </section>
      </div>
      <div class="col-12 col-lg-3" style="background-color: #dddddd;">
        <h4>Series</h4>
        <p>{{gameData.seriesSummary.seriesStatus}}
          <br>Game #{{gameData.seriesSummary.gameNumber}}</p>
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
