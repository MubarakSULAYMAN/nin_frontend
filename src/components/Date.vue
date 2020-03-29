<template>
  <div>

  </div>
</template>

<script>
export default {

}

  var fromYear = 2020; 
//   thisYear = (int)date('Y'); 
var thisYear = new Date(date.getFullYear())
  $present_year = $fromYear . (($fromYear != $thisYear) ? '-' . $thisYear : '');
?>
  <p class="mt-5 mb-3 text-muted text-center"> &copy; <?php echo $present_year ?> </p>
</script>

<style>

</style>