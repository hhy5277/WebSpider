/**
 * 统一导出路由接口
 */

module.exports = {
  userRouter: require('./user'),
  crawlRouter: require('./crawl'),
  proxyRouter: require('./proxy'),
  statisticsRouter: require('./statistics')
}
