<?php 
    // * позволяет всем источникам делать запросы на сервер. Refresh 5 -обновляет php каждые 5сек
    header('Access-Control-Allow-Origin:*', "Refresh: 3");
    // * (Имя хоста, Пользователь в phpAdmin, пароль в phpAdmin, имя БД)
    $server = "localhost";
    $user = "root";
    $pass = "";
    $db = "scandiWeb";
    $id = '';
    $method=$_SERVER['REQUEST_METHOD'];
    $SKU=$_POST['sku'];
    $Name=$_POST['name'];
    $Price=$_POST['price'];
    $Size=$_POST['size'];
    $Weight=$_POST['weight'];
    $Length=$_POST['length'];
    $Height=$_POST['height'];
    $Width=$_POST['width'];


    $conn=new mysqli($server,$user,$pass,$db);

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