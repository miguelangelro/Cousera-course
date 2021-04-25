const {Router}= require('express')

const router = Router()

router.get('/',(req,res,next)=> {
    res.status(200).end('Will send all leaders to you!');
})

router.post('/',(req, res, next) => {
    res.status(200).end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})

router.put('/',(req, res, next) => {
    res.status(404).end('PUT operation not supported on /leaders');
})

router.delete('/',(req, res, next) => {
    res.status(200).end('Deleting all leaders');
})

router.get('/:leaderId',(req, res, next) => {
    res.status(200).end('Will send the details of the leader ' + req.params.leaderId + ' to you');
} )
router.post('/:leaderId',(req, res, next) => {
    res.status(404).end(`POST operation not supported on /leaders/${req.params.leaderId}`);
})
router.put('/:leaderId',(req, res, next) => {
    res.status(200).end(`Updating leader: ${req.params.leaderId} \n 
    Will update leader: ${req.body.name} with details: ${req.body.description}`);
})
router.delete('/:leaderId',(req, res, next) => {
    res.status(200).end(`Deleting leader ${req.params.leaderId}`);
})
module.exports = router