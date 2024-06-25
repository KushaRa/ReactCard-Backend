const Advertisement = require('../models/advertisment');

exports.submitAdvertisement = async (req, res) => {
  const { company_name, title, duration, job_type, location, email, description } = req.body;
  const newAdvertisement = new Advertisement({ company_name, title, duration, job_type, location, email, description });

  try {
    await newAdvertisement.save();
    res.status(201).send('Post submitted successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error submitting post.');
  }
};

exports.displayAdvertisements = async (req, res) => {
  try {
    const ads = await Advertisement.find();
    res.json(ads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAdvertisementById = async (req, res) => {
  const { id } = req.params;
  try {
    const ad = await Advertisement.findById(id);
    if (!ad) {
      return res.status(404).json({ message: 'Advertisement Not Found' });
    }
    res.json(ad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
