var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.query)
  res.json(req.query)
});
router.get("/api/board/list", function (req, res) {
  var boardList = [
    { id: "1", title: "제목", writer: "엄정식" }
  ]
  res.json(boardList)
})

module.exports = router;
