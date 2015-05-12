<?php 
$DB_HOST = '127.0.0.1';
$DB_USER = 'root';
$DB_PASS = 'root';
//$DB_NAME = 'u680867391_srt';
//$DB_NAME = 'u680867391_srt';//JQUANT
$DB_NAME = 'angularcode_grid';//ADITIVA
$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if (!$mysqli->set_charset('utf8')) {
    //printf("Error loading character set utf8: %s\n", $mysqli->error);
} else {
  //  printf("Current character set: %s\n", $mysqli->character_set_name());
}
?>
