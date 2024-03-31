const {initAppCore} = require('../core/initAppCore');

// Vercel Serverless函数接口
module.exports = async (req, res) => {

  const { customer_id } = req.body;
  try {
    const result = await initAppCore(customer_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
