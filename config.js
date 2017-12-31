function top_button(title, index)
{
	document.write(
		'<tr>' +
		'<table width="780" align=center>' +
			'<td height="76" background="images/index_01.gif">' +
			'<table width="100%">' +
				'<td width="16.6%" align="center"><a href="index.html" class="green-text"><font size="4pt"><strong>Home</strong></a></td>' +
				'<td width="16.5%" align="center"><a href="project.html" class="green-text"><font size="4pt"><strong>Projects</strong></a></td>' +
				'<td width="16.3%" align="center"><a href="people.html" class="green-text"><font size="4pt"><strong>People</strong></a></td>' +
				'<td width="16.5%" align="center"><a href="rc_tutorial.html" class="green-text"><font size="4pt"><strong>Tutorial</strong></a></td>' +
				'<td width="16.5%" align="center"><a href="summer_school.html" class="green-text"><font size="4pt"><strong>Summer School</strong></a></td>' +
				'<td width="16%" align="center"><a href="materials.html" class="green-text"><font size="4pt"><strong>Materials</strong></a></td>' +
			'</table>' +
			'</td>' +
		'</table>' +
		'</tr>' +
		
		'<tr>' +
		'<table width="760" align=center>' +
			'<td>' +
				'<td align="center"><p><font size="6pt"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + title + '</strong></p></td>' +
				'<td align="right" valign="top">' +
					'<p>' +
						'<a href=' + index + ".html" + '><font size="3pt">EN</a>' +
						'<a href=' + index + "_ch.html" + '><font size="3pt">中文</a>' +
					'</p>' +
				'</td>' +
			'</td>' +
		'</table>' +
		'</tr>'
	);
}

function top_button_ch(title, index)
{
	document.write(
		'<tr>' +
		'<table width="780" align=center>' +
			'<td height="76" background="images/index_01.gif">' +
			'<table width="100%">' +
				'<td width="16.7%" align="center"><a href="index_ch.html" class="green-text"><font size="5pt"><strong>首頁</strong></a></td>' +
				'<td width="16.7%" align="center"><a href="project_ch.html" class="green-text"><font size="5pt"><strong>專案</strong></a></td>' +
				'<td width="16.6%" align="center"><a href="people_ch.html" class="green-text"><font size="5pt"><strong>成員</strong></a></td>' +
				'<td width="17%" align="center"><a href="rc_tutorial_ch.html" class="green-text"><font size="4pt"><strong>研討會課程</strong></a></td>' +
				'<td width="17.2%" align="center"><a href="summer_school_ch.html" class="green-text"><font size="4pt"><strong>暑期學校</strong></a></td>' +
				'<td width="17.2%" align="center"><a href="materials_ch.html" class="green-text"><font size="4pt"><strong>課程教材</strong></a></td>' +
			'</table>' +
			'</td>' +
		'</table>' +
		'</tr>' +
		
		'<tr>' +
		'<table width="760" align=center>' +
			'<td>' +
				'<td align="center"><p><font size="6pt"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + title + '</strong></p></td>' +
				'<td align="right" valign="top">' +
					'<p>' +
						'<a href=' + index + ".html" + '><font size="3pt">EN</a>' +
						'<a href=' + index + "_ch.html" + '><font size="3pt">中文</a>' +
					'</p>' +
				'</td>' +
			'</td>' +
		'</table>' +
		'</tr>'
	);
}

function add_news(time, content, img)
{
	document.write(
		'<tr>' + 
		'<table width="760" align="center">' +
			'<td width="30%">' +
			'<table width="270" border="0" cellspacing="0" cellpadding="0">' +
				'<tr>' +
					'<td><img src="images/index_34.gif" width="270" height="26" alt=""></td>' +
				'</tr>' +
				'<tr>' +
					'<td background="images/index_35.gif" width="270">' +
					'<table width="85%" align="center" >' +
						'<td>' +
							'<p align="center"><font size="4pt"><strong>' + time + '</strong></p>' +
							
							'<p align="center"><font size="3pt">' + content + '</p>' +
						'</td>' +
					'</table>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<td><img src="images/index_36.gif" width="270" height="20" alt=""></td>' +
				'</tr>' +
			'</table>' +
			'</td>' +
			'<td width="70%" align="center">' +
				'<td><img src="' + img + '" alt=""></td>' +
			'</td>' +
		'</table>' +
		'</tr>'
	);
}

function add_news_ch(time, content, img)
{
	add_news(time, content, img);
}

function add_people(name, img, email, content, web)
{
	document.write(
		'<tr>' +
		'<table width="780" height="76" align="center">' +
			'<td width="30%"><img src="people/' + img + '" width="190" height="240"></td>' +
			'<td width="70%">' +
				'<p><a href="' + web + '"><font size="5pt"><strong>' + name +'</strong></a><br>' +
				'<font size="4pt">Email: ' + email + '<br>' +
				'<font size="4pt">' + content + '</p>' +
			'</td>' +
		'</table>' + 
		'</tr>'
	);
}

function add_people_ch(name, img, email, content, web)
{
	add_people(name, img, email, content, web);
}

function bio(name, img, email, content, bio)
{
	document.write(
		'<tr>' +
		'<table width="780" height="76" align="center">' +
			'<td width="30%"><img src="people/' + img + '" width="190" height="240"></td>' +
			'<td width="70%">' +
				'<p><font size="5pt"><strong>' + name +'</strong><br>' +
				'<font size="3pt">Email: ' + email + '<br>' +
				'<font size="3pt">' + content + '<br>' +
				'<font size="2pt">' + bio + '<br>' + '</p>' +
			'</td>' +
		'</table>' + 
		'</tr>'
	);
}

function bio_Sums(name, img, title, email, content, bio)
{
	document.write(
		'<tr>' +
		'<table width="780" height="76" align="center">' +
			'<td width="30%"><img src="people/' + img + '" width="190" height="240"></td>' +
			'<td width="70%">' +
				'<p><font size="5pt"><strong>' + name +'</strong><br>' +
				'<font size="4pt"><strong class="green-text">Title: ' + title + '</strong><br>' +
				'<font size="3pt">Email: ' + email + '<br>' +
				'<font size="3pt">' + content + '<br>' +
				'<font size="2pt">' + bio + '<br>' + '</p>' +
			'</td>' +
		'</table>' + 
		'</tr>'
	);
}

function add_vedio(vedio, title)
{
	document.write(
		'<tr>' +
			'<td width="50%" align="left">' +
				'<p><font size="4pt">' + title + '</p>' +
				'<video id="movie" preload controls loop poster="" width="380" height="220">' +
				'<source src="vedio/' + vedio + '.mp4" type="video/mp4" />' +
				'Your browser doesn\'t support the <video> tag.' +
				'</video>' +
			'</td>' +
		'</tr>'
	);
}

function add_vedio_ch(vedio, title)
{
	add_vedio(vedio, title);
}
