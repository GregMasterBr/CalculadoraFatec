<?php 
$DB_HOST = 'localhost';
$DB_USER = 'root';
$DB_PASS = 'root';
$DB_NAME = 'fatec';
$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if ($mysqli->connect_error) {
    die('Connect Error: ' . $mysqli->connect_error);
}
if (!$mysqli->set_charset('utf8')) {
    //printf("Error loading character set utf8: %s\n", $mysqli->error);
} else {
  //  printf("Current character set: %s\n", $mysqli->character_set_name());
}
?>