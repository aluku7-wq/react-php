<?php

        header("Access-Control-Allow-Origin:  *");
        header("Access-Control-Allow-Headers:  *");
    

$dbconnect=mysqli_connect('localhost','root','','reactphp');
if(isset($_POST['name'])){
    
    
    $files=$_FILES['picture'];
    $name=mysqli_real_escape_string($dbconnect,$_POST['name']);
    $age=mysqli_real_escape_string($dbconnect,$_POST['age']);

    // image properties by accessing contents of $file array
    $filename=$files['name'];
    $templocaation=$files['tmp_name'];
    $uploaderrors=$files['error'];

    // getting allowed extentions
    $splitname=explode('.',$filename);
    $file_extension=strtolower(end($splitname));
    $allowed_extension=['png','jpg','jpeg'];
    
    if(in_array($file_extension,$allowed_extension)){

        if($uploaderrors===0)
        {
            $new_file_name=uniqid().'.'.$file_extension;
            $file_destination='../public/images/'.$new_file_name;
                if(move_uploaded_file($templocaation,$file_destination))
                {
                    $insertquery="INSERT INTO users(name,age,image) VALUES('$name','$age','$new_file_name')";
                    if(mysqli_query($dbconnect,$insertquery)){
                        echo' new user added';
                    }else{
                        echo 'could not create new user';
                    }
                   
                }else{
                        echo 'could not upload';
                    }
            }else{
                 echo 'there was file error';
                }
        }else {
           echo  'file extension not allowed';
        }

    }

    
