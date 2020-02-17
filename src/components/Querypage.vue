<template>
    <div>
        <div>
            <div v-text="selectedOption"></div>
            <ul>
                <li v-for="(option, index) in options" :key="option.value" @change="checked($refs, $event, index)">
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
                if (this.selectedOption[0] === this.$refs.optionRef[0].value) {
                    return (this.$refs.optionRef[1].disabled = true, this.$refs.optionRef[2].disabled = true)
                }

                else if (this.selectedOption[0] === this.$refs.optionRef[1].value) {
                    return (this.$refs.optionRef[0].disabled = true, this.$refs.optionRef[2].disabled = true)
                }

                else if (this.selectedOption[0] === this.$refs.optionRef[2].value) {
                    return (this.$refs.optionRef[0].disabled = true, this.$refs.optionRef[1].disabled = true)
                }
                
                else {
                    // eslint-disable-next-line no-console
                    console.log("A selection is required")
                }
            },
            clear() {
                this.selectedOption = []
            }
        }
    }

</script>
