import { Router } from 'express'
const router = Router()
import * as firearmCtrl from "../controllers/firearm.js";

/* GET users listing. */
router.get('/firearms', firearmCtrl.findAll)
router.get('/firearms/:id', firearmCtrl.findOne)
router.post('/firearms', firearmCtrl.create)
router.put('/firearms/:id', firearmCtrl.update)
router.delete('/firearms/:id', firearmCtrl.delete)

export {
  router
}
