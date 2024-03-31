// 核心逻辑函数
async function locationCore(province) {
    if(province==='guangdong'){
      return {
        "options":[
          {"label":"广州","value":"guangzhou"},
          {"label":"深圳","value":"shenzhen"},
        ]
      }
    }
}
module.exports= {locationCore};