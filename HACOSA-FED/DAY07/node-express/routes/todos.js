var express = require('express');
var router = express.Router();

const todos = [{
    title: 'list1'
}, {
    title: 'list2'
}, {
    title: 'list3'
},  {
    title: 'list4'
}];

router.get('/', function(req, res, next) {
    res.render('todos', { todos: todos });
});

module.exports = router;
