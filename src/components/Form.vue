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
// var date = new Date()
let c = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
// let validNIN = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
// let c = /^[A-Za-z]+\d+$/;
// let c = /^[a-zA-Z0-9]+$/;
// let validLastName = /^[a-zA-Z]{2,40}$/;
// let c = /[0-3]\d-[01]\d-\d{4}/gm;
// let c = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/gm;
// let c = /((0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-[12]\d{3})/;
// let c = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
// let c = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
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