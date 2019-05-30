<template>
  <Layout>
    <Project
      v-for="{node} in $page.projects.edges"
      v-bind:key="node.id"
      v-bind:title="node.title"
      v-bind:image="node.image"
      v-bind:image2="node.image2"
      v-bind:image3="node.image3"
      v-bind:content="node.content"
    />
  </Layout>
</template>

<script>
import projects from "@/projects";
import Project from "@/components/Project";
export default {
  components: {
    Project
  },
  metaInfo: {
    title: "Projects"
  }
};
</script>

<page-query>
query Projects {
  projects: allProject {
    edges {
      node {
        id
        title
        content
        image
        image2
        image3
      }
    }
  }
}
</page-query>

<style>
</style>
