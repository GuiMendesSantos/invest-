<?php

if(!$_SESSION['nome']) {
	header('Location: login.php');
	exit();
}