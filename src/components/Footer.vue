<template>
  <footer>
    <hr>
    <g-link to="/#top">To the top</g-link>
    <div>
      <span>
        {{year}} built with
        <a href="https://gridsome.org">Gridsome</a>
      </span>
    </div>
    <div>
      <span>Viktor Andersen</span>
    </div>
    <div>
      <a href="https://blog.vikfand.com">Blog</a>
    </div>
    <div>
      <a href="https://travels.vikfand.com">Travel blog</a>
    </div>
    <div>
      <code>{{commitSha}}</code>
    </div>
  </footer>
</template>

<script>
import { commitSha } from "@/config";
export default {
  data() {
    return {
      year: new Date().getUTCFullYear(),
      commitSha:
        commitSha && commitSha.substring && commitSha.length >= 8
          ? commitSha.substring(0, 8)
          : "d34db33f"
    };
  }
};
</script>

<style>
footer {
  text-align: center;
  color: var(--main-text-color);
  margin-top: 2rem;
}
</style>
