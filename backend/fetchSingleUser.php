<?php

 header("Access-Control-Allow-Origin:  *");
        header("Access-Control-Allow-Headers:  *");
    

$dbconnect=mysqli_connect('localhost','root','','reactphp');

// accesing the url parameters
$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$url_components = parse_url($url);
parse_str($url_components['query'], $params);
$id=$params['id'];


     $fetchquery="SELECT * FROM users WHERE id='" .$id. "'";
        $results=mysqli_query($dbconnect,$fetchquery);
        $users=mysqli_fetch_all($results,MYSQLI_ASSOC);
        echo json_encode($users);