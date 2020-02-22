<template>

  <div>
    <div>
      Title and other stuffs here, app image and name in particular. May require more space...
    </div>

    <b-nav vertical justified class="w-30 sideNavContainer mt-3" pills>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
      <b-nav-item-dropdown id="my-nav-dropdown" text="Dropdown" toggle-class="nav-link-custom" right>
        <b-dropdown-item>One</b-dropdown-item>
        <b-dropdown-item>Two</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Three</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </div>

</template>


<style scoped>
  .sideNavContainer {
    /* background: #00933f; */
    font-weight: bold;
    display: flex;
    flex-direction: column;
  }

  .nav-link.active {
    background: #009340;
    /* background: #00933f; */
  }

  .dropdown-menu-right {
    transition: .9s transform ease-in-out;
  }

  .collapsed .fa {
    transform: rotate(90deg);
  }

</style>
