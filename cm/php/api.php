<?php

require 'vendor/autoload.php';

use \LeanCloud\Client;
use \LeanCloud\Query;
// 参数依次为 AppId, AppKey, MasterKey
Client::initialize("giKOyAWMyyrghJypXRTXGbXM-MdYXbMMI", "QG9ofQicgMsdCoiTsUF55gW9", "ztEd8q03DKUMVfyikTLisRnv");
Client::useRegion("US");
Client::setDebug(true);

$query = new Query("Share");
$query->equalTo("objectId", '123');
$todos = $query->find();
if ($share){
  echo 0;
  exit;
}
// try{
//   $share  = $query->get($_GET["id"]);
//   if ($share){
//     echo 0;
//     exit;
//   }
// }
// catch(Exception $ex){
//   echo 1;
// }

?>
