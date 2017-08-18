<?

$dataDir = "../data";

$fileName = "Chemical_Element_Names.txt";

$filePath = $dataDir . "/" . $fileName;

echo file_get_contents( $filePath );

?>