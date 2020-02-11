<template>
  <div>
    <b-form @submit.stop.prevent @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="query_info" label-for="info-message" description="Happy querying..." >
            <!-- <label for="feedback-user">User ID</label> -->
            <b-input v-model="form.queryInput" :state="validation" id="feedback-user" placeholder="07-04-2016"></b-input>
            <b-form-invalid-feedback :state="validation"> Wrong input </b-form-invalid-feedback>
            <!-- <b-form-invalid-feedback :state="validation"> Input is expected to be a valid NIN, Issued Date or Last Name. </b-form-invalid-feedback> -->
            <b-form-valid-feedback :state="validation"> Looks Good. </b-form-valid-feedback>
        </b-form-group>

        <b-form-group id="check-boxes">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="NIN">NIN</b-form-checkbox>
            <b-form-checkbox value="Issued Date">Issued Date</b-form-checkbox>
            <b-form-checkbox value="Last Name">Last Name</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary" @click="dateValidation">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
      <pre class="m-0" v-show="dateValidation===true">{{ xyz }}</pre>
    </b-card>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          queryInput: '',
          name: '',
          food: null,
          checked: []
        },
        show: true,
        queryInput: '',
        validDate: '',
        validDateRegex: 'Hello',
        xyz: 'Valid Date'
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.queryInput = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      dateValidation() {
        if (this.validDate == this.validDateRegex)
        return ("Hello, I am correct")
      }
    },
    computed: {
      // validation() {
      //   return this.queryInput.length > 4 && this.queryInput.length < 13
      // }
    }
  }
</script>