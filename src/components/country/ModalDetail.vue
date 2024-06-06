<script setup>
import { inject, ref } from "vue";

const state = inject("state");

const columns = ref([
  {
    name: "flags",
    align: "center",
    label: "Flags",
    field: "flags"
  },
  {
    name: "name",
    align: "left",
    label: "Country Name",
    field: "name.official"
  },
  {
    name: "cca2",
    align: "center",
    label: "2 Character Country Code",
    field: "cca2"
  },
  {
    name: "cca3",
    align: "center",
    label: "3 Character Country Code",
    field: "cca3"
  },
  {
    name: "native_ame",
    align: "left",
    label: "Native Country Name",
    field: "name.nativeName"
  },
  {
    name: "alt_spellings",
    align: "left",
    label: "Alternative Country Name",
    field: "alt_spellings"
  },
	{
    name: "area",
    align: "left",
    label: "Area",
    field: "area"
  },
	
  {
    name: "idd",
    align: "left",
    label: "Country Calling Codes",
    field: "idd"
  },
	{
    name: "borders",
    align: "left",
    label: "Borders",
    field: "borders"
  },
	{
    name: "capital",
    align: "left",
    label: "Capital",
    field: "capital"
  },
	{
    name: "capital_info",
    align: "left",
    label: "CapitalInfo",
    field: "capital_info"
  },
	{
    name: "car",
    align: "left",
    label: "Car",
    field: "car"
  },
	{
    name: "ccn3",
    align: "left",
    label: "Ccn3",
    field: "ccn3"
  },
	{
    name: "cioc",
    align: "left",
    label: "Cioc",
    field: "cioc"
  },
	{
    name: "coat_of_arms",
    align: "left",
    label: "CoatOfArms",
    field: "coat_of_arms"
  },
	{
    name: "continents",
    align: "left",
    label: "Continents",
    field: "continents"
  },
	{
    name: "currencies",
    align: "left",
    label: "Currencies",
    field: "currencies"
  },
	{
    name: "demonyms",
    align: "left",
    label: "Demonyms",
    field: "demonyms"
  },
	{
    name: "fifa",
    align: "left",
    label: "Fifa",
    field: "fifa"
  },
	{
    name: "flag",
    align: "left",
    label: "Flag",
    field: "flag"
  },
	{
    name: "gini",
    align: "left",
    label: "Gini",
    field: "gini"
  },
	{
    name: "independent",
    align: "left",
    label: "Independent",
    field: "independent"
  },
	{
    name: "landlocked",
    align: "left",
    label: "Landlocked",
    field: "landlocked"
  },
	{
    name: "languages",
    align: "left",
    label: "Languages",
    field: "languages"
  },
	{
    name: "lat_lng",
    align: "left",
    label: "Latlng",
    field: "lat_lng"
  },
	{
    name: "maps",
    align: "left",
    label: "Maps",
    field: "maps"
  },
	{
    name: "population",
    align: "left",
    label: "Population",
    field: "population"
  },
	{
    name: "region",
    align: "left",
    label: "Region",
    field: "region"
  },
	{
    name: "start_of_week",
    align: "left",
    label: "StartOfWeek",
    field: "start_of_week"
  },
	{
    name: "status",
    align: "left",
    label: "Status",
    field: "status"
  },
	{
    name: "subregion",
    align: "left",
    label: "Subregion",
    field: "subregion"
  },
	{
    name: "timezones",
    align: "left",
    label: "Timezones",
    field: "timezones"
  },
	{
    name: "tld",
    align: "left",
    label: "Tld",
    field: "tld"
  },
	{
    name: "translations",
    align: "left",
    label: "Translations",
    field: "translations"
  },
	{
    name: "unMember",
    align: "left",
    label: "UnMember",
    field: "unMember"
  }
]);
</script>

<template>
  <div>
    <q-dialog v-model="state.showModalDetail">
      <q-card style="width: 1200px; max-width: 80vw">
        <q-card-section
          class="row items-center text-white q-py-sm bg-primary"
        >
          <div class="text-subtitle1">Country Detail</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-table
						class="sticky-header-table"
						table-header-class="bg-secondary text-white"
						flat
						bordered
						:rows="[{...state.form}]"
						:columns="columns"
						row-key="name"
						color="amber"
						:loading="state.loading"
						:rows-per-page-options="[0]"
						separator="cell"
					>
						<template #loading>
							<q-inner-loading showing color="primary" style="z-index: 10" />
						</template>

						<template v-slot:body-cell-flags="props">
							<q-td :props="props" width="70">
								<q-img
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
								<div class="custom-width">
									{{ props.row.altSpellings }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-idd="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.idd }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-borders="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.borders }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-native_ame="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.name.nativeName }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-capital="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.capital }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-car="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.car }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-capital_info="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.capitalInfo }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-coat_of_arms="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.coatOfArms }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-continents="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.continents }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-currencies="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.currencies }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-demonyms="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.demonyms }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-gini="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.gini }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-languages="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.languages }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-maps="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.maps }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-start_of_week="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.startOfWeek }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-timezones="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.timezones }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-tld="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.tld }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-translations="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.translations }}
								</div>
							</q-td>
						</template>

						<template v-slot:body-cell-lat_lng="props">
							<q-td :props="props" class="custom-no-wrap">
								<div class="custom-width">
									{{ props.row.latlng }}
								</div>
							</q-td>
						</template>
						

						<template #no-data="{}">
							<div class="text-center text-blue-3 q-pa-md">
								<q-icon name="token" size="xl" style="font-size: 80px"></q-icon>
								<div class="text-body1 q-my-sm">មិនមានទិន្នន័យទេ !!!</div>
							</div>
						</template>
					</q-table>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>