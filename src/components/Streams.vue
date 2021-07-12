<template>
  <div class="container">
    <div class="video1"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/nhBVL41-_Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div class="video2"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/nFh7-HfODYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="video3"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/nhBVL41-_Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div class="video4"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/nhBVL41-_Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div class="video5"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/nhBVL41-_Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.container {
  margin: 5px;
  width: 95%;
    margin-left: 20px;
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
//   grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "video1 video2 video3"
    "video1 video4 video5"
    ". . .";
    height:400px;
}
.video1 {
  grid-area: video1;
  border: 1px solid white;
  margin: 5px;
  margin-left:15px;
}
.video2 {
  grid-area: video2;
  border: 1px solid white;
  margin: 5px;
}
.video3 {
  grid-area: video3;
  border: 1px solid white;
  margin: 5px;
}
.video4 {
  grid-area: video4;
  border: 1px solid white;
  margin: 5px;
}
.video5 {
  grid-area: video5;
  border: 1px solid white;
  margin: 5px;
}
</style>
