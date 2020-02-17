<template>
    <div>
        <div>
            <div v-text="selectedOption"></div>
            <ul>
                <li v-for="option in options" :key="option.value" @change="checked($refs, $event)">
                    <input type="checkbox" ref="" :id="option.name" :value="option.value" v-model="selectedOption"
                        @update:li="updatedLi">
                    <label :for="option.name">{{option.text}}</label>
                </li>
            </ul>
            <div @update:li="updatedLi"> </div>
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
            checked(event) {
                this.$emit('update:li', this.selectedOption)
                // if(this.selectedOption.value === this.options[0].value) {

                // eslint-disable-next-line no-console
                // console.log(this.options[0].value)

                // eslint-disable-next-line no-console
                // console.log(this.selectedOption)
                // eslint-disable-next-line no-console
                // console.log(this.$refs[''])

                // }
                // eslint-disable-next-line no-console
                // console.log(this.options[1].value)

                // if(this.$refs[0].$refs[0].change()) {
                    // eslint-disable-next-line no-console
                    console.log(this.$refs)
                    
                    // eslint-disable-next-line no-console
                    console.log(event)
                // }

                // this.$refs.checkbox.change()
            },
            updatedLi(value) {
                // eslint-disable-next-line no-console
                console.log(value)
            },
            clear() {
                this.selectedOption = []
            }
        },
        mounted() {
            // eslint-disable-next-line no-console
            // console.log(this.$refs['nin'])

        }
    }

</script>
