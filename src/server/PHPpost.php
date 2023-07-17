<?php 
    // * позволяет всем источникам делать запросы на сервер. Refresh 5 -обновляет php каждые 5сек
    header('Access-Control-Allow-Origin:*', "Refresh: 5");
    // * (Имя хоста, Пользователь в phpAdmin, пароль в phpAdmin, имя БД)
/* 
    $server = "localhost";
    $user = "root";
    $pass = "";
    $db = "scandiWeb";
    $id = '';
    $method=$_SERVER['REQUEST_METHOD'];
    
    $conn=new mysqli($server,$user,$pass,$db);
    $_POST = file_get_contents('php://input');
    $chPostData=$_POST;
    echo($chPostData);
    /* 
    echo(json_encode($chPostData));

    $conn->close();*/
    <?php 
header('Access-Control-Allow-Origin:*', "Refresh: 5");
    //________________________ПОДКЛЮЧЕНИЕ КЛАССОВ___________________________________
    require_once 'classes/DataBase.php';
    require_once 'classes/GET.php';
    //________________________________ПЕРЕМЕННЫЕ____________________________________
    //General 
    $SKU='2K';
    $Name='Vasia';
    $Price=1900;
    $Size=20;
    $Weight=1900;
    $Length=10;
    $Width=20;
    $Height=19;

    // Server
    $server="localhost";
	$user="root";
	$password="";
	$db="scandiWeb";
		
	// Server activity
	$connection;                                             // server connection
	$sql;                                                    // server request
    $method;                                                 // request method. Post/Get

    // Result data
    $result;
    //________________________SERVER CONNECTION___________________________________
    $connection=new mysqli($server,$user,$password,$db);        // Server connection
    $array = [45, 46];

    switch($method){
        case 'GET':
            $sql=("SELECT * FROM `ProductList`");               //Result of server request
            break;
        case 'POST':
            if($array>0){
                $ids = implode("','", $array);
                $sql=("DELETE FROM ProductList WHERE id IN ('".$ids."')");
            }else{
                $SKU=$_POST['SKU'];
                $Name=$_POST['Name'];
                $Price=$_POST['Price'];
                $Size=$_POST['Size'];
                $Weight=$_POST['Weight'];
                $XYZ=$_POST['XYZ'];
                $sql="insert into ProductList (`SKU`,`Name`,`Price`,`Size`,`Weight`,`Length`,`Height`,`Width`)
                values ('$SKU','$Name','$Price','$Size','$Weight','$Length','$Height','$Width')";
                break;

            }

    }



    //______________________________GET REQUEST___________________________________
 /*                         // request */
  /*   $result=mysqli_query($connection,$sql);     */                 // Result of server request
  
    //______________________________POST REQUEST___________________________________
/*   $sql="INSERT INTO `ProductList` (`SKU`,`Name`,`Price`,`Size`,`Weight`,`Length`,`Height`,`Width`)
     VALUES ('Alexssss','Alexssss','2','2','3','4','4','4')";   */          
  
    //______________________________DELETE REQUEST_________________________________
 
   
  if($connection->query($sql)===TRUE){
    echo "Record added";
    echo count($array);
  }else{echo "<br>Запись не добавлена</br>";}

        
  $connection->close();
    //______________________ОБРАБОТКА ДАННЫХ_____________________________________
/*     if(!$id) echo '[';
        for($i=0;$i<mysqli_num_rows($result);$i++){
            echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
        };
 */

?>
    $data=file_get_contents('./omar.txt');
    $postData=json_encode(file_get_contents('php://input'),true);
    var_dump($postData);


       ?>