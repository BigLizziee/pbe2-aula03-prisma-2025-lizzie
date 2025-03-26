const express = require('express');
const router = express.Router();

const Cliente = require('./controllers/cliente');

router.get('/',(req, res)=>{
    res.json({titulo:'SNOOPY PetSHop API'});
});

router.post('/cliente',Cliente.create);
router.get('/cliente',Cliente.read);
router.patch('/cliente/:id',Cliente.update);
router.delete('/cliente/:id',Cliente.remove);

module.exports = router;