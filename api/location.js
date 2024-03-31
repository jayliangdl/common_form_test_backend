const {locationCore} = require('../core/locationCore');

// Vercel Serverless函数接口
module.exports = async (req, res) => {

  const { province } = req.body;
  try {
    const result = await locationCore(province);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
