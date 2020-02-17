<template>
    <div class="justify-content-md-center mt-5">
        <div v-text="selectedOption"></div>
        <b-row>
            <b-col>
                <b-form-group label="Inline switch style checkboxes">
                    <span md="6" v-for="option in options" :key="option.value" @change="checked">
                        <input type="checkbox" ref="optionRef" :id="option.name" :value="option.value"
                            v-model="selectedOption">
                        <label :for="option.name">{{option.text}}</label>
                    </span>
                    <div class="justify-content-md-center">
                        <button @click="reset">Reset</button>
                    </div>
                    

                </b-form-group>
            </b-col>
        </b-row>

        <div>
            <b-button>Reset Checkbox</b-button>
            <b-button variant="danger">Reset ALl</b-button>
            <b-button variant="success">Send Request</b-button>
        </div>

        <!-- <b-row class="justify-content-md-center mt-5">
            <b-col md="6">
                <b-form-group label="Inline switch style checkboxes">
                    <b-form-checkbox-group :options="options" @change="checked" switches>
                    </b-form-checkbox-group>
                </b-form-group>
            </b-col>
        </b-row> -->

        <div v-if="checked"> {{startMessage}} </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {
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

                // let disabled1  = (ref1.disabled = true)
                // let disabled2  = (ref2.disabled = true)
                // let disabled3  = (ref3.disabled = true)

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

            reset(e) {
                let ref1 = this.$refs.optionRef[0]
                let ref2 = this.$refs.optionRef[1]
                let ref3 = this.$refs.optionRef[2]

                e.preventDefault()
                this.selectedOption = []
                ref1.disabled =false
                ref2.disabled =false
                ref3.disabled =false

            },

            submitRequest(e) {
                this.todos.push({
                    text: this.text,
                    completed: false
                });

                // To prevent the request from submitting
                e.preventDefault();
            }
        }
    }

</script>
