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
            <button @click="clear">Clear</button>
        </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {
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
                }  else if ( !checkbox1  ||  checkbox2  ||  !checkbox3) {
                    // eslint-disable-next-line no-console
                    console.log("Make a selection please.")
                } else {
                    // eslint-disable-next-line no-console
                    console.log("A selection is required")
                }
            },

            clear() {
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
