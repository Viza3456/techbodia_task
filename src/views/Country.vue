<script setup>
import { ref, onMounted } from "vue";
import { countryStore } from "stores/country";
import { Input, Pagination } from "@/components/forms";

const { search } = countryStore();
const stateCountry = countryStore();
const columns = ref([
  {
    name: "flags",
    align: "center",
    label: "Flags",
    field: "flags",
    sortable: false,
  },
  {
    name: "name",
    align: "left",
    label: "Country Name",
    field: "name.official",
    sortable: true,
  },
  {
    name: "cca2",
    align: "center",
    label: "2 Character Country Code",
    field: "cca2",
    sortable: false,
  },
  {
    name: "cca3",
    align: "center",
    label: "3 Character Country Code",
    field: "cca3",
    sortable: false,
  },
  {
    name: "native_ame",
    align: "left",
    label: "Native Country Name",
    field: "name.nativeName",
    sortable: false,
  },
  {
    name: "alt_spellings",
    align: "left",
    label: "Alternative Country Name",
    field: "alt_spellings",
    sortable: false,
  },
  {
    name: "idd",
    align: "left",
    label: "Country Calling Codes",
    field: "idd",
    sortable: false,
  },
]);

onMounted(() => {
  stateCountry.fetchCountries();
});
</script>

<template>
  <div class="q-ma-lg">
    <q-card class="full-width">
      <q-card-section class="flex justify-between q-pb-sm">
        <div class="text-h6">Countries</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-py-none">
        <div class="row">
          <Input
            v-model="search.text"
            @keyup.enter="(search.pageIndex = 0), stateCountry.fetchCountries()"
            label="ស្វែងរក"
            placeholder="Enter country name..."
            class="q-pr-sm col-sm-4 col-md-3 col-lg-2 col-xs-12"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <q-table
          class="sticky-header-table"
          table-header-class="bg-primary text-white"
          flat
          bordered
          :rows="stateCountry.countries || []"
          :columns="columns"
          row-key="name"
          color="amber"
          :loading="stateCountry.loading"
          :rows-per-page-options="[0]"
          separator="cell"
        >
          <template #loading>
            <q-inner-loading showing color="primary" style="z-index: 10" />
          </template>

          <template v-slot:body-cell-flags="props">
            <q-td :props="props" width="70">
              <img
                :src="props.row.flags.png"
                alt="Flag"
                style="width: 32px; height: 32px"
              />
            </q-td>
          </template>

          <template v-slot:body-cell-name="props">
            <q-td :props="props">
              {{ props.row.name.official }}
            </q-td>
          </template>

          <template v-slot:body-cell-alt_spellings="props">
            <q-td :props="props" class="custom-no-wrap">
              {{ props.row.altSpellings }}
            </q-td>
          </template>

          <template v-slot:body-cell-idd="props">
            <q-td :props="props" class="custom-no-wrap">
              {{ props.row.idd }}
            </q-td>
          </template>

          <template v-slot:body-cell-native_ame="props">
            <q-td :props="props" class="custom-no-wrap">
              {{ props.row.name.nativeName }}
            </q-td>
          </template>

          <template #no-data="{}">
            <div class="text-center text-blue-3 q-pa-md">
              <q-icon name="token" size="xl" style="font-size: 80px"></q-icon>
              <div class="text-body1 q-my-sm">មិនមានទិន្នន័យទេ !!!</div>
            </div>
          </template>
          
          <template v-slot:bottom>
            <Pagination :search="search" @onChange="stateCountry.fetchCountries()" />
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.custom-no-wrap {
  white-space: normal;
}
</style>