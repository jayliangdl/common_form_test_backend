const {submitCore} = require('../core/submitCore');

// Vercel Serverless函数接口
module.exports = async (req, res) => {
  const params = req.body;
  try {
    const result = await submitCore(params);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
