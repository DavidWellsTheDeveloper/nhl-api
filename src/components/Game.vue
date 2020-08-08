<template>
  <div class="container">
    <div class="row" >
      <span class="badge badge-warning align-middle col-1 gameStatus" v-if="gameData.status.abstractGameState === 'Live'">Live</span>
      <span class="badge badge-danger align-middle col-1 gameStatus" v-if="gameData.status.abstractGameState === 'Final'">Final</span>
      <span class="badge badge-success align-middle col-1 gameStatus" v-if="gameData.status.abstractGameState === 'Preview'">Preview</span>
      <div class="col-2">
        <h5 v-if="gameData.linescore.currentPeriod != 0">
          Period: {{ gameData.linescore.currentPeriod }}
        </h5>
        <h6 v-else>Not Started</h6>
      </div>
      <div class="col-3">
        Home: <br><img :src="'teams/' + gameData.teams.home.team.name + '.gif'" height="50%" alt="home team">
        <span v-if="gameData.status.abstractGameState != 'Preview'" class="score">
          {{gameData.teams.home.score}}
        </span>
      </div>
      <div class="col-3">
        Away: <br><img :src="'teams/' + gameData.teams.away.team.name + '.gif'" height="50%" alt="away team">
        <span v-if="gameData.status.abstractGameState != 'Preview'" class="score">
          {{gameData.teams.away.score}}
        </span>
      </div>
      <div class="col-3">
        <span v-if="gameData.gameType='P'">Qualifying</span>
        <span v-else-if="gameData.gameType='R'">Round Robin</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    gameData: Object
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
