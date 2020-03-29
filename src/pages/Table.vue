 <template>
     <div class="container-fluid mt-5">

         <div v-if="loading_info"
             class="row m-3 p-3 justify-content-sm-center justify-content-md-center justify-content-lg-center">
             <h5 v-if="loading_info">Searching for <strong>{{ query }}</strong> using {{ filter }}</h5>
             <b-row class="m-5">
                 <Spinner :size="17" />
             </b-row>
             <h5 class="display-5 lead text-center"> Kindly wait, your request may take a while. </h5>
             <b-row>
                 <b-button pill variant="danger" @click="$router.back()" class="m-5 back">Go back</b-button>
             </b-row>
         </div>

         <div v-else>
             <h1 class="h3 mb-2 text-gray-800">Query Result</h1>
             <p class="mb-4">
                 Results are based on your search. For more information, please visit the
                 <a target="_blank" href="https://">official documentation</a>.
             </p>

             <div class="card shadow mb-4">
                 <div class="card-header py-3">
                     <h6 class="m-0 font-weight-bold text-primary"> Result for the query of "{{ query }}" </h6>
                 </div>

                 <div v-if="queryResponse.length < 1"
                     class="row text-center m-3 p-3 justify-content-sm-center justify-content-md-center justify-content-lg-center">
                             <h3 class="display-3 lead"> <strong> No Result Found </strong> </h3>
                 </div>

                 <div v-else>
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
                             <b-tr class="text-center" v-for="(item, index) in queryResponse" :key="item.anyX">
                                 <b-td variant="danger"> {{ ++index }} </b-td>
                                 <b-td> {{ item.first_name }} </b-td>
                                 <b-td> {{ item.last_name }} </b-td>
                                 <b-td> {{ item.middle_name }} </b-td>
                                 <b-td variant="success"> {{ item.tracking_id }} </b-td>
                                 <b-td variant="primary"> {{ item.nin }} </b-td>
                                 <b-td variant="warning"> {{ item.issued_date }} </b-td>
                             </b-tr>
                         </b-tbody>
                     </b-table-simple>
                 </div>
                 <div class="card-footer text-right">
                     Total Result Returned: <b> {{ queryResponse.length }} </b>
                 </div>

                 <!-- <div class="mx-3">
                    <h6 class="text-right"> More Results </h6>
                    <b-pagination v-model="currentPage" pills :total-rows="rows" align="right"></b-pagination>
                </div> -->
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
         async mounted() {
             var response = await this.search()
             this.queryResponse = response.data.query_term
             this.loading_info = false
             setTimeout(() => this.loading_infoX = true, 5000);
         },
         data() {
             return {
                 loading_info: true,
                 queryResponse: []
             }
         },
         computed: {
             query() {
                 return this.$route.params.option || ''
             },
             filter() {
                 return this.$route.query.filter || ''
             }
         },
         methods: {
             search() {
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
