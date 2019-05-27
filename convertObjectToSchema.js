const models = {
    "order": {
        "shipper_id": "ObjectId",
        "address": {
            "loading": {
                "province": "String",
                "district": "String",
                "address": "String",
                "latlng": "String"
            },
            "delivery": {
                "province": "String",
                "district": "String",
                "address": "String",
                "latlng": "String"
            },
            "route": {
                "distance": "Number",
                "unit_distance": { "type": "String", "default": "km" },
                "road": ["String"]
            }
        },
        "merchandise": {
            "is_dedicate": "Boolean",
            "dedicated_info": {
                "type_of_vehicle": "String",
                "vehicle_walls": "String"
            },
            "typology_of_goods": "String",
            "dangerous_good": "String",
            "adr_code": "String"
        },
        "time_interval": {
            "delivery": {
                "date_from": "String",
                "date_to": "String",
                "time_from": "String",
                "time_to": "String"
            },
            "loading": {
                "date_from": "String",
                "date_to": "String",
                "time_from": "String",
                "time_to": "String"
            }
        },
        "contact": {
            "loading": {
                "company_type": { "type": "String", "default": "company" },
                "company_address": "String",
                "contact_name": "String",
                "contact_phone": "String",
                "order_reference": "String",
                "comment": "String"
            },
            "delivery": {
                "company_type": { "type": "String", "default": "company" },
                "company_address": "String",
                "contact_name": "String",
                "contact_phone": "String",
                "order_reference": "String",
                "comment": "String"
            }
        },
        "options": {
            "tail_pallet_loading": "Number",
            "tail_pallet_delivery": "Number",
            "constran_loading": "Number",
            "constran_delivery": "Number",
            "handling_time_pickup": "Number",
            "handling_time_delivery": "Number",
            "internal_reference": "String",
            "promotion_code": "String"
        },
        "price_shipper": "Number",
        "date_created": "String"
    },
    "shipment": {
        "order_id": "ObjectId",
        "carrier_id": "ObjectId",
        "driver_id": "ObjectId",
        "schedule": { "date_loading": "String", "date_delivery": "String" },
        "tracking": {
            "latlng": "String",
            "is_pickup": "Boolean",
            "is_delivery": "Boolean",
            "is_sign": "Boolean"
        },
        "date_created": "String",
        "price_shipper": "Number",
        "price_carrier": "Number"
    },
    "payment": {
        "shipment_id": "ObjectId",
        "shipper_id": "ObjectId",
        "carrier_id": "ObjectId",
        "amount": "Number",
        "date_create": "String",
        "date_due": "String",
        "date_paid": "String"
    },
    "package": {
        "shipment_id": "ObjectId",
        "order_id": "ObjectId",
        "type_of_goods": "String",
        "width": "Number",
        "length": "Number",
        "height": "Number",
        "unit_measure": { "type": "String", "default": "m" },
        "unit_weight": { "type": "String", "default": "kg" },
        "qty": "Number",
        "max_height": "Number",
        "total_weight": "Number"
    },
    "contact": {
        "shipper_id": "ObjectId",
        "company_type": { "type": "String", "default": "company" },
        "company_address": "String",
        "contact_name": "String",
        "contact_phone": "String"
    },
    "address": {
        "shipper_id": "ObjectId",
        "province": "String",
        "district": "String",
        "address": "String",
        "latlng": { "type": "String", "default": "lat,lng" }
    },
    "carrier": {
        "_id": "ObjectId",
        "first_name": "String",
        "last_name": "String",
        "username": "String",
        "email": "String",
        "phone_number": "String",
        "address": "String",
        "carrier_role": "String",
        "user_status": "String",
        "standing_location": "String",
        "reference_number": "String",
        "updated_at": "String",
        "created_date": "String",
        "company_id": "ObjectId",
        "user_password": "String"
    }
}

const schemas = [];

const model = {
     profile_shipper : {
        "shipper_id": "ObjectId",
        "basic": {
            "company_name": "String",
            "legal_company_id": "ObjectId",
            "country": "String",
            "phone_number": "String",
            "language": { "type": "String", "default": "kh" }
        },
        "billing": {
            "first_name": "String",
            "last_name": "String",
            "email": "String",
            "phone": "String",
            "provicer_preference": "String",
            "address": "String"
        },
        "admin_contact": [
            {
                "admin_contact_id": "ObjectId",
                "first_name": { "type": "String", "default": "person 1.1" },
                "last_name": { "type": "String", "default": "person 1.2" },
                "position": { "type": "String", "default": "admin" },
                "phone": { "type": "String", "default": "099922992" },
                "email": {
                    "type": "String",
                    "default": "chanthou_choub@hotmail.com"
                }
            }
        ],
        "payment_method": [
            {
                "payment_method_id": "ObjectId",
                "card_number": {
                    "type": "String",
                    "default": "xxxx-xxxx-xxxx-xxxx"
                },
                "card_name": { "type": "String", "default": "Choub Chanthou" },
                "expire_date": { "type": "String", "default": "12/19" },
                "security_code": { "type": "String", "default": "773" },
                "type": { "type": "String", "default": "credit_card" }
            }
        ]
    }
}

for (const prop in model) {
    const result = {
        "modelName": prop,
        "documentName": prop,
        "schema": model[prop],
        "unique": [],
        "permissions": []
    }
    schemas.push(result);
}

console.log(JSON.stringify(schemas));


/*
{
    "modelName": "staff",
    "documentName": "staff",
    "schema": {
        "name": {
            "type": "String",
            "required": true
        },
        "description": {
            "type": "String"
        }
    },
    "unique": [
        "name",
        "description"
    ],
    "permissions": [
        {
            "role": "admin",
            "action": "create:any",
            "attributes": "*"
        },
        {
            "role": "admin",
            "action": "read:any",
            "attributes": "*"
        },
        {
            "role": "admin",
            "action": "update:any",
            "attributes": "*"
        },
        {
            "role": "admin",
            "action": "delete:any",
            "attributes": "*"
        }
    ]
}

*/