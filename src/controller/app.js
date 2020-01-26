const axios = require('axios')

exports.getData = async(ctx, next) => {
  const baseUrl = 'https://view.inews.qq.com/g2/getOnsInfo?name=wuwei_ww_area_counts'
  const res = await axios.get(baseUrl);

  ctx.body = {
    status: 1,
    list: JSON.parse(res.data.data),
  }
  await next()
}


