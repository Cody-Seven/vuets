import Mock from 'mockjs'
import articles from 'articles'

// articles
Mock.mock('./articles', 'get', () => {
  return {
    code: 200,
    result: articles
  }
})