<!-- 文章详情 -->
<template lang='pug'>
  #Articles
    .title {{article.title}}
      .time {{article.time}}
    .content {{article.type_name}}
</template>

<script lang='ts'>
import { Vue, Component, Provide } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Articles extends Vue {
  private article: Object = {}

  created() {
    this.getArticle()
  }
  getArticle(): Object {
    let params: object = {
      id: Number(this.$route.query.id)
    }
    return axios.get('/article/detail', { params }).then(res => {
      this.article = res.data.result
    })
  }
}
</script>
<style scoped lang='scss'>
#Articles {
  font-size: 18px;
  padding: 100px 0;
  .title {
    font-size: 30px;
    font-weight: 700;
    .time {
      font-size: 18px;
      font-weight: 400;
      margin-left: 300px;
    }
  }
  .content {
    margin: 50px;
    text-align: left;
    text-indent: 40px;
    word-wrap: break-word;
  }
}
</style>
