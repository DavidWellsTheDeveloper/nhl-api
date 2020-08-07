<template>
  <!-- <div class="nav">
    <router-link class="brand" to="/"><img width="24" height="27" alt="Vue logo" src="../assets/nhl_logo.png"></router-link>
    <nav>
      <router-link class="nav-item" :to="{name: 'Home'}">Home</router-link> |
      <router-link class="nav-item" :to="{name: 'About'}">About</router-link> |
    </nav>
  </div> -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="/"><img width="24" height="27" alt="Vue logo" src="../assets/nhl_logo.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'IndividualStats'}">Individual Stats</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'TeamStats'}">TeamStats</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Schedule'}">Schedule</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// .nav {
//   display: flex;
//   margin: 0 5px;
//   .nav-item, .brand {
//     color: #236192;
//     &:hover {
//       color: #6F263D;
//     }
//   }
//   .brand {
//     font-weight: 700;
//     font-size: 1.5em;
//     text-decoration: none;
//   }
//   .nav-item {
//     margin: 0 5px;
//     box-sizing: border-box;
//   }
// }
// nav {
//   padding: 10px;
// }
</style>
