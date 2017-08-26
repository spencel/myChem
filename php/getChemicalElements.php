<?

$dataDir = "../data";

$fileName = "Chemical_Elements.txt";

$filePath = $dataDir . "/" . $fileName;

echo file_get_contents( $filePath );

?>