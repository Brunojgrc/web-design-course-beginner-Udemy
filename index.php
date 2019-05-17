<?php echo 'Hello Word!';

$a = 2;
$b = 3;
$c = 4;

if($a % 2==1){
	echo '<br>Numero impar';
}
else{
	echo '<br>Numero par';
}

echo "<br>while: ";
$i=0;
while ($i<10){
	echo $i;
	$i++;
}

echo "<br>do..while: ";

$i=0;
do{
	echo $i;
	$i++;
} while($i<10);

echo "<br>for: ";
for ($i = 0; $i < 10; $i++){
	echo $i;
}
echo "<br>foreach: ";
$i=[0,1,2,3,4,5,6,7,8,9];
foreach ($i as $j) { //para cada elemento de "i" imprima "j"
	echo $j;
}

$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
    print_r($arr);
}