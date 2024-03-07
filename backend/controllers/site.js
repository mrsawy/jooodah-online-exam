const SiteData = require(`./../models/SiteData`);

module.exports = {
  getSiteData: async (req, res) => {
    const siteData = await SiteData.find();
    res.json(siteData);
  },
  setSiteData: async (req, res) => {
    let { value, identifier } = req?.body;
    const foundedData = await SiteData.findOne({ identifier });
    if (foundedData) {
      foundedData.value = value;
      foundedData.save();
      const siteData = await SiteData.find();
      return res.json(siteData);
    } else {
      let createdData = await SiteData.create({ value, identifier });
      const siteData = await SiteData.find();
      return res.json(siteData);
    }
  },
  // getOneResult: async (req, res) => {},
};
