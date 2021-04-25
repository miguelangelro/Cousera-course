const {Router}= require('express')

const router = Router()

router.get('/',(req,res,next)=> {
    res.status(200).end('Will send all the dishes to you!');
})

router.post('/',(req, res, next) => {
    res.status(200).end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

router.put('/',(req, res, next) => {
    res.status(404).end('PUT operation not supported on /dishes');
})

router.delete('/',(req, res, next) => {
    res.status(200).end('Deleting all dishes');
})

router.get('/:dishId',(req, res, next) => {
    res.status(200).end('Will send the details of the dish ' + req.params.dishId + ' to you');
} )
router.post('/:dishId',(req, res, next) => {
    res.status(404).end(`POST operation not supported on /dishes/${req.params.dishId}`);
})
router.put('/:dishId',(req, res, next) => {
    res.status(200).end(`Updating the dish: ${req.params.dishId} \n 
    Will update the dish: ${req.body.name} with details: ${req.body.description}`);
})
router.delete('/:dishId',(req, res, next) => {
    res.status(200).end(`Deleting dish ${req.params.dishId}`);
})
module.exports = router