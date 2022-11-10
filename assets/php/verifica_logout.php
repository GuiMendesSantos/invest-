<?php

if($_SESSION['nome']) {
	header('Location: home.php');
	exit();
}