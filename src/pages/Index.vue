<template>
  <Layout>
    <h1>Redirect to /projects ... please wait</h1>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Viktor Andersen"
  },
  created() {
    this.$router.replace("/projects");
  }
};
</script>

<style>
</style>
