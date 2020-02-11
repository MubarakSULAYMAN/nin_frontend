<template>
 <div>
   <b-form inline>
    <label class="sr-only">Name</label>
    <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Jane Doe" v-model="input"></b-input>
    <b-button variant="primary" @click="dateValidation">Check</b-button>
  </b-form>
  <!-- <div v-if="dateValidation===true"> {{xyz}} </div> -->
</div>
</template>

<script>
let c = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
// let validNIN = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
// let validLastName = /^[a-zA-Z]{2,40}$/;
  export default {
    data() {
      return {
        input: '',
        validInput: '',
        xyz: 'Valid Date',
      }
    },
    methods: {
      dateValidation() {
        if (this.input.match(c) && this.input.length > 2 && this.input.length <= 40){
          // validNIN
        // if (this.input.match(validNIN) && this.input.length > 2 && this.input.length <= 40){
          prompt ("Hello, I am correct")
        } else prompt ("Try again later", c)
      }
    },
    computed: {
    }
  }
</script>