function editProfile(){
	var birthday = document.getElementById("atributbirthday");
	var fullname = document.getElementById("atributfullname");
	var tag = document.getElementById("atributtag");
	var button = document.getElementById("editProfilebutton");
	
	var ava = document.getElementById("atributavatar");
	var password = document.getElementById("atributpassword");
	var confirmpassword = document.getElementById("atributconfirmpassword");


	birthday.innerHTML="<select name='Tanggal'>				<option value='1' selected=''>1</option>				<option value='2'> 2</option>				<option value='3'> 3</option>				<option value='4'> 4</option>				<option value='5'> 5</option>				<option value='6'> 6</option>				<option value='7'> 7</option>				<option value='8'> 8</option>				<option value='9'> 9</option>				<option value='10' >10</option>				<option value='11' >11</option>				<option value='12' >12</option>				<option value='13' >13</option>				<option value='14' >14</option>				<option value='15' >15</option>				<option value='16' >16</option>				<option value='17' >17</option>				<option value='18' >18</option>				<option value='19' >19</option>				<option value='20' >20</option>				<option value='21' >21</option>				<option value='22' >22</option>				<option value='23' >23</option>				<option value='24' >24</option>				<option value='25' >25</option>				<option value='26' >26</option>				<option value='27' >27</option>				<option value='28' >28</option>				<option value='29' >29</option>				<option value='30' >30</option><option value='31' >31</option></select>			<select name='Bulan'>				<option value='Januari' selected=''>Januari</option>				<option value='Februari' >Februari</option>				<option value='Maret'>Maret</option>				<option value='April' >April</option>				<option value='Mei' >Mei</option>				<option value='Juni' >Juni</option>				<option value='Juli' >Juli</option>				<option value='Agustus' >Agustus</option>				<option value='September' >September</option>				<option value='Oktober' >Oktober</option>				<option value='November' >November</option>				<option value='Desember' >Desember</option>			</select>			<select name='Tahun'>				<option value='1989' selected=''>1989</option>				<option value='1990' >1990</option>				<option value='1991' >1991</option>				<option value='1992' >1992</option>				<option value='1993' >1993</option>				<option value='1994' >1994</option>				<option value='1995' >1995</option>				<option value='1996' >1996</option>				<option value='1997' >1997</option>				<option value='1998' >1998</option>				<option value='1999' >1999</option>				<option value='2000' >2000</option>				<option value='2001' >2001</option>				<option value='2002' >2002</option>				<option value='2003' >2003</option>				<option value='2004' >2004</option>				<option value='2005' >2005</option>				<option value='2006' >2006</option>				<option value='2007' >2007</option>				<option value='2008' >2008</option>			</select>";
	fullname.innerHTML="<input type='text'>";
	tag.innerHTML="<input type='tag'>";
	button.value="Save Changes";
	
	ava.innerHTML="<input type='text'>";
	password.innerHTML="<input type='tag'>";
	confirmpassword.innerHTML="<input type='tag'>";
}