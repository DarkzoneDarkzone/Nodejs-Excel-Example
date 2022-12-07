import * as Config from '../util/config'
import 'moment/locale/th'
import moment from 'moment'
import bcrypt from 'bcrypt'
import fs from 'fs'
const sharp = require('sharp')
import path from 'path'
import { validationResult } from 'express-validator'
import * as jwt from 'jsonwebtoken'

import ExcelJS from 'exceljs'

export class ExcelController {
    OnExport = async(req: any, res: any) => {
        const testData = [
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
            {
                gender: 'men',
                date: '1122554466',
                shopName: 'shop1',
                cusName: 'cus1',
                orderLevel: 'premium',
                orderItem: 'productName',
                amount: 1,
                price: 1200,
                note: ''
            },
        ]
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('My Sheet');
        worksheet.columns = [
            {header: 'Gender', key: 'gender', width: 10},
            {header: 'Date', key: 'date', width: 32},
            {header: 'ShopName', key: 'shopName', width: 15,},
            {header: 'CusName', key: 'cusName', width: 15,},
            {header: 'OrderLevel', key: 'orderLevel', width: 15,},
            {header: 'OrderItem', key: 'orderItem', width: 15,},
            {header: 'Amount', key: 'amount', width: 15,},
            {header: 'Price', key: 'price', width: 15,},
            {header: 'Note', key: 'note', width: 15,},
        ];
        worksheet.addRows(testData)
        var public_path = path.join(__dirname, '../../dist/public/')
        var newfolder = public_path+`files/${moment().format('YYYY')}/${moment().format('MM')}/`
        if(!fs.existsSync(`${newfolder}`)){
            fs.mkdirSync(newfolder, { recursive: true })
        }
        await workbook.xlsx.writeFile(newfolder+'export.xlsx');
        
        return res.download(newfolder+'export.xlsx', 'export1.xlsx', (err: any) => {
            if (err) {
                return res.status(500).json({
                    status: false,
                    message: "Could not download the file. " + err,
                });
            }
        });
    }
}