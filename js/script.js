images=[
    {
        "name": "Bora Drljaca",
        "tags": ["pevac", "estrada", "umetnik", "bora", "drljaca", "boro"],
        "src": "img17.jpg"
    },
    {
        "name": "Ceda Zmaj",
        "tags": ["politicar", "ldp", "ceda", "zmaj", "cedomir", "jovanovic"],
        "src": "img2.jpg"
    },
    {
        "name": "Jelena Karleusa",
        "tags": ["estrada", "pevac", "pevacica", "umetnik", "karleusa", "jelena"],
		"src": "img1.jpg"
    },
	{
        "name": "Aleksandar Vucic",
        "tags": ["politicar", "spasilac", "premijer", "sns", "aleksandar", "vucic"],
		"src": "img3.jpg"
    },
	{
        "name": "Kristijan Golubovic",
        "tags": ["kriminalac", "umetnik", "estrada", "kristijan", "kiki", "golubovic"],
		"src": "img4.jpg"
    },
	{
        "name": "Aleksandar Vucic osmeh",
        "tags": ["politicar", "spasilac", "premijer", "sns", "aleksandar", "vucic"],
		"src": "img5.jpg"
    },
	{
        "name": "Velja Ilic Pijanica",
        "tags": ["politicar", "velja", "ilic"],
		"src": "img6.jpg"
    },
	{
        "name": "Toma Nikolic",
        "tags": ["politicar", "predsednik", "drzava", "sns", "tomislav", "nikolic", "toma"],
		"src": "img7.jpg"
    },
	{
        "name": "Ivica Dacic",
        "tags": ["politicar", "sps", "bivsi premijer", "dacic", "ivica"],
		"src": "img8.jpg"
    },
	{
        "name": "Era Ojdanic",
        "tags": ["estrada", "pevac", "umetnik", "era", "ojdanic", "pedofil"],
		"src": "img9.jpg"
    },
	{
        "name": "Ivica Dacic osmeh",
        "tags": ["politicar", "sps", "bivsi premijer", "dacic", "ivica"],
		"src": "img10.jpg"
    },
	{
        "name": "Jelena Karleusa naocare",
        "tags": ["estrada", "pevac", "pevacica", "umetnik", "karleusa", "jelena"],
		"src": "img11.jpg"
    },
	{
        "name": "Jovan Krkobabic",
        "tags": ["politicar", "pups", "jovan", "krkobabic"],
		"src": "img12.jpg"
    },
	{
        "name": "Natasa Bekvalac",
        "tags": ["umetnik", "estrada", "natasa", "pevacica", "bekvalac"],
		"src": "img13.jpg"
    },
	{
        "name": "Palma Biznismen",
        "tags": ["politicar", "js", "dragan", "markovic", "palma", "jagodina"],
		"src": "img14.jpg"
    },
	{
        "name": "Palma zadovoljan",
        "tags": ["politicar", "js", "dragan", "markovic", "palma", "jagodina"],
		"src": "img15.jpg"
    },
	{
        "name": "Srbenda",
        "tags": ["srbenda", "srbija"],
		"src": "img16.jpg"
    },
	{
        "name": "Velja Ilic",
        "tags": ["politicar", "velja", "ilic"],
		"src": "img18.jpg"
    },
	{
        "name": "Aleksandar Vucic pobednik",
        "tags": ["politicar", "spasilac", "premijer", "sns", "aleksandar", "vucic"],
		"src": "img19.jpg"
    },
	{
        "name": "Velja Ilic umisljen",
        "tags": ["politicar", "velja", "ilic"],
		"src": "img20.jpg"
    }
	
];

window.addEventListener("load",function(){
	var id=document.getElementById( 'listbox' ).getElementsByTagName( 'ul' )[0];
	var HTML=""
	for(var i=0;i<images.length;i++){
		HTML+=getHTML(i);
	}
	id.innerHTML=HTML;

	$("#search_field").bind("input",function(){
		var text=document.getElementById("search_field").value.toLowerCase();

        //get all ids that search query returns
		var ids=new Array();
		for(var i=0;i<images.length;i++){
			for (var z in images[i].tags){
                if(images[i].tags[z].indexOf(text)!=-1){
                    ids.push(i);
                    console.log(images[i].name);
                    break;
                }
            }
		}
        for (var i=0;i<images.length;i++){
            if(jQuery.inArray( i, ids )!=-1){
                $("#listbox ul").children().eq(i).fadeIn();
            }else{
                $("#listbox ul").children().eq(i).fadeOut();
            }
        }
	});

    //CHANGE WINDOW FROM PICKER TO STEP 1
    $("#listbox li").click(function(){
        changeWindow();
        var picked=new Image();
        picked.src=$(this).attr("data-large");
        setCanvas(picked);
    });
},false);


function changeWindow(order){
    if(typeof(order)==='undefined'){
        $(".active").removeClass("active").addClass("inactive").next().addClass('active');
    }else{
        $(".active").removeClass("active").prev().removeClass("inactive").addClass('active');
    }
    var t = $(".active").data('text');
    var b = $('.active').data('back');
    changeHeaderText(t,b);
}
function changeHeaderText(text,back){
    $('.backbtn').unbind('click');
    $( "#header" ).animate({
        'line-height':"200px"
    }, 1000, function() {
        if(back)text='<div class="backbtn"><i class="fa fa-arrow-circle-left"></i></div>'+text;
        $(this).html(text);
        $(this).animate({
            'line-height':"50px"
        });
        $('.backbtn').bind("click",function(){
            changeWindow(false);
        });
    });
}

function getHTML(id){
	var HTML="";
	HTML+='<li data-large="img/large/'+images[id].src+'">';
	HTML+='<img width="100" height="100" src="img/thumb/'+images[id].src+'" alt="'+images[id].name+'">';
	HTML+='<div class="hoverbox">';
	HTML+='<p class="text">'+images[id].name+'</p>';
	HTML+='</div>';
	HTML+='</li>';
	return HTML;
}
