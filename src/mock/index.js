import Mock from 'mockjs'
import articles from './articles'
import carousels from './carousels'

Mock.mock('/articles', 'get', () => {
  return {
    code: 200,
    result: articles
  }
}).mock('/article/detail', 'get', () => {
  return {
    code: 200,
    result: articles.articles[0]
  }
  }).mock('/carousels', 'get', () => {
  return {
    code: 200,
    result: carousels
  }
})
