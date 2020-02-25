<template>
    <div class="container-fluid mt-3">

        <p v-if="loading_info">
            <Spinner />
            <!-- Loading... -->
        </p>
        <div v-else>
            <h1 class="h3 mb-2 text-gray-800">Query Result</h1>
            <p class="mb-4">Results are based on your search. For more information, please visit the <a target="_blank"
                    href="https://">official documentation</a>.</p>

            <div class="card shadow mb-4">
                <div class="card-header py-3" v-for="item in data_fetched" :key="item.anything">
                    <h6 class="m-0 font-weight-bold text-primary"> Result for the query of "{{ item.nin }}" </h6>
                </div>

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
                        <b-tr class="text-center" v-for="(item, index) in data_fetched" :key="item.anyX">
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
                                Total Rows: <b> {{ data_fetched.length }} </b>
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
        </div>

    </div>

</template>

<script>
    import Spinner from './Spinner'

    export default {
        components: {
            Spinner,
        },

        data() {
            return {
                s_n: 0,
                last_name: 'Olatunbosun',
            }
        },

        props: {
            // data_fetched: Object,
            data_fetched: Array,
            // loading_info: Boolean,
            loading_info: Boolean
        }
    }

</script>
