const Article = require("./dataSchma");

async function getData(req, res) {
  const data = await Article.find();
  res.json(data);
}

async function updateData(req, res) {
  const { title, author, content, id } = req.body;
  const data = await Article.findById(id).exec();
  data.title = title;
  data.author = author;
  data.content = content;
  const result = await data.save();
  res.status(200).json(result);
}

async function deleteData(req, res) {
  const { id } = req.body;
  const data = await Article.findById(id);
  if (!data) {
    return;
  }
  const result = data.deleteOne();
  res.json(result);
}

async function addNewData(req, res) {
  const { title, author, content } = req.body;
  const data = await Article.create(req.body);
  res.json(data);
}

module.exports = {
  getData,
  updateData,
  deleteData,
  addNewData,
};
