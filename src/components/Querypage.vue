<template>
    <div>
        <input v-model='queryTerm' placeholder='Search...'>
        <p v-if='!searching'> Search for <b>{{ queryTerm }}</b> from our records. </p>
        <p v-else> Searching for <b>{{ queryTerm }}</b> from our records. </p>
        <div v-text='selectedOption'></div>
        <span v-for='option in options' :key='option.value'>
            <input type='radio' :id='option.name' name='eradio' :value='option.value' v-model='selectedOption'>
            <label :for='option.name'> {{option.text}} </label>
        </span>
        <div>
            <button @click='resetCheckbox'> Reset Checkbox </button>
            <button @click='resetAll'> Reset All </button>
            <button @click='submitForm'> Make Query </button>
        </div>

        <!-- <div v-if='checked'> {{startMessage}} </div> -->
    </div>
</template>



<script>
    let validNIN = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    // let validIssuedDate = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    // let validLastName = /^[a-zA-Z]{2,40}$/;

    export default {
        data() {
            return {
                queryTerm: '',
                startMessage: 'A selection is required to begin a query.',
                selectedOption: '',

                searching: false,

                options: [{
                        text: 'NIN',
                        value: 'nin',
                        name: 'nin',
                        disabled: false
                    },
                    {
                        text: 'Issued Date',
                        value: 'issued_date',
                        name: 'issued_date',
                        disabled: false
                    },
                    {
                        text: 'Last Name',
                        value: 'last_name',
                        name: 'last_name',
                        disabled: false
                    }
                ],
            }
        },
        methods: {

            // checked(e) {
            //     e.preventDefault()

            //     let selector1 = this.selectedOption[0]

            //     let ref1 = this.$refs.optionRef[0]
            //     let ref2 = this.$refs.optionRef[1]
            //     let ref3 = this.$refs.optionRef[2]

            //     let checkbox1 = (selector1 === ref1.value)
            //     let checkbox2 = (selector1 === ref2.value)
            //     let checkbox3 = (selector1 === ref3.value)

            //     if (checkbox1) {
            //         // eslint-disable-next-line no-console
            //         console.log('NIN is selected.')
            //         return (ref2.disabled = true, ref3.disabled = true, true)
            //     } else if (checkbox2) {
            //         // eslint-disable-next-line no-console
            //         console.log('Issued Date is selected.')
            //         return (ref1.disabled = true, ref3.disabled = true, true)
            //     } else if (checkbox3) {
            //         // eslint-disable-next-line no-console
            //         console.log('Last Name is selected.')
            //         return (ref1.disabled = true, ref2.disabled = true, true)
            //     } else {
            //         // eslint-disable-next-line no-console
            //         console.log('No selection...')
            //         return false
            //     }
            // },

            resetCheckbox(e) {
                // let ref1 = this.$refs.optionRef[0]
                // let ref2 = this.$refs.optionRef[1]
                // let ref3 = this.$refs.optionRef[2]

                e.preventDefault()
                this.selectedOption = ''
                // ref1.disabled = false
                // ref2.disabled = false
                // ref3.disabled = false
            },

            resetAll(e) {
                // let ref1 = this.$refs.optionRef[0]
                // let ref2 = this.$refs.optionRef[1]
                // let ref3 = this.$refs.optionRef[2]

                e.preventDefault()
                this.queryTerm = ''
                this.selectedOption = ''
                // ref1.disabled = false
                // ref2.disabled = false
                // ref3.disabled = false

            },

            submitForm() {
                if (this.queryTerm === '' && this.selectedOption === '') {
                    alert('Please select an option and enter a query term.')
                } else if (this.selectedOption === '') {
                    alert('Please select an option.')
                } else if (this.queryTerm === '') {
                    alert('Please enter a query term.')
                } else {
                    let url = ''

                    if (this.selectedOption === 'nin') {
                        if (!this.queryTerm.match(validNIN)) {
                            alert('Invalid NIN')
                            return;
                        }

                        url = 'xyz.com/' + this.queryTerm
                    }

                    alert('The url is ' + url);
                    this.searching = true;
                }
            },

            // verifyForm(e) {
            //     e.preventDefault();

            //     let myQuery = this.queryTerm

            //     if (this.checked(e) && myQuery != '') {
            //         // eslint-disable-next-line no-console
            //         console.log('We are good to go with the that.')
            //         return true
            //     } else {
            //         // eslint-disable-next-line no-console
            //         console.log('Check a checkbox and input a valid query term to begin a query.')
            //         return false
            //     }
            // },

            verifyInput(e) {
                e.preventDefault()

                if (this.verifyForm(e) && this.checked(e).checkbox1) {

                    let myQuery = this.queryTerm

                    if (myQuery.match(validNIN)) {
                        // eslint-disable-next-line no-console
                        console.log('NIN is good to go.')
                        return true
                    } else {
                        // eslint-disable-next-line no-console
                        console.log('NIN is invalid.')
                        return false
                    }
                    // } else if (this.checked(e).checkbox2) {

                    //     let myQuery = this.queryTerm

                    //     if (myQuery.match(validIssuedDate)) {
                    //         // eslint-disable-next-line no-console
                    //         console.log('Issued Date is good to go.')
                    //         return true
                    //     } else {
                    //         // eslint-disable-next-line no-console
                    //         console.log('Issued Date is invalid.')
                    //         return true
                    //     }
                    // } else if (this.checked(e).checkbox3) {

                    //     let myQuery = this.queryTerm

                    //     if (myQuery.match(validLastName)) {
                    //         // eslint-disable-next-line no-console
                    //         console.log('Last Name is good to go.')
                    //         return true
                    //     } else {
                    //         // eslint-disable-next-line no-console
                    //         console.log('Last Name is invalid.')
                    //         return false
                    //     }
                }

            },

            // submitRequest(e) {
            //     e.preventDefault();

            //     if (this.verifyInput) {
            //         // eslint-disable-next-line no-console
            //         console.log('Query will be successful.')
            //     }
            // }
        }
    }

</script>
