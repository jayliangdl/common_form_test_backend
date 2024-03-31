// 核心逻辑函数
async function submitCore(params) {
  console.log(`submit:${JSON.stringify(params)}`);
  return {
      "response": 1,
      "success":true
  }
}
module.exports= {submitCore};