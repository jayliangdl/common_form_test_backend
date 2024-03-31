// 核心逻辑函数
async function initAppCore(customer_id) {
  if(customer_id==='1234'){
    return {
        "provinceSelect":"guangdong",
        "citySelect":"guangzhou"
    }
  }else{
    return {}
  }
}


module.exports= {initAppCore};