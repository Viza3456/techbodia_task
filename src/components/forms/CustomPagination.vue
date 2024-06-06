<template>
  <div class="flex justify-end">
    <div class="q-mt-xs">
      <q-pagination
        v-model="pagination.currentPage"
        :max="pagination.pagesNumber"
        :max-pages="4"
        @click="clickPagination"
        round
        outline
        direction-links
        boundary-links
        icon-first="skip_previous"
        icon-last="skip_next"
        icon-prev="chevron_left"
        icon-next="chevron_right"
      />
    </div>
    <div class="q-ml-md">
      <q-select
        v-model="pagination.pageSize"
        @update:modelValue="onChanged"
        borderless
        dense
        options-dense
        emit-value
        map-options
        :options="perPageOptions"
      />
    </div>
    <div class="q-ml-md" style="margin-top: 10px">
      ចាប់ពី {{ startItem }} - {{ endItem }} (សរុប​​ {{ pagination.total }})
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue';

const props = defineProps({
  search: Object,
  perPageOptions: {
    type: Array,
    default: () => [5, 10, 20, 50, 150, 300, 'All'],
  },
});

const emit = defineEmits(['onChange']);
const pagination = ref({ ...props.search });
const search = ref(props.search);

const startItem = computed(() => {
  return pagination.value.pageIndex * getPageSize() + 1;
});

const endItem = computed(() => {
  const currentPageEnd = (pagination.value.currentPage - 1) * getPageSize() + getPageSize();
  return currentPageEnd > pagination.value.total ? pagination.value.total : currentPageEnd;
});

function getPageSize() {
  return pagination.value.pageSize === 'All' ? pagination.value.total : pagination.value.pageSize;
}

function conditionOption() {
  pagination.value.pageSize = pagination.value.pageSize ?? 25;
  pagination.value.pageIndex = pagination.value.pageIndex ?? 0;
  pagination.value.currentPage = 1;
}

function calculatePage() {
  const pageNum = pagination.value.total / getPageSize();
  pagination.value.pagesNumber = Math.ceil(pageNum);
  pagination.value.pageIndex = pagination.value.currentPage - 1;
  search.value.pageSize = getPageSize();
  search.value.pageIndex = pagination.value.pageIndex;
}

function clickPagination() {
  calculatePage();
  emit('onChange');
}

function onChanged() {
  pagination.value.currentPage = 1;
  calculatePage();
  emit('onChange');
}

onMounted(() => {
  conditionOption();
  calculatePage();
});

watch(
  () => props.search.total,
  () => {
    pagination.value.total = props.search.total;
    pagination.value.currentPage = 1;
    calculatePage();
  },
  { deep: true, immediate:true }
);
</script>

