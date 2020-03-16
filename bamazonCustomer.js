var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "sql3.freesqldatabase.com",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "sql3327345",

  // Your password
  password: "wCIfd9Mym9",
  database: "sql3327345"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  createProduct();
});

//inserting default products
function createProduct() {
  console.log("Inserting default products...\n");
  var query = "Select * FROM sql3327345.products";
  connection.query(
    query,
    function (err, res) {
      if (err) throw err;
      var displayTable = new Table({
        head: ["Item_ID", "Product Name", "Category", "Price", "Quantity"],
        colWidths: [12, 25, 25, 12, 15]
      });
      for (let i = 0; i < res.length; i++) {
        displayTable.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
      }

      console.log("product inserted!\n");
      console.log(displayTable.toString());

      promtForProduct();
    });

  // console.log(query.sql);
}

// function which prompts the user for what action they should take
function promtForProduct() {

  //conect to the databse
  connection.query("SELECT * FROM sql3327345.products", function (err, res) {

    //promt user which item he/she wants to purchase
    inquirer
      .prompt([{
          name: "id",
          type: "list",
          message: "What is the product you would like to purchase?",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].item_id);
            }
            return choiceArray;
          }
        },
        {
          name: "unitNum",
          type: "input",
          message: "How many units would you like to purchase?",
          fitler: Number
        }
      ])
      .then(function (answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (res[i].item_id === answer.id && answer.unitNum <= res[i].stock_quantity) {
            chosenItem = res[i];

            console.log("Your order is in stock!");

            var unitQuantity = answer.unitNum;
            var ID = answer.id;
            update(ID, unitQuantity);

          }
        }
      });


  })

}

function update(userItemID, quantityRequested) {
  connection.query('Select * FROM sql3327345.products WHERE item_id =' + userItemID, function (err, res) {
    if (err) {
      console.log(err)
    }
    if (quantityRequested <= res[0].stock_quantity) {
      var userCost = res[0].price * quantityRequested;
      console.log("Your total cost for " + res[0].price + " is $" + userCost + " . Thank you!");
      connection.query("UPDATE sql3327345.products SET stock_quantity = stock_quantity - " + quantityRequested + " WHERE item_id= " + userItemID);

    

    } else {
      console.log("Insufficient quantity. We will notify you of next shipment.");
    }


  });
};  
