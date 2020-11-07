<?php
 // getCityState.php
 // Gets the form value from the "zip" widget, looks up the
 // city and state for that zip code, and prints it for the
 // form
 $cityState = array("52531" => "Albia, Iowa",
                    "52536" => "Blakesburg, Iowa",
                    "52571" => "Moravia, Iowa",
                    "52544" => "Centerville, Iowa",
                    "50150" => "Lovilia, Iowa",
                    "52501" => "Ottumwa, Iowa",
                    "52557" => "Fairfield, Iowa",
                    "52577" => "Oskaloosa, Iowa",
                    "52591" => "Sigourney, Iowa",
                    "52353" => "Washington, Iowa",
                    "63552" => "Macon, Missouri"
                    );
 header("Content-Type: text/plain");
 $zip = $_GET["zip"];
 if (array_key_exists($zip, $cityState)) {
     print $cityState[$zip];
 } else {
     print " , ";
 }
    ?>