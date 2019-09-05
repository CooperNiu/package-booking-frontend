<template>
  <a-form>
    <p>预约取件</p>
    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="运单号"
      validate-status="success"
    >
      <a-input
        id="packageID"
        placeholder="201909050001"
        v-model="packageID"
      />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="收件人"
      validate-status="success"
    >
      <a-input
        id="name"
        placeholder="林凌灵"
        v-model="name"
      />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="电话"
      validate-status="success"
    >
      <a-input
        id="tel"
        placeholder="13112341234"
        v-model="tel"
      />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="重量"
      validate-status="success"
    >
      <a-input
        id="weight"
        placeholder="3KG"
        v-model="weight"
      />
    </a-form-item>

    <a-button type="primary" @click="submit('tel')">提交</a-button>
    <a-button type="danger">取消</a-button>

  </a-form>
</template>
<script>
export default {
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      },
      tel: ''
    }
  },
  methods:{
    submit: function(values) {
      console.log(values)
      this.$store.dispatch('submit', values).then(response => {
        console.log(values)
      })
    }
  }
}
</script>
