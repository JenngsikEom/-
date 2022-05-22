var express = require('express');
var router = express.Router();

router.post("/write", async function (req, res) {
    await Board.create(req.body)
    res.json({
        result: "ok"
    })
})
var Pager = require("node-jyh-pager")
var pager = new Pager({
    itemPerPage: 5

})

router.post("/list", async function (req, res) {
    // var boardList = [
    //    { id: "1", title: "제목1", writer: "엄정식" }
    //]

    var page = req.body.page
    if (!page) {
        page = 1
    }
    var itemPerPage = 5
    var offset = pager.getSkip(page)
    var boardList = await Board.findAll({
        limit: 5,
        offset: offset,
        orders: ["writeTime", "DESC"]
    })
    var count = await Board.count()   //Select count(*) from Boards
    var nav = pager.getBottomNav(page, count)
    var pageCount = nav.totalpage
    res.json({
        boardList: boardList,
        pageCount: pageCount
    })
})

module.exports = router;