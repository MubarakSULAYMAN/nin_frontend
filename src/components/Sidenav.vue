<template>

  <div>
    <div class="main_page">
      <b-icon icon="archive" rotate="45" class="border rounded-circle bg-success p-1 logo-icon align-items-center mt-3"
        style="width: 100px; height: 100px;" variant="light" @click="$router.push('/')"></b-icon>
      <h4 @click="$router.push('/')"> The Query App </h4>

      <b-nav vertical justified class="w-30 sideNavContainer mt-3" pills>
        <b-nav-item active>
          <b-icon icon="columns-gutters"></b-icon> Activities
        </b-nav-item>
        <b-nav-item>
          <b-icon icon="brush"></b-icon> Report
        </b-nav-item>
        <b-nav-item>
          <b-icon icon="chat"></b-icon> Comments
        </b-nav-item>
        <b-nav-item-dropdown id="my-nav-dropdown" text="Analysis" toggle-class="nav-link-custom" right>
          <b-dropdown-item>
            <b-icon icon="graph-up"></b-icon> Graph
          </b-dropdown-item>
          <b-dropdown-item>
            <b-icon icon="pie-chart"></b-icon> Pie Chart
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>
            <b-icon icon="bar-chart"></b-icon> Bar Chart
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
  </div>

</template>


<style scoped>
  .sideNavContainer {
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    color: #009340;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show>.nav-link {
    background: #009340;
  }

  .dropdown-menu-right {
    transition: .9s transform ease-in-out;
  }

</style>
