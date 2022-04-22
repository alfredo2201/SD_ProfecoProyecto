<?php
  include('config/conexion.php');

  if(isset($_POST['usuario']) && !empty($_POST['usuario']) && isset($_POST['contrasenia']) && !empty($_POST['contrasenia'])){
     $usuario = $_POST['usuario'];
     $contrasenia = $_POST['contrasenia'];
      $query = "SELECT * FROM usuarios WHERE (correo ='$usuario' && contrasenia = '$contrasenia')";
      $result = mysqli_query($conn,$query);

      if(mysqli_num_rows($result)>0){
          echo json_encode(array('success'=> 1));
      }else{
        echo json_encode(array('success'=> 0));
      }
  }

?>