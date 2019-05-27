const problem = {
        "address": {
            "loading": {
                "province": "1",
                "district": "2",
                "address": "Prasat Balangk, Kampong Thom, Cambodia.",
                "latlng": "13.1010371,104.36497469999995"
            },
            "delivery": {
                "province": "1",
                "district": "4",
                "address": "Kampong Svay, Kampong Thom, Cambodia.",
                "latlng": "12.7925404,104.83577049999997"
            },
            "route": {
                "unit_distance": "km",
                "road": [
                    "",
                    ""
                ],
                "distance": 69
            }
        },
        "merchandise": {
            "dedicated_info": {
                "type_of_vehicle": "",
                "vehicle_walls": ""
            },
            "is_dedicate": false,
            "typology_of_goods": "1",
            "nature_of_goods": "Box 08",
            "dangerous_good": "class1",
            "adr_code": "adr-01"
        },
        "time_interval": {
            "delivery": {
                "date_from": "2019-02-05",
                "date_to": "2019-02-05",
                "time_from": "01:56",
                "time_to": "02:56"
            },
            "loading": {
                "date_from": "2019-02-04",
                "date_to": "2019-02-04",
                "time_from": "01:56",
                "time_to": "02:56"
            }
        },
        "contact": {
            "loading": {
                "company_type": "company",
                "is_limit_3_5": false,
                "company_address": "Prasat Balangk, Kampong Thom, Cambodia.",
                "contact_name": "Chanthou",
                "contact_phone": "(015) 904 255",
                "order_reference": "order-001",
                "comment": "Need to help"
            },
            "delivery": {
                "company_type": "company",
                "is_limit_3_5": false,
                "company_address": "Kampong Svay, Kampong Thom, Cambodia. ",
                "contact_name": "Chanthorn",
                "contact_phone": "(098) 373 737",
                "order_reference": "order-002",
                "comment": "Need to help"
            }
        },
        "options": {
            "tail_pallet_loading": 1,
            "tail_pallet_delivery": 0,
            "straps": 0,
            "brackets": 1,
            "constran_loading": 1,
            "constran_delivery": 1,
            "handling_time_pickup": 1,
            "handling_time_delivery": 1,
            "internal_reference": "",
            "promotion_code": ""
        },
        "_id": "5c5817a538d0954048dbe4d8",
        "process_status": "progress",
        "price_shipper": 69,
        "date_created": "",
        "__v": 3,
        "packages": [
            {
                "unit_measure": "m",
                "unit_weight": "kg",
                "_id": "5c5817a538d0954048dbe4da",
                "type_of_goods": "sp",
                "width": 3,
                "length": 2,
                "height": 1,
                "qty": 10,
                "max_height": 50,
                "total_weight": 50
            },
            {
                "unit_measure": "m",
                "unit_weight": "kg",
                "_id": "5c5817a538d0954048dbe4d9",
                "type_of_goods": "sp",
                "width": 4,
                "length": 3,
                "height": 1,
                "qty": 10,
                "max_height": 50,
                "total_weight": 50
            }
        ]
};

const keys = Object.keys(problem);

function destructObject() {

}

for(k in keys) {
	if(typeof problem[k] === Object && !Array.isArray(problem)) {

	}
}

function getProperty( propertyName, object ) {
  var parts = propertyName.split( "." ),
    length = parts.length,
    i,
    property = object || this;

  for ( i = 0; i < length; i++ ) {
    property = property[parts[i]];
  }

  return property;
}


console.log(getProperty("loading.province", problem.address));
