<template>
  <div class="project">
    <h2 class="project-title">{{title}}</h2>
    <div>
      <div v-html="content"></div>
    </div>
    <div class="image-wrapper">
      <g-image v-for="image in images" :key="image.id" class="project-image" :src="image"></g-image>
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
  },
  computed: {
    // Kinda hard to get a list of images from markdown, so we make
    // a list from separate frontmatter keys.
    images() {
      return [this.image, this.image2, this.image3].filter(x => !!x);
    }
  }
};
</script>

<style>
.project-title {
  border-bottom: 2px solid var(--main-text-color);
  grid-column-start: 1;
  grid-column-end: 3;
}
.project {
  display: block;
}

td {
  color: #10a820;
  vertical-align: top;
}

@media screen and (min-width: 768px) {
  .project {
    display: grid;
    grid-template-columns: 5fr 4fr;
    grid-template-rows: 1 1;
  }
  .project-title {
    max-width: calc(100% * 5 / 9);
  }
  .project-image {
    max-width: 360px;
  }
}
.project-image {
  width: auto;
  height: auto;
  max-height: 280px;
  max-width: 100%;
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
