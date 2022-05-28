 <?php 
 header("Access-Control-Allow-Origin:  *");
        header("Access-Control-Allow-Headers:  *");



$dbconnect=mysqli_connect('localhost','root','','reactphp');

 //all users
     $fetchquery="SELECT * FROM users";
        $results=mysqli_query($dbconnect,$fetchquery);
        $users=mysqli_fetch_all($results,MYSQLI_ASSOC);
        echo json_encode($users);

