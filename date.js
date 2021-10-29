

exports.getDate = function() {
let today = new Date();
let option = {weekday:"long" , day:"numeric" , month:"long"};
return today.toLocaleDateString("en-US",option);

}



exports.getDay = function (){ /* could use module.export instead of just export both are same btw */
let today = new Date();
let option = {weekday:"long" };
return today.toLocaleDateString("en-US",option);


}
