 
<template>
    <div class="container-fluid mt-5">

        <div v-if="loading_info">
            <h5 v-if="loading_info">Searching for <strong>{{ query }}</strong> using {{ filter }}</h5>
            <Spinner :size="17" />
            <b-button pill variant="danger" @click="$router.back()" class="back">Go back</b-button>
        </div>

        <div v-else>
            <h1 class="h3 mb-2 text-gray-800">Query Result</h1>
            <p class="mb-4">
                Results are based on your search. For more information, please visit the
                <a target="_blank" href="https://">official documentation</a>.
            </p>

            <div class="card shadow mb-4">
                <!-- <div class="card-header py-3" v-for="item in data_fetched" :key="item.anything">
                    <h6 class="m-0 font-weight-bold text-primary"> Result for the query of "{{ item.nin }}" </h6>
                </div> -->

                <!-- <b-table-simple sticky-header no-border-collapse bordered outlined small hover :items="items" -->
                <b-table-simple sticky-header no-border-collapse bordered outlined small hover head-variant="light"
                    caption-top responsive>

                    <b-thead head-variant="dark">
                        <b-tr class="text-center">
                            <b-th> S/N </b-th>
                            <b-th> First Name </b-th>
                            <b-th> Last Name </b-th>
                            <b-th> Middle Name </b-th>
                            <b-th> Tracking Id </b-th>
                            <b-th> NIN </b-th>
                            <b-th> Issued Date </b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr class="text-center" v-for="(item, index) in matches" :key="item.anyX">
                            <b-td variant="danger"> {{ ++index }} </b-td>
                            <b-td> {{ item.first_name }} </b-td>
                            <b-td> {{ item.last_name }} </b-td>
                            <b-td> {{ item.middle_name }} </b-td>
                            <b-td variant="success"> {{ item.tracking_id }} </b-td>
                            <b-td variant="primary"> {{ item.nin }} </b-td>
                            <b-td variant="warning"> {{ item.issued_date }} </b-td>
                        </b-tr>
                    </b-tbody>
                    <b-tfoot>
                        <b-tr>
                            <b-td colspan="7" variant="secondary" class="text-right">
                                <!-- Total Rows: <b> {{ queryResult.length }} </b> -->
                            </b-td>
                        </b-tr>
                    </b-tfoot>

                </b-table-simple>

                <div class="mx-3">
                    <h6 class="text-right"> More Results </h6>
                    <!-- <b-pagination v-model="currentPage" pills :total-rows="rows" align="right"></b-pagination> -->
                    <b-pagination pills align="right"></b-pagination>
                </div>
            </div>

            <b-button pill variant="danger" @click="$router.back()" class="back">Go back</b-button>
        </div>

    </div>

</template>

<script>
    import Spinner from '@/components/Spinner'
    import $api from '@/Api'

    export default {
        components: {
            Spinner,
        },
        async mounted () {
            var response = await this.search()
            this.matches = response.data.query_term
                // eslint-disable-next-line no-console
                console.log(this.matches)
            this.loading_info = false
        },
        data() {
            return {
                s_n: 0,
                loading_info: true,
                matches: []
            }
        },
        computed: {
            query () {
                return this.$route.params.option || ''
            },
            filter () {
                return this.$route.query.filter || ''
            }
        },
        methods: {
            search () {

                return $api.get(`/filter_by_${this.filter}/${this.query}`)
            }
        }
    }
</script>

<style scoped>
.back {
    display: flex;
    justify-content: flex-end;
}
</style>