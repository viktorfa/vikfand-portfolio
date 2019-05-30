<template>
  <div class="project">
    <div>
      <h2 class="project-title">{{title}}</h2>
      <div v-html="content"></div>
    </div>
    <div class="image-wrapper">
      <g-image
        v-for="image in [image, image2, image3].filter(x => !!x)"
        :key="image"
        class="project-image"
        :src="image"
      ></g-image>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: Object,
    image2: Object,
    image3: Object,
    content: String
  }
};
</script>

<style>
.project-title {
  border-bottom: 2px solid var(--main-text-color);
}
.project {
  display: block;
}

@media screen and (min-width: 768px) {
  .project {
    display: grid;
    grid-template-columns: 5fr 4fr;
  }
}
.project-image {
  width: auto;
  height: auto;
  max-height: 280px;
  max-width: 360px;
}
.image-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
}
.o-project-image {
  width: auto;
  max-height: 200px;
}
.o-image-wrapper {
  display: grid;
  grid-template-rows: 200px;
  justify-items: center;
  justify-content: center;
  align-content: center;
}
</style>
