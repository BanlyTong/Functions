const models = {
    order: {
        "shipper_id": 0,
        "address": {
            "loading": {
                "province": "",
                "district": "",
                "address": "",
                "latlng": ""
            },
            "delivery": {
                "province": "",
                "district": "",
                "address": "",
                "latlng": ""
            },
            "route": {
                "distance": 0.0,
                "unit_distance": "km",
                "road": ["", ""]
            },
        },
        "merchandise": {
            "is_dedicate": true,
            "dedicated_info": {
                "type_of_vehicle": "",
                "vehicle_walls": ""
            },
            "typology_of_goods": "",
            "dangerous_good": "",
            "adr_code": ""
        },
        "time_interval": {
            "delivery": {
                "date_from": "",
                "date_to": "",
                "time_from": "",
                "time_to": ""
            },
            "loading": {
                "date_from": "",
                "date_to": "",
                "time_from": "",
                "time_to": ""
            }
        },
        "contact": {
            "loading": {
                "company_type": "company",
                "company_address": "",
                "contact_name": "",
                "contact_phone": "",
                "order_reference": "",
                "comment": ""
            },
            "delivery": {
                "company_type": "company",
                "company_address": "",
                "contact_name": "",
                "contact_phone": "",
                "order_reference": "",
                "comment": ""
            }
        },
        "options": {
            "tail_pallet_loading": 0,
            "tail_pallet_delivery": 0,
            "constran_loading": 1,
            "constran_delivery": 1,
            "handling_time_pickup": 1,
            "handling_time_delivery": 1,
            "internal_reference": "",
            "promotion_code": ""
        },
        "price_shipper": 0,
        "date_created": ""
    },

    "shipment": {
        "order_id": 0,
        "carrier_id": 0,
        "driver_id": 0,
        "schedule": {
            "date_loading": "",
            "date_delivery": ""
        },
        "tracking": {
            "latlng": "",
            "is_pickup": true,
            "is_delivery": true,
            "is_sign": true,
        },
        "date_created": "",
        "price_shipper": 0.0,
        "price_carrier": 0.0
    },

    "payment": {
        "shipment_id": 0,
        "shipper_id": 0,
        "carrier_id": 0,
        "amount": 0.0,
        "date_create": "",
        "date_due": "",
        "date_paid": ""
    },

    "package": {
        "shipment_id": "",
        "order_id": "",
        "type_of_goods": "",
        "width": 0,
        "length": 0,
        "height": 0,
        "unit_measure": "m", //d
        "unit_weight": "kg", //d
        "qty": 0,
        "max_height": 0,
        "total_weight": 0
    },

    contact: {
        "shipper_id": 0,
        "company_type": "company",
        "company_address": "",
        "contact_name": "",
        "contact_phone": ""
    },

    address: {
        "shipper_id": 0,
        "province": "",
        "district": "",
        "address": "",
        "latlng": "lat,lng"
    }
}
const carrier = {
        "_id": "",
        "first_name": "",
        "last_name": "",
        "username": "",
        "email": "",
        "phone_number": "",
        "address": "",
        "carrier_role": "",
        "user_status": "",
        "standing_location": "",
        "reference_number": "",
        "updated_at": "",
        "created_date": "",
        "company_id": "",
        "user_password": ""
    };

const shipper_profile = {
    "shipper_id": "",
    "basic": {
        "company_name": "",
        "legal_company_id": "",
        "country": "",
        "phone_number": "",
        "language": "kh",   
    },
    "billing": {
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone": "",
        "provicer_preference": "",
        "address": ""
    },  
    "admin_contact": [
        {
            "admin_contact_id": 1,
            "first_name": "person 1.1", 
            "last_name": "person 1.2", 
            "position": "admin", 
            "phone": "099922992", 
            "email": "chanthou_choub@hotmail.com"
        }
    ],
    "payment_method": [
        {
            "payment_method_id": 1,
            "card_number": "xxxx-xxxx-xxxx-xxxx",
            "card_name": "Choub Chanthou",
            "expire_date": "12/19",
            "security_code": "773",
            "type": "credit_card"
        }
    ]
}
function setObjectType(object) {
    for (const key in object) {
        if (typeof object[key] === 'object') setObjectType(object[key]);
        else if (key.includes("_id")) object[key] = "ObjectId";
        else if (object[key] === "") object[key] = "String";
        else if (typeof object[key] === 'string' && object[key].length > 0) {
            const value = object[key];
            object[key] = { type: "String", default: value };
        } else if (typeof object[key] === 'number') object[key] = "Number";
        else if (typeof object[key] === 'boolean') object[key] = "Boolean";
        else continue;
    }
}

setObjectType(shipper_profile);

console.log(JSON.stringify(shipper_profile));

