<?php 
header('Access-Control-Allow-Origin:*', "Refresh: 2");
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,PUT,DELET');
header('Access-Control-Allow-Headers:Content-Type, X-Auth-Token, Origin,Authorization');
    
    // Server
    $server="localhost";
	$user="id21050393_scandiweb";
	$password="10032018_BakI";
	$db="id21050393_scandiweb";

  if(isset($_POST["id"])){$deleteId=$_POST["id"];}else{$deleteId = "";}


    
    $id="";
	// Server activity
	$connection;                                             // server connection
	$sql;                                                    // server request
    // Result data
    $result;
    echo ($deleteId);
    //________________________SERVER CONNECTION___________________________________
    $connection=new mysqli($server,$user,$password,$db);        // Server connection
    if (!$connection) {die("Connection failed: " . mysqli_connect_error());}
    $sql="DELETE FROM `ProductList` WHERE `ProductList`.`id`=('$deleteId')";
    $result=mysqli_query($connection,$sql);

    // die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($connection));
}
 
  $connection->close();
?>