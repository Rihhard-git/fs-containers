const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config');

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {



  const data = await redis.get("added_todos")
  
  console.log(data)


  res.send({added_todos: Number(await redis.get("added_todos"))})
})

module.exports = router;
