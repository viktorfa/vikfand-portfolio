<template>
  <nav>
    <div class="menu-title">
      <g-link to="/">Viktor Andersen</g-link>
    </div>
    <div class="menu-links">
      <ul>
        <li>
          <g-link to="/projects" class="navbar-link">Projects</g-link>
        </li>
        <li>
          <g-link to="/about" class="navbar-link">About</g-link>
        </li>
        <li>
          <g-link to="/bio" class="navbar-link">Bio</g-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.menu-links > ul {
  padding: 0;
  list-style: none;
  display: flex;
}
.menu-links > ul > li {
  padding: 0 0.2rem;
}
nav {
  position: fixed;
  width: calc(100vw - 2 * var(--body-side-margin));
  height: var(--sidebar-height);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  background: var(--main-bg-color);
}

.menu-links {
  text-transform: uppercase;
  font-family: monospace;
}

.navbar-link.active {
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  nav {
  background: transparent;
    width: var(--sidebar-width);
    font-size: 2.5rem;
    padding: 0.5rem;
    display: block;
  }
  .menu-links > ul {
    display: block;
  }
}
</style>
