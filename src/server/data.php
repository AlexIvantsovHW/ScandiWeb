<?php 
    // * позволяет всем источникам делать запросы на сервер. Refresh 5 -обновляет php каждые 5сек
    header('Access-Control-Allow-Origin:*', "Refresh: 3");
    // * (Имя хоста, Пользователь в phpAdmin, пароль в phpAdmin, имя БД)
    $server="localhost";
	$user="id21050393_scandiweb";
	$password="10032018_BakI";
	$db="id21050393_scandiweb";
    $id = '';
    $method=$_SERVER['REQUEST_METHOD'];
    if(isset($_POST["sku"])){$SKU=$_POST['sku'];}else{$SKU= "";}
    if(isset($_POST["name"])){$Name=$_POST['name'];}else{$Name= "";}
    if(isset($_POST["price"])){$Price=$_POST['price'];}else{$Price= "";}
    if(isset($_POST["size"])){$Size=$_POST['size'];}else{$Size= "";}
    if(isset($_POST["weight"])){$Weight=$_POST['weight'];}else{$Weight= "";}
    if(isset($_POST["length"])){$Length=$_POST['length'];}else{$Length= "";}
    if(isset($_POST["height"])){$Height=$_POST['height'];}else{$Height= "";}
    if(isset($_POST["width"])){$Width=$_POST['width'];}else{$Width= "";}

    $conn=new mysqli($server,$user,$password,$db);

    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }else{
        switch($method){
            case 'GET':
                $sql="select * from ProductList";   
                break;
            case 'POST':
                $conn->query("INSERT INTO `ProductList`(`SKU`,`Name`,`Price`,`Size`,`Weight`,`Length`,`Height`,`Width`) VALUES('$SKU','$Name','$Price','$Size','$Weight','$Length','$Height','$Width')");
                break;
            };
            $sql="select * from ProductList";             
        $result=mysqli_query($conn,$sql);

        if(!$result){
            http_response_code(404);
            die(mysqli_error($conn));
        }
        if($method=='GET'){
            if(!$id) echo '[';
            for($i=0;$i<mysqli_num_rows($result);$i++){
                echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
                
            }
            if(!$id) echo ']';
        }elseif($method =='POST'){
            echo json_encode($result);
            
        }
            else{echo mysqli_affected_rows($conn);};
        }
       
    $conn->close();
       ?>