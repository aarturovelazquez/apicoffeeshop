class orders {

    constructor(dg) {
        this.dg = dg;        
    }

    insertRecord(jsonData, callBack) {

        var sql = "insert into store_orders (order_firstname, order_lastname, order_email, order_address, order_country, order_city, order_zip, order_products) values (?, ?, ?, ?, ?, ?, ?, ?)"; 

        var params = [];

        params.push(jsonData["order_firstname"]);  
        params.push(jsonData["order_lastname"]); 
        params.push(jsonData["order_email"]); 
        params.push(jsonData["order_address"]); 
        params.push(jsonData["order_country"]); 
        params.push(jsonData["order_city"]); 
        params.push(jsonData["order_zip"]); 
        params.push(jsonData["order_products"]); 

        this.dg.execute(sql, params, callBack);          
    }

    getRecords(resourceId, callBack) {

         var sql = "select id, order_firstname, order_lastname, order_email, order_address, order_country, order_city, order_zip, order_products from store_orders";

         var params = []; 

         if (resourceId != "") {
             sql = sql + " where id = ?";               
             params.push(resourceId);    
         }

         this.dg.query(sql, params, callBack);
    }

    updateRecord(resourceId, jsonData, callBack) {

        var sql = "update store_orders set order_firstname = ?, order_lastname = ?, order_email = ?, order_address = ?, order_country=?, order_city = ?, order_zip = ?, order_products = ?  where id = ?";

        var params = [];

        params.push(jsonData["order_firstname"]);  
        params.push(jsonData["order_lastname"]); 
        params.push(jsonData["order_email"]); 
        params.push(jsonData["order_address"]); 
        params.push(jsonData["order_country"]); 
        params.push(jsonData["order_zip"]); 
        params.push(jsonData["order_city"]); 
        params.push(jsonData["order_products"]); 
        params.push(resourceId); 

        this.dg.execute(sql, params, callBack);
    }

    deleteRecord(resourceId, callBack) {

        var sql = "delete from store_orders where id = ?";

        var params = [];

        params.push(resourceId);   

        this.dg.execute(sql, params, callBack);       
    }
}

module.exports = orders;
