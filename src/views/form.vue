<template>
  <a-form>
    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="订单号"
      validate-status="success"
    >
      <a-input
        id="packageID"
        placeholder="201909050001"
      />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="取件时间"
      validate-status="success"
    >
      <a-input
        id="packageID"
        placeholder="2019-09-05 18:09:01"
      />
    </a-form-item>

    <a-button type="primary" @click="submit">提交</a-button>
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
      }
    }
  }
}
</script>
