const {Router}= require('express')

const router = Router()

router.get('/',(req,res,next)=> {
    res.status(200).end('Will send all promotions to you!');
})

router.post('/',(req, res, next) => {
    res.status(200).end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

router.put('/',(req, res, next) => {
    res.status(404).end('PUT operation not supported on /promotions');
})

router.delete('/',(req, res, next) => {
    res.status(200).end('Deleting all promotions');
})

router.get('/:promoId',(req, res, next) => {
    res.status(200).end('Will send the details of the promotion ' + req.params.promoId + ' to you');
} )
router.post('/:promoId',(req, res, next) => {
    res.status(404).end(`POST operation not supported on /promotions/${req.params.promoId}`);
})
router.put('/:promoId',(req, res, next) => {
    res.status(200).end(`Updating promotion: ${req.params.promoId} \n 
    Will update promtions: ${req.body.name} with details: ${req.body.description}`);
})
router.delete('/:promoId',(req, res, next) => {
    res.status(200).end(`Deleting promotion ${req.params.promoId}`);
})
module.exports = router