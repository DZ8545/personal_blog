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
    const items = await Category.find();
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
  router.get("/articles/:skip", async (req, res) => {
    const items = await Article.find({
      _id: { $ne: "6246ef7e77f7f26b8e5f7820" },
    })
      .limit(9)
      .skip(req.params.skip)
      .sort({ time: -1 });
    res.send(items);
  });
  //search
  router.get("/articlesSearch", async (req, res) => {
    const items = await Article.find({
      title: { $regex: req.query.name, $options: "i" },
      _id: { $ne: "6246ef7e77f7f26b8e5f7820" },
    })
      .limit(9)
      .skip(req.query.skip)
      .sort({ time: -1 });
    res.send(items);
  });
  router.get("/articlesSearchNumber/:name", async (req, res) => {
    const items = await Article.find({
      title: { $regex: req.params.name, $options: "i" },
    });
    res.send(items.length);
  });
  router.get("/articlesAll", async (req, res) => {
    const items = await Article.find({
      _id: { $ne: "6246ef7e77f7f26b8e5f7820" },
    }).sort({ time: -1 });
    res.send(items);
  });
  //获取阅读数
  router.get("/articlesView", async (req, res) => {
    const items = await Article.aggregate().group({
      _id: null,
      content_sum: {
        $sum: "$NumberOfVisitors",
      },
    });
    res.send(items);
  });
  //获取文章总数
  router.get("/articlesNumber/:id", async (req, res) => {
    let items = null;
    switch (req.params.id) {
      case "1":
        items = await Article.find();
        break;
      case "2":
        items = await Article.find({
          kind: "6242b4f497ca3f92fa752038",
        });
        break;
      case "3":
        items = await Article.find({
          kind: "6242b4f997ca3f92fa75203a",
        });
        break;
      case "4":
        items = await Article.find({
          kind: "6242b4eb97ca3f92fa752036",
        });
        break;
      case "5":
        items = await Article.find({
          kind: "624305226f1943d5f6f9dfc9",
        });
        break;
      default:
        break;
    }
    res.send(items.length);
  });
  //获取知识总结分类的文章
  router.get("/articlesOfKnowledgeSummary/:skip", async (req, res) => {
    //6242b4eb97ca3f92fa752036
    const items = await Article.find({
      kind: "6242b4eb97ca3f92fa752036",
    })
      .limit(9)
      .skip(req.params.skip)
      .sort({ time: -1 });
    res.send(items);
  });
  //获取学习笔记分类的文章
  router.get("/articlesOfStudyNote/:skip", async (req, res) => {
    //624305226f1943d5f6f9dfc9
    const items = await Article.find({
      kind: "624305226f1943d5f6f9dfc9",
    })
      .limit(9)
      .skip(req.params.skip)
      .sort({ time: -1 });
    res.send(items);
  });
  //获取代码分享分类的文章
  router.get("/articlesOfCodeSharing/:skip", async (req, res) => {
    //6242b4f497ca3f92fa752038
    const items = await Article.find({
      kind: "6242b4f497ca3f92fa752038",
    })
      .limit(9)
      .skip(req.params.skip)
      .sort({ time: -1 });
    res.send(items);
  });
  //获取随笔分类的文章
  router.get("/articlesOfInformalEssay/:skip", async (req, res) => {
    //6242b4f997ca3f92fa75203a
    const items = await Article.find({
      kind: "6242b4f997ca3f92fa75203a",
    })
      .limit(9)
      .skip(req.params.skip)
      .sort({ time: -1 });
    res.send(items);
  });
  router.get("/article/:id", async (req, res) => {
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
      })
      .sort({ _id: -1 });
    // const items = await Comment.find({ article: req.params.id, parent: "" });
    res.send(items);
  });
  //获取子评论
  router.get("/childrenComments/:id", async (req, res) => {
    const items = await Comment.find({ parent: req.params.id }).sort({
      _id: -1,
    });
    res.send(items);
  });
  //获取评论数
  router.get("/commentsNumber/:id", async (req, res) => {
    let items = null;
    if (req.params.id === "1") {
      items = await Comment.find();
    } else {
      items = await Comment.find({ article: req.params.id });
    }
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

  //友链
  const Friend = require("../../models/friend.js");
  router.post("/friends", async (req, res) => {
    const model = await Friend.create(req.body);
    res.send(model);
  });
  router.get("/friends", async (req, res) => {
    const items = await Friend.find();
    res.send(items);
  });
  router.get("/friends/:id", async (req, res) => {
    const items = await Friend.findById(req.params.id);
    res.send(items);
  });
  router.put("/friends/:id", async (req, res) => {
    const items = await Friend.findByIdAndUpdate(req.params.id, req.body);
    res.send(items);
  });
  router.delete("/friends/:id", async (req, res) => {
    const items = await Friend.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
    });
  });


  //小游戏排行榜
  const Rank = require("../../models/rank.js");
  router.post("/ranks", async (req, res) => {
    const model = await Rank.create(req.body);
    res.send(model);
  });
  router.get("/ranks/:id", async (req, res) => {
    const items = await Rank.find({ gameName: req.params.id })
      .sort({
        score: -1,
      })
      .limit(5);
    res.send(items);
  });
  router.delete("/ranks/:id", async (req, res) => {
    const items = await Rank.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
    });
  });

  const Users = require("../../models/users.js");
  router.post("/users", async (req, res) => {
    const info = req.body
    if(info.signal==='暗号'&&info.identityNumber==='5472'){
      await Users.create(req.body);
      res.send('success');
    }else{
      res.send('fail')
    }
  });
  router.get("/users/:info", async (req, res) => {
    const info = req.params.info.split(',')
    const items = [...await Users.find({ account: info[0] })]
    for(const item of items){
      if(item.password===info[1]){
        const {setToken} = require('../../utils/useJwt')
        return res.send({
          code: 200,
          data: {
            message: '登录成功！',
            token: setToken(info[0]),
            flag: true,
            account:item.account,
            password:item.password
          }
        })
      }
    }
    return res.send('fail')
  });
  router.get("/userId/:id", async (req, res) => {
    const items = await Users.findById(req.params.id);
    res.send(items)
  });
  router.get("/allUsers", async (req, res) => {
    const items = await Users.find();
    res.send(items);
  });
  router.put("/users/:id", async (req, res) => {
    const items = await Users.findByIdAndUpdate(req.params.id, req.body);
    res.send(items);
  });
  router.delete("/users/:id", async (req, res) => {
    await Users.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
    });
  });

  app.use("/admin/api", router);
  //上传图片
  const multer = require("multer");
  const upload = multer({ dest: __dirname + "../../../uploads" });
  app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`;
    // file.url = `http://www.dz8545.xyz/uploads/${file.filename}`;
    res.send(file);
  });
};
