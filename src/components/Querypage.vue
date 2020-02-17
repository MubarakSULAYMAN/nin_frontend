<template>
    <div>
        <input v-model="queryTerm" placeholder="Search...">
        <p> Searching for <b>{{ queryTerm }}</b> from our records. </p>
        <div v-text="selectedOption"></div>
        <span v-for="option in options" :key="option.value" @change="checked">
            <input type="checkbox" ref="optionRef" :id="option.name" :value="option.value" v-model="selectedOption">
            <label :for="option.name"> {{option.text}} </label>
        </span>
        <div>
            <button @click="resetCheckbox"> Reset Checkbox </button>
            <button @click="resetAll"> Reset All </button>
            <button @click="submitRequest"> Make Query </button>
        </div>

        <div v-if="checked"> {{startMessage}} </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                queryTerm: '',
                startMessage: '',
                selectedOption: [],
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

            checked() {
                let startMessage = "A selection is required to begin a query."
                let selector1 = this.selectedOption[0]

                let ref1 = this.$refs.optionRef[0]
                let ref2 = this.$refs.optionRef[1]
                let ref3 = this.$refs.optionRef[2]

                let checkbox1 = (selector1 === ref1.value)
                let checkbox2 = (selector1 === ref2.value)
                let checkbox3 = (selector1 === ref3.value)

                // let route = 123.456.7890

                if (checkbox1) {
                    return (ref2.disabled = true, ref3.disabled = true)
                } else if (checkbox2) {
                    return (ref1.disabled = true, ref3.disabled = true)
                } else if (checkbox3) {
                    return (ref1.disabled = true, ref2.disabled = true)
                } else {
                    // eslint-disable-next-line no-console
                    return startMessage
                }
            },

            resetCheckbox(e) {
                let ref1 = this.$refs.optionRef[0]
                let ref2 = this.$refs.optionRef[1]
                let ref3 = this.$refs.optionRef[2]

                e.preventDefault()
                this.selectedOption = []
                ref1.disabled = false
                ref2.disabled = false
                ref3.disabled = false
            },

            resetAll(e) {
                let ref1 = this.$refs.optionRef[0]
                let ref2 = this.$refs.optionRef[1]
                let ref3 = this.$refs.optionRef[2]

                e.preventDefault()
                this.queryTerm = ''
                this.selectedOption = []
                ref1.disabled = false
                ref2.disabled = false
                ref3.disabled = false

            },

            submitRequest(e) {
                e.preventDefault();
                if(this.checked && this.queryTerm != '') {
                    // eslint-disable-next-line no-console
                    console.log("We are good to go.")
                } else {
                    // eslint-disable-next-line no-console
                    console.log("Check a checkbox and input a valid query term to begin a query.")
                }
            }
        }
    }

</script>
