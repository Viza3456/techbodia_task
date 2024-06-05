<template>
  <div :class="wapperClass" class="q-mt-xs q-mb-xs">
    <label
      >{{ label
      }}<span class="text-red q-pl-xs" v-if="rules?.required">*</span></label
    >
    <q-input
      class="q-mt-xs"
      :label-color="labelColor"
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :rules="validation()"
      :outlined="true"
      dense
      lazy-rules
      :mask="mask"
      color="indigo-9"
      :no-error-icon="false"
      :hide-bottom-space="hideBottomSpace"
      :stack-label="stackLabel"
      :filled="filled"
      :input-class="inputClass"
      :readonly="readonly"
      :reverse-fill-mask="reverseFillMask"
      :unmasked-value="unmaskedValue"
      @blur="blurFn"
    >
      <template v-if="$slots.append" v-slot:append></template>
      <template v-if="$slots.prepend" v-slot:prepend></template>
    </q-input>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  modelValue: null,
  label: {
    type: String,
    required: true,
  },
  placeholder:{
    type: String
  },
  labelColor: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
  rules: {
    type: Object,
    default: undefined,
  },
  mask: {
    type: String,
    default: "",
  },
  wapperClass: {
    type: String,
    default: null,
  },
  inputClass: {},
  outlined: {},
  stackLabel: {},
  filled: {},
  hideBottomSpace: {
    type: Boolean,
    default: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  reverseFillMask: {
    type: Boolean,
    default: true,
  },
  unmaskedValue: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["update:modelValue", "blur"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
function blurFn() {
  emit("blur");
}
function validation() {
  var v = props.rules;
  let roles = [];
  if (v == undefined) return roles;
  if (v.required) {
    roles.push(
      (val) =>
        (val !== null && val !== "" && val != undefined) ||
        `${props.label} តម្រូវឲ្យបំពេញ !`
    );
  }
  if (v.minLength) {
    roles.push((val) => {
      return (
        (val && val.toString().length >= v.minLength) ||
        `${props.label}* គួរតែមានយ៉ាងតិចណាស់ ${v.minLength} ខ្ទង់ !`
      );
    });
  }
  if (v.maxLength) {
    roles.push((val) => {
      return (
        (val && val.toString().length <= v.maxLength) ||
        `${props.label}* គួរតែមានយ៉ាងច្រើនណាស់ ${v.maxLength} ខ្ទង់ !`
      );
    });
  }
  if (v.maxValue) {
    roles.push((val) => {
      return (
        (Number(val) <= Number(v.maxValue)) ||
        `${props.label}* គួរតែមានយ៉ាងច្រើនណាស់ ${v.maxValue} !`
      );
    });
  }
  if (v.minValue) {
    roles.push((val) => {
      return (
        (Number(val) >= Number(v.minValue)) ||
        `${props.label}* គួរតែមានយ៉ាងតិចណាស់ ${v.minValue} !`
      );
    });
  }
  if (v.sameAs) {
    roles.push((val) => {
      return (
        (val && val == v.sameAs) ||
        `${props.label}* បញ្ចូលមិនត្រឹមត្រូវ !`
      );
    });
  }
  if (v.email) {
    roles.push((val) => {
      return validateEmail(val) || `${props.label} ត្រូវតែជាអ៊ីមែល !`;
    });
  }

  return roles;
}
function validateEmail(email) {
  return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
}
</script>
<style>
.q-field__label {
  overflow: visible !important;
}
</style>
