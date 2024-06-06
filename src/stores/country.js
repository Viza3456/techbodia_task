import { defineStore } from 'pinia';
import api from '@/axios-config';

export const countryStore = defineStore({
  id: 'country',
  state: () => ({
    countries: [],
    loading: false,
    error: null,
    search: {
      text: "",
      total: 0,
      pageIndex: 0,
      pageSize: 25
    },
    showModalDetail: false,
    form:{}
  }),
  actions: {
    fetchCountries() {
      this.loading = true;
      const { pageIndex, pageSize, text } = this.search;
      api.get('/all')
        .then(response => {
          if(response.status==200){
            const countries = response.data;
            
            let filteredCountries = countries;
            if (text.trim() !== "") {
              filteredCountries = countries.filter(country =>
                typeof country.name === 'object' && country.name.official.toLowerCase().includes(text.toLowerCase())
              );
            }
  
            const startIndex = pageIndex * pageSize; // Calculate start index
            const endIndex = Math.min(startIndex + pageSize, filteredCountries.length); // Calculate end index, considering array length
            this.countries = filteredCountries.slice(startIndex, endIndex); // Get countries for current page
            this.search.total = filteredCountries.length; // Update total count
          }
        })
        .catch(error => {
          console.error('Error fetching countries:', error);
        })
        .finally(() => {
          this.loading = false;
        }
      );
    },
    detailData(row){
      this.showModalDetail = true;
      this.form = {...row};
    }
  },
});
