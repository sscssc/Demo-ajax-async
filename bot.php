<?php
	if ($_POST["msg"] == "hello")
		write("hello world!");
	else if ($_POST["msg"] == "about"){
		sleep(5);
		write("Ajax demo for Prep'ETNA by carlos_j; uzunov_d; fares_k; casagr_a; saddok_m");
	}else if ($_POST["msg"] == "download"){
		send_file("demo.zip");
		write("Ajax demo send");
	}else
		write("Sorry, I don't understand, what do you mean?");

function write($msg){
	print(($_POST["text"] == "" ? "" : $_POST["text"]."\n")."Server: ".$msg);
}

function send_file($file){
	 header("Pragma: public");
	 header("Expires: 0");
	 header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
	 header("Cache-Control: private",false);  
	 header("Content-Type: application/zip");
	 
	 header("Content-Disposition: attachment; filename=\"".basename($file)."\";" );
	 header("Content-Transfer-Encoding: binary");
	 header("Content-Length: ".filesize($file));
	 readfile("$file");
}