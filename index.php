<?php
session_start()
?>
<!DOCTYPE html>
<html>
<head>
	<title>Serbian Meme</title>
	<link rel="stylesheet" href="css/style.css"/>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/spectrum.css"/>
	<link rel="stylesheet" href="css/fontselect.css"/>
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script src="js/spectrum.js"></script>
	<script src="js/fontselector.js"></script>
	<script src="js/script.js"></script>
</head>
<body>
	<div id="container">
		<div id="header">Odabir slike</div>
		<div data-text="Odabir slike" data-back="false" class="window active" id="picker">
			<div id="navbar">
				<div id="title">Izaberi sliku za obradu</div>
				<div id="searchbox">
			            <input id="search_btn" type="button" value="" />
			            <input id="search_field" type="search" placeholder="Search..." />
			    </div>
			</div>
			<div id="listbox">
				<ul>
				</ul>
			</div>
		</div>
		<div data-text="Dodaj tekst" data-back="true" class="window" id="step2">
			<canvas id="canvas" width="200" height="200">Koristite web browser iz praistorije. Molimo vas instalirajte noviju verziju</canvas>
			<div id="inputform">
				<label for="fontSelect">Font:</label>
				<div name="fontSelect" id="fontSelect" class="fontSelect">
				    <div class="arrow-down"></div>
				</div>
				<br>
				<label for="strokecolor">Boje teksta:</label>
				<input type='text' name="strokecolor" id="fillcolor" class="basic"/>
				<input type='text' name="fillcolor" id="strokecolor" class="basic"/>
				<br>
				<label for="fontsize0">Velicine teksta:</label>
				<select name="font0">
					<option value="50">50</option>
					<option value="55">55</option>
					<option value="60">60</option>
					<option value="65">65</option>
					<option value="70">70</option>
					<option value="75">75</option>
					<option value="80" selected>80</option>
					<option value="85">85</option>
					<option value="90">90</option>
					<option value="95">95</option>
					<option value="100">100</option>
					<option value="105">105</option>
					<option value="110">110</option>
					<option value="115">115</option>
					<option value="120">120</option>
				</select>
				<select name="font1">
					<option value="50">50</option>
					<option value="55">55</option>
					<option value="60">60</option>
					<option value="65">65</option>
					<option value="70">70</option>
					<option value="75">75</option>
					<option value="80" selected>80</option>
					<option value="85">85</option>
					<option value="90">90</option>
					<option value="95">95</option>
					<option value="100">100</option>
					<option value="105">105</option>
					<option value="110">110</option>
					<option value="115">115</option>
					<option value="120">120</option>
				</select>
				<br>
				<label for="stroke0">Velicina okvira:</label>
				<select name="stroke0">
					<option value="1">0</option>
					<option value="2">2</option>
					<option value="4">4</option>
					<option value="6">6</option>
					<option value="8">8</option>
					<option value="10">10</option>
					<option value="12" selected>12</option>
					<option value="14">14</option>
					<option value="16">16</option>
					<option value="18">18</option>
					<option value="20">20</option>
					<option value="22">22</option>
					<option value="24">24</option>
					<option value="26">26</option>
					<option value="30">30</option>
					<option value="34">34</option>
					<option value="38">38</option>
					<option value="46">46</option>
					<option value="72">72</option>
				</select>
				<select name="stroke1">
					<option value="1">0</option>
					<option value="2">2</option>
					<option value="4">4</option>
					<option value="6">6</option>
					<option value="8">8</option>
					<option value="10">10</option>
					<option value="12" selected>12</option>
					<option value="14">14</option>
					<option value="16">16</option>
					<option value="18">18</option>
					<option value="20">20</option>
					<option value="22">22</option>
					<option value="24">24</option>
					<option value="26">26</option>
					<option value="30">30</option>
					<option value="34">34</option>
					<option value="38">38</option>
					<option value="46">46</option>
					<option value="72">72</option>
				</select>
				<br>
				<label for="first">Prva linija:</label>
				<input type="text" name="first" placeholder="Prva linija"/>
				<br>
				<label for="second">Druga linija:</label>
				<input type="text" name="second" placeholder="Druga linija"/>

				<div style="text-align:right"><button id="export">KRAJ</button></div>
			</div>
		</div>
		<div data-text="Sačuvaj" data-back="true" class="window" id="step3">
			<div class="multiple-borders">
				<img id="canvasimg" alt="canvas"></img>
			</div>
		</div>
	</div>
</body>
</html>