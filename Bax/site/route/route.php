<?php
class Router{
    private $home = "views/home.php"; 
    private $contact =  "views/contact.php"; 
    private $courses =  "views/courses.php"; 
    private $notFound =  "views/notfound.php";
    private $routes = [];

    function __constructor(){
        $this->init();
    }

    private function init(){
        $this->routes = [
            "/" => $this->home,
            "/courses" => $this->courses,
            "/contact" => $this->contact
        ];

        $uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : "/";
        echo $uri;
        
        if($uri == "/index.php"){
            echo '<script> window.location = "/" </script>';
        }

        $this->directionPage($uri);
    }

    private function directionPage($uri){
        $found = false;
        foreach($this->routes as $path => $page){
            if($path == $uri){
                $direction = $this->routes[$uri];
                require $direction;
                $found = true;
            }
        }
      
        if(!$found){
                require $this->notFound;
        }
    }

}
?>