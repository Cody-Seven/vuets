import Mock from 'mockjs'
import articles from './articles'
import carousels from './carousels'
import { getParams } from '../utils'

Mock.mock('/articles', 'get', () => {
  return {
    code: 200,
    result: articles
  }
}).mock(RegExp(/\/article\/detail\?id=[0-9]/), 'get', (options) => {
  const id = getParams(options.url).id
  let article = {}
  for (let i = 0; i < articles.articles.length; i++) {
    if (articles.articles[i].type_id == id) {
      article = articles.articles[i]
      break
    }
  }
  return {
    code: 200,
    result: article
  }
}).mock('/carousels', 'get', () => {
  return {
    code: 200,
    result: carousels
  }
})
