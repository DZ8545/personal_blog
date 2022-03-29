module.exports = (app) => {
  const express = require("express");
  const router = express.Router();

  //分类
  const Category = require("../../models/category.js");
  router.post("/categories", async (req, res) => {
    const model = await Category.create(req.body);
    res.send(model);
  });
  router.get("/categories", async (req, res) => {
    const items = await Category.find().limit(10);
    res.send(items);
  });
  router.get("/categories/:id", async (req, res) => {
    const items = await Category.findById(req.params.id);
    res.send(items);
  });
  router.put("/categories/:id", async (req, res) => {
    const items = await Category.findByIdAndUpdate(req.params.id, req.body);
    res.send(items);
  });
  router.delete("/categories/:id", async (req, res) => {
    const items = await Category.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
    });
  });

  //文章
  const Article = require("../../models/article.js");
  router.post("/articles", async (req, res) => {
    const model = await Article.create(req.body);
    res.send(model);
  });
  router.get("/articles", async (req, res) => {
    const items = await Article.find().limit(10);
    res.send(items);
  });
  router.get("/articles/:id", async (req, res) => {
    const items = await Article.findById(req.params.id);
    res.send(items);
  });
  router.put("/articles/:id", async (req, res) => {
    const items = await Article.findByIdAndUpdate(req.params.id, req.body);
    res.send(items);
  });
  //浏览人数加一  req.body
  router.put("/articlesChangeLook/:id", async (req, res) => {
    const items = await Article.updateOne(
      { _id: req.params.id },
      {
        NumberOfVisitors: req.body.NumberOfVisitors,
      }
    );
    res.send(items);
  });
  router.delete("/articles/:id", async (req, res) => {
    const items = await Article.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
    });
  });

  //评论
  const Comment = require("../../models/comment.js");
  router.post("/comments", async (req, res) => {
    if (req.body.parent) {
      req.body.parent = require("mongoose").Types.ObjectId(req.body.parent);
    } else {
      delete req.body.parent;
    }

    const model = await Comment.create(req.body);
    res.send(model);
  });
  router.get("/comments", async (req, res) => {
    const items = await Comment.find().limit(10);
    res.send(items);
  });
  router.get("/comments/:id", async (req, res) => {
    const items = await Comment.aggregate()
      .lookup({
        from: "comment",
        localField: "parent",
        foreignField: "_id",
        as: "list",
      })
      .match({
        article: new require("mongoose").Types.ObjectId(req.params.id),
        parent: undefined,
      });
    // const items = await Comment.find({ article: req.params.id, parent: "" });
    res.send(items);
  });
  //获取子评论
  router.get("/childrenComments/:id", async (req, res) => {
    const items = await Comment.find({ parent: req.params.id });
    res.send(items);
  });
  //获取评论数
  router.get("/commentsNumber/:id", async (req, res) => {
    const items = await Comment.find({ article: req.params.id });
    res.send(items.length);
  });
  router.delete("/comments/:id", async (req, res) => {
    const items = await Comment.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
    });
  });
  router.delete("/commentsAll", async (req, res) => {
    const items = await Comment.deleteMany({});
    res.send({
      success: true,
    });
  });

  app.use("/admin/api", router);

  //上传图片
  const multer = require("multer");
  const upload = multer({ dest: __dirname + "../../upload" });
  app.post("/admin/api", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads+${file.filename}`;
    res.send(file);
  });
};
