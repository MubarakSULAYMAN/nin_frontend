<template>
    <div>
        <div>
            <div v-text="selectedOption"></div>
            <ul>
                <li v-for="option in options" :key="option.value" @change="checked">
                    <input type="checkbox" ref="optionRef" :id="option.name" :value="option.value"
                        v-model="selectedOption">
                    <label :for="option.name">{{option.text}}</label>
                </li>
            </ul>
            <button @click="reset">Reset</button>
        </div>

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

                let disabled1  = (ref1.disabled = true)
                let disabled2  = (ref2.disabled = true)
                let disabled3  = (ref3.disabled = true)

                // let route = 123.456.7890

                if (checkbox1) {
                    return (disabled2, disabled3)
                } else if (checkbox2) {
                    return (disabled1, disabled3)
                } else if (checkbox3) {
                    return (disabled1, disabled2)
                } else {
                    // eslint-disable-next-line no-console
                    return startMessage
                }
            },

            reset(e) {
                e.preventDefault()
                this.selectedOption = []
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
