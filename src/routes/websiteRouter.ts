import { Router } from 'express'
import { check } from 'express-validator'
import * as multerUpload from '../util/multerUpload'
import { ExcelController } from '../controllers/ExcelController'

const upload = multerUpload.uploadImage()
const router = Router()
const excelController = new ExcelController()

router.get('/api/excel/export', excelController.OnExport)

export const websiteRouter = router