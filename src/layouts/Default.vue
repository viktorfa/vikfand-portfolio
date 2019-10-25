<template>
  <div class="layout">
    <div class="nav-and-content">
      <div class="menu-wrapper">
        <Menu />
      </div>
      <div class="content-wrapper">
        <div class="container">
          <slot />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
export default {
  components: {
    Footer,
    Menu
  }
};
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: "Varela Round", sans-serif;
  margin: 0 var(--body-side-margin);
  line-height: 1.5;
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}

.layout {
}
.nav-and-content {
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
  align-content: flex-start;
}
.nav-and-content > * {
  flex: 1 100%;
}

.content-wrapper {
  margin-top: var(--topbar-height);
}

@media screen and (min-width: 768px) {
  body {
    margin: 0;
    padding: 0;
  }
  .content-wrapper {
    margin-left: var(--sidebar-width);
    margin-top: 0;
  }
}

.container {
  max-width: 960px;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
