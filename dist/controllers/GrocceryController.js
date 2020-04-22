"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GrocceryController {
    static home(req, res, next) {
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
                            "id": "groery-stales",
                            "name": "Groery & Stales",
                            "colorCode": "#000000",
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg"
                        },
                        {
                            "id": "personal-care",
                            "name": "Personal Care",
                            "colorCode": "#000000",
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg"
                        },
                        {
                            "id": "daily-use",
                            "name": "Daily Use",
                            "colorCode": "#000000",
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg"
                        }, {
                            "id": "groery-stales2",
                            "name": "Groery & Stales2",
                            "colorCode": "#000000",
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg"
                        },
                        {
                            "id": "groery-stales3",
                            "name": "Groery & Stales3",
                            "colorCode": "#000000",
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg"
                        },
                        {
                            "id": "groery-stales4",
                            "name": "Groery & Stales4",
                            "colorCode": "#000000",
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg"
                        },
                        {
                            "id": "groery-stales5",
                            "name": "Groery & Stales5",
                            "colorCode": "#000000",
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg"
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
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        },
                        {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        },
                        {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        },
                        {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        }, {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        }, {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        }, {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        }, {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        }, {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        }, {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        }, {
                            "id": 2,
                            "name": "Chakki Atta2",
                            "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                            "rate": 4,
                            "price": 400,
                            "finalPrice": 349,
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                            "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                            "availability": 4,
                            "quantity": "10 KG",
                            "itemId": 2
                        }, {
                            "id": 2,
                            "name": "Chakki Atta2",
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
                    "subTitle": "",
                    "widgetType": "CATEGORY_MAPPING_CARD",
                    "datatype": "CATEGORY_MAPPING_TYPE",
                    "widgetValue": [
                        {
                            "categoryId": "groery-stales",
                            "subCategories": [
                                {
                                    "id": "atta-other-flours",
                                    "name": "Atta & Other Flours",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "dry-fruits-nuts",
                                    "name": "Dry Fruits & Nuts",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "edible-oils",
                                    "name": "Edible Oils",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "ghee-vanaspati",
                                    "name": "Ghee & Vanaspati",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "pulses",
                                    "name": "Pulses",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "rice-other-grains",
                                    "name": "Rice & Other Grains",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                }
                            ]
                        },
                        {
                            "categoryId": "personal-care",
                            "subCategories": [
                                {
                                    "id": "bath-body",
                                    "name": "Bath & Body",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "fragrances",
                                    "name": "Fragrances",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "hair-care",
                                    "name": "Hair Care",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "oral-care",
                                    "name": "Oral Care",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "skin-care",
                                    "name": "Skin Care",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                }
                            ]
                        },
                        {
                            "categoryId": "daily-use",
                            "subCategories": [
                                {
                                    "id": "gas-cylinder",
                                    "name": "Gas Cylinder",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                },
                                {
                                    "id": "water-bottle",
                                    "name": "Water Bottle",
                                    "colorCode": "#FFFFFF",
                                    "imageUrl": "qwref"
                                }
                            ]
                        }
                    ],
                    "action": {
                        "screenType": "PAGE_CATEGORY_MAPPING_LIST",
                        "params": "all"
                    }
                },
                {
                    "title": "",
                    "widgetType": "DUMMY_CARD",
                    "datatype": "DOWNLOAD_APP"
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
                "count": 6
            }
        });
    }
    static productDetails(req, res, next) {
        res.json({
            "productDetails": {
                "id": "1",
                "name": "Chakki Atta",
                "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91HaH-jDEvL._SY550_.jpg",
                "summary": "Picked from the finest wheat fields\n100% whole wheat Atta\nGet the super quality taste\nImparts a good aroma and a fluffy look\nAlso helps prevent weight gain",
                "details": "Traditionally ground, the Chakki Atta is a wholesome product that helps you prepare soft and healthy chapatis and parathas. Prepared from the finest quality grains that are plucked from the premium wheat fields. Contains zero addition of maida, thus providing you with 100% whole wheat flour. Has a rich aroma that wafts all over the house from fluffy chapatis. The whole wheat formulation has added fibres and proteins that prevent weight gain.",
                "slug": "Chakki-Atta-123",
                "rate": 4
            },
            "productItems": [
                {
                    "id": "2",
                    "productId": "productId",
                    "quantity": "10 KG",
                    "price": 400,
                    "finalPrice": 349,
                    "availability": 4,
                    "soldOut": false
                },
                {
                    "id": "1",
                    "productId": "productId",
                    "quantity": "5 KG",
                    "price": 200,
                    "finalPrice": 149,
                    "availability": 10,
                    "soldOut": false
                }
            ],
            "photosList": [
                {
                    "id": "1",
                    "entityId": "1",
                    "imageUrl": "asdasdsasafasfasf",
                    "dynamicUrl": "afasfasfsfsdfsdfsd"
                },
                {
                    "id": "2",
                    "entityId": "1",
                    "imageUrl": "ssfsdfsfdsfds",
                    "dynamicUrl": "sdfdsfsdfds"
                },
                {
                    "id": "3",
                    "entityId": "1",
                    "imageUrl": "ssfsdfsfdsfds",
                    "dynamicUrl": "sdfdsfsdfds"
                }
            ],
            "inclusionList": [
                {
                    "id": "1",
                    "inclusion": "include order -1 -1"
                },
                {
                    "id": "2",
                    "inclusion": "include order -1 -2"
                },
                {
                    "id": "3",
                    "inclusion": "include order -1 -3"
                },
                {
                    "id": "4",
                    "inclusion": "include order -1 -4"
                }
            ]
        });
    }
}
exports.GrocceryController = GrocceryController;
