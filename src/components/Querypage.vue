<template>
    <div>
        <input v-model='queryTerm' placeholder='Search...'>
        <p v-if='!searching'> Search for <b>{{ queryTerm }}</b> from our records. </p>
        <p v-else> Searching for <b>{{ queryTerm }}</b> from our records. </p>
        <span v-for='option in options' :key='option.value'>
            <input type='radio' :id='option.name' name='eradio' :value='option.value' v-model='selectedOption'>
            <label :for='option.name'> {{option.text}} </label>
        </span>
        <div>
            <button @click='resetAll'> Reset All </button>
            <button @click='submitForm'> Make Query </button>
        </div>
        <p v-if='!info'> Ensure you make the right query. </p>
        <p v-else> {{ infoMessage }} </p>
    </div>
</template>



<script>
    let validNIN = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    let validIssuedDate = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    let validLastName = /^[a-zA-Z]{2,40}$/;

    export default {
        data() {
            return {
                queryTerm: '',
                selectedOption: '',

                searching: false,

                info: false,
                infoMessage: '',

                options: [{
                        text: 'NIN',
                        value: 'nin',
                        name: 'nin',
                    },
                    {
                        text: 'Issued Date',
                        value: 'issued_date',
                        name: 'issued_date',
                    },
                    {
                        text: 'Last Name',
                        value: 'last_name',
                        name: 'last_name',
                    }
                ],
            }
        },
        methods: {
            resetCheckbox() {
                this.selectedOption = ''
            },

            resetAll() {
                this.queryTerm = ''
                this.selectedOption = ''
            },

            submitForm() {
                if (this.queryTerm === '' && this.selectedOption === '') {
                    this.infoMessage = 'Please select an option and enter a query term.'
                    this.info = true
                } else if (this.selectedOption === '') {
                    this.infoMessage = 'Please select an option.'
                    this.info = true
                } else if (this.queryTerm === '') {
                    this.infoMessage = 'Please enter a query term.'
                    this.info = true
                } else {
                    let rootURL = 'localhost://somethinghere/'
                    let url = ''

                    if (this.selectedOption === 'nin') {
                        if (!this.queryTerm.match(validNIN)) {
                            this.infoMessage = 'Invalid NIN'
                            this.info = true
                            return;
                        }

                        url = rootURL + 'lastNameExt/' + this.queryTerm
                    } else if (this.selectedOption === 'issued_date') {
                        if (!this.queryTerm.match(validIssuedDate)) {
                            this.infoMessage = 'Invalid Issued Date'
                            this.info = true
                            return;
                        }

                        url = rootURL + 'issuedDateExt' + this.queryTerm;
                    } else if (this.selectedOption === 'last_name') {
                        if (!this.queryTerm.match(validLastName)) {
                            this.infoMessage = 'Invalid Last Name'
                            this.info = true
                            return;
                        }

                        url = rootURL + 'lastNameExt/' + this.queryTerm;
                    }

                    alert('The url is ' + url);
                    this.searching = true;
                }
            }
        }
    }

</script>
