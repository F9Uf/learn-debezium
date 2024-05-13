db = db.getSiblingDB('company');

db.employees.insertMany([
    {
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@my-company.com",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442"
    },
    {
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@my-company.com",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
    },
    {
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@my-company.com",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
    }
])
