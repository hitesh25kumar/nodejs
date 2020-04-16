"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import {CommentController} from '../controllers/CommentController';
// import {CommentValidators} from '../validators/CommentValidators';
// import { GlobalMiddleWare } from "../middlewares/GlobalMiddleware";
const GrocceryController_1 = require("../controllers/GrocceryController");
class GroceryRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        // this.postRoutes();
        // this.patchRoutes();
        // this.deleteRoutes();
    }
    getRoutes() {
        console.log('home...');
        this.router.get('/home', GrocceryController_1.GrocceryController.home);
    }
    static home(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({
                "results": [
                    {
                        "title": "",
                        "subTitle": "",
                        "widgetType": "FULL_BANNER_CARD",
                        "datatype": "BANNER_TYPE",
                        "widgetValue": [
                            {
                                "id": 1,
                                "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                                "type": "HOME"
                            }
                        ],
                        "action": {
                            "screenType": "PAGE_BANNER_LIST",
                            "params": "all"
                        }
                    },
                    {
                        "title": "",
                        "subTitle": "",
                        "widgetType": "CATEGORY_CARD",
                        "datatype": "CATEGORY_TYPE",
                        "widgetValue": [
                            {
                                "id": 1,
                                "name": "Groery & Stales",
                                "colorCode": "#000000",
                                "imageUrl": "sdfa"
                            },
                            {
                                "id": 2,
                                "name": "Personal are",
                                "colorCode": "#000000",
                                "imageUrl": "sdfa"
                            },
                            {
                                "id": 3,
                                "name": "Daily Use",
                                "colorCode": "#000000",
                                "imageUrl": "sdfa"
                            }
                        ],
                        "action": {
                            "screenType": "PAGE_CATEGORY_LIST",
                            "params": "all"
                        }
                    },
                    {
                        "title": "Daily Essentials",
                        "subTitle": "Daily Essentials for you",
                        "widgetType": "PRODUCT_CARD",
                        "datatype": "PRODUCT_TYPE",
                        "widgetValue": [
                            {
                                "id": 1,
                                "name": "Chakki Atta",
                                "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                                "rate": 4,
                                "price": 200,
                                "finalPrice": 149,
                                "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                                "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                                "availability": 10,
                                "quantity": "5 KG",
                                "itemId": 1
                            },
                            {
                                "id": 1,
                                "name": "Chakki Atta",
                                "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                                "rate": 4,
                                "price": 400,
                                "finalPrice": 349,
                                "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                                "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                                "availability": 4,
                                "quantity": "10 KG",
                                "itemId": 2
                            }
                        ],
                        "action": {
                            "screenType": "PAGE_PRODUCT_LIST",
                            "params": "all"
                        }
                    },
                    {
                        "title": "",
                        "widgetType": "DUMMY_CARD",
                        "datatype": "WHY_US_TYPE"
                    },
                    {
                        "title": "",
                        "widgetType": "DUMMY_CARD",
                        "datatype": "CONTACT_US_TYPE"
                    }
                ],
                "pagination": {
                    "start": 0,
                    "count": 5
                }
            });
        });
    }
    catch(e) {
        console.log('next(e);: ');
    }
}
// postRoutes(){ 
//     this.router.post('/add/:id',GlobalMiddleWare.authenticate,CommentValidators.addComment(),GlobalMiddleWare.checkError,CommentController.addComment);
// }
// patchRoutes(){
//     this.router.patch('/edit/:id',GlobalMiddleWare.authenticate,CommentValidators.editComment(),GlobalMiddleWare.checkError,CommentController.editComment);
// }
// deleteRoutes(){
//     this.router.delete('/delete/:id',GlobalMiddleWare.authenticate,CommentValidators.deleteComment(),GlobalMiddleWare.checkError,CommentController.deleteComment);
exports.default = new GroceryRouter().router;
