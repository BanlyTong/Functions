 const common = {
     "GET": {
         "/getAll": {
             "admin": "getDocuments",
             "user": "getOwnDocuments"
         }
     },
     "PUT": {
         "/updateById": {
             "user:admin": "updateDocumentById",
             "user": "updateOwnDocumentById"
         }
     }
 };
 const examples = {
     "POST": {
         "/create": {
             "admin": "createDocument",
             "user": "createOwnDocument"
         }
     },
     "PUT": {
         "/updateById/examples": {
             "user:admin": "updateDocumentById",
             "user": "updateOwnDocumentById"
         }
     }
 }


 const empty = undefined;


 const result = Object.assign({}, common, examples);

 console.log(JSON.stringify(result));


 {
     "GET": {
         "/getAll": { "admin": "getDocuments", "user": "getOwnDocuments" }
     },
     "PUT": { 
     	"/updateById/examples": { 
     		"user:admin": "updateDocumentById", 
     		"user": "updateOwnDocumentById" 
     	} 
     },
     "POST": { "/create": { "admin": "createDocument", "user": "createOwnDocument" } }
 }