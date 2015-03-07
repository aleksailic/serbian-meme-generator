/*
    Copyright ©2014 Aleksa Ilic. All Rights Reserved.
    Includes content from: jQuery,Spectrum.js,fontselector.js
*/
props={
    'fill': "#FFFFFF",
    'stroke': "#222222",
    'font':{
        'family':"Impact",
        'sizes':[80,80]
    },
    'stroke':{
        'color':"#222222",
        'sizes':[12,12]
    },
    'lines': ["ПРВА ЛИНИЈА", "ДРУГА ЛИНИЈА"]
};
images=[
    {
        "name": "Bora Drljaca",
        "tags": ["pevac", "estrada", "umetnik", "bora", "drljaca", "boro"],
        "src": "img17.jpg"
    },
    {
        "name": "Čeda Zmaj",
        "tags": ["politicar", "ldp", "ceda", "zmaj", "cedomir", "jovanovic"],
        "src": "img2.jpg"
    },
    {
        "name": "Jelena Karleusa",
        "tags": ["estrada", "pevac", "pevacica", "umetnik", "karleusa", "jelena"],
		"src": "img1.jpg"
    },
	{
        "name": "Aleksandar Vučić",
        "tags": ["politicar", "spasilac", "premijer", "sns", "aleksandar", "vucic"],
		"src": "img3.jpg"
    },
	{
        "name": "Kristijan Golubović",
        "tags": ["kriminalac", "umetnik", "estrada", "kristijan", "kiki", "golubovic"],
		"src": "img4.jpg"
    },
	{
        "name": "Aleksandar Vučić",
        "tags": ["politicar", "spasilac", "premijer", "sns", "aleksandar", "vucic"],
		"src": "img5.jpg"
    },
	{
        "name": "Velja Ilić",
        "tags": ["politicar", "velja", "ilic"],
		"src": "img6.jpg"
    },
	{
        "name": "Toma Nikolić",
        "tags": ["politicar", "predsednik", "drzava", "sns", "tomislav", "nikolic", "toma"],
		"src": "img7.jpg"
    },
	{
        "name": "Ivica Dačić",
        "tags": ["politicar", "sps", "bivsi premijer", "dacic", "ivica"],
		"src": "img8.jpg"
    },
	{
        "name": "Era Ojdanić",
        "tags": ["estrada", "pevac", "umetnik", "era", "ojdanic", "pedofil"],
		"src": "img9.jpg"
    },
	{
        "name": "Ivica Dačic osmeh",
        "tags": ["politicar", "sps", "bivsi premijer", "dacic", "ivica"],
		"src": "img10.jpg"
    },
	{
        "name": "Jelena Karleuša naočare",
        "tags": ["estrada", "pevac", "pevacica", "umetnik", "karleusa", "jelena"],
		"src": "img11.jpg"
    },
	{
        "name": "Jovan Krkobabić",
        "tags": ["politicar", "pups", "jovan", "krkobabic"],
		"src": "img12.jpg"
    },
	{
        "name": "Nataša Bekvalac",
        "tags": ["umetnik", "estrada", "natasa", "pevacica", "bekvalac"],
		"src": "img13.jpg"
    },
	{
        "name": "Palma bizmisnem",
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
        "name": "Velja Ilić",
        "tags": ["politicar", "velja", "ilic"],
		"src": "img18.jpg"
    },
	{
        "name": "Aleksandar Vučić",
        "tags": ["politicar", "spasilac", "premijer", "sns", "aleksandar", "vucic"],
		"src": "img19.jpg"
    },
	{
        "name": "Velja Ilic zamišljen",
        "tags": ["politicar", "velja", "ilic"],
		"src": "img20.jpg"
    }
	
];
canvas=null;

window.addEventListener("load",function(){
	UI.listbox.initalize();    
    UI.inputform.initalize();
},false);

UI={
    window:{
        switch:function(next){ //next is boolean and tells the function in which direction to move windows
            if(typeof(next)==='undefined' || next==true){
                $(".active").removeClass("active").addClass("inactive").next().addClass('active');
            }else{
                $(".active").removeClass("active").prev().removeClass("inactive").addClass('active');
            }
            var t = $(".active").data('text');
            var b = $('.active').data('back');

            this.headerText(t,b);
        },
        headerText:function(text,back){
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
                    UI.window.switch(false);
                });
            });
        }
    },
    listbox:{
        initalize:function(){
            this.populate();
            $("#search_field").bind("input",this.search);
            $("#listbox li").click(function(){ //WHEN ITEM IS SELECTED MOVE ON TO STEP 2
                UI.window.switch();
                
                var picked=new Image();
                picked.src=$(this).attr("data-large");   
                canvas=new canvasObject(picked);
            });
        },
        populate:function(){
            var id=document.getElementById( 'listbox' ).getElementsByTagName( 'ul' )[0];
            var HTML=""
            for(var i=0;i<images.length;i++){
                HTML+='<li data-large="img/large/'+images[i].src+'">';
                HTML+='<img width="100" height="100" src="img/thumb/'+images[i].src+'" alt="'+images[i].name+'">';
                HTML+='<div class="hoverbox">';
                HTML+='<p class="text">'+images[i].name+'</p>';
                HTML+='</div>';
                HTML+='</li>';
            }
            id.innerHTML=HTML;
        },
        search:function(){
            var rmSpecChar=function (str){
                str = str.replace(/đ/g,'dj');
                str = str.replace(/č/g,'c');
                str = str.replace(/ć/g,'c');
                str = str.replace(/š/g,'s');
                str = str.replace(/ž/g,'z');
                return str;
            }
            var text=document.getElementById("search_field").value.toLowerCase();
            text = rmSpecChar(text);

            //get all ids that search query returns
            var ids=new Array();
            for(var i=0;i<images.length;i++){
                for (var z in images[i].tags){
                    if(images[i].tags[z].indexOf(text)!=-1){
                        ids.push(i);
                        break;
                    }
                }
            }
            //fadeout ones that don't match
            for (var i=0;i<images.length;i++){
                if(jQuery.inArray( i, ids )!=-1){
                    $("#listbox ul").children().eq(i).fadeIn();
                }else{
                    $("#listbox ul").children().eq(i).fadeOut();
                }
            }
        }
    },
    inputform:{
        initalize:function(){
            //center the form
            this.center();

            $("#strokecolor").spectrum({
                color: "#000",
                change: function(color) {
                    props.stroke.color=color.toHexString();
                    canvas.update();
                }
            });
            $("#fillcolor").spectrum({
                color: "#FFF",
                change: function(color) {
                    props.fill=color.toHexString();
                    canvas.update();
                }
            });

            //INITIALIZE FONT PICKER
            $('#fontSelect').fontSelector({
                'hide_fallbacks' : true,
                'initial':'Impact,Charcoal,sans-serif',
                'selected' : function(style) {
                    props.font.family=style;
                    if (canvas !== null){
                        canvas.update();
                    }
                         
                },
                    'fonts' : [
                        'Impact,Charcoal,sans-serif',
                        'Arial,Arial,Helvetica,sans-serif',
                        'Arial Black,Arial Black,Gadget,sans-serif',
                        'Comic Sans MS,Comic Sans MS,cursive',
                        'Courier New,Courier New,Courier,monospace',
                        'Georgia,Georgia,serif',
                        'Lucida Console,Monaco,monospace',
                        'Lucida Sans Unicode,Lucida Grande,sans-serif',
                        'Palatino Linotype,Book Antiqua,Palatino,serif',
                        'Tahoma,Geneva,sans-serif',
                        'Times New Roman,Times,serif',
                        'Trebuchet MS,Helvetica,sans-serif',
                        'Verdana,Geneva,sans-serif'
                    ]
            });

            $("#inputform select").change(function(event) {
                /*var prop=$(this).attr('name');
                var val=$(this).find(":selected").text();
                props[prop]=val;
                canvas.update();*/
            });
            $("#inputform select").change(function(event) {
                var prop=$(this).attr('name');
                var number = parseInt(prop.slice(-1));
                prop=prop.slice(0,-1);

                var val=$(this).find(":selected").val();
                props[prop].sizes[number]=val;

                console.log(props.stroke.sizes);
                canvas.update();
            });

            $("#inputform input[name='first']").bind("input",function(){
                props.lines[0]=$(this).val();
                console.log(props.lines);
                canvas.update();
            });
            $("#inputform input[name='second']").bind("input",function(){
                props.lines[1]=$(this).val();
                console.log(props.lines);
                canvas.update();
            });
            $("#export").click(function() {
                var dataURL=canvas.save();
                document.getElementById('canvasimg').src = dataURL;
                UI.window.switch();
            });
        },
        center:function(){
            var form = document.getElementById("inputform");
            form.style.marginTop=(550-form.offsetHeight)/2+'px';
        }
    }
};

function canvasObject(image){
    var canvas=document.getElementById('canvas');
    var context=canvas.getContext('2d');
    var obj=this;

    image.addEventListener("load",function(){
        obj.set.resolution(image.width,image.height);
        obj.set.position();

        obj.update();
    },false); //once image is loaded initalize canvas

    this.clear=function(){
        context.clearRect(0,0,this.canvas.width,this.cavnas.height);
    };

    this.loadingScreen=function(){
        context.textAlign="center";
        context.fillStyle = "#FFFFFF";
        context.font = "bold 40px Impact";
        context.fillText("LOADING...", canvas.width/2, 100);
        context.fillStyle = "#000000";
        context.lineWidth = 2;
        context.strokeText("LOADING...", canvas.width/2, 100);
    };
    this.loadingScreen(); //display loading screen while the image is loading

    this.update=function(){
        addBackground();

        var x = canvas.width / 2;
        
        addText(props.lines[0], x, parseInt(props.font.sizes[0]), parseInt(props.font.sizes[0]), 'top');
        addText(props.lines[1], x, canvas.height, parseInt(props.font.sizes[1]), 'bottom');

        function addBackground(){
            context.drawImage(image,0,0);
        }
        function addText(text,x,y,lineHeight,startingPoint){
            context.textAlign = 'center';

            if(startingPoint=='bottom'){
                context.font = "bold "+props.font.sizes[1]+"px "+props.font.family;
                context.lineWidth = parseInt(props.stroke.sizes[1]);
            }else{
               context.font = "bold "+props.font.sizes[0]+"px "+props.font.family; 
               context.lineWidth = parseInt(props.stroke.sizes[0]);
            }
            
            function printText(line,x,y){
                context.miterLimit = 2;

                context.lineJoin = 'round';
                context.strokeStyle = props.stroke.color;
                if(parseInt(context.lineWidth)!==1){ //Weird quirk, lineWidth cannot be set to 0 so we will treat 1 as 0.
                   context.strokeText(line, x, y); 
                }

                context.fillStyle = props.fill;
                context.fillText(line, x, y);
            }
            function getMeasure(startingPoint){
                var words = text.split(' ');
                var line = '';
                var counter=0;
                for(var n = 0; n < words.length; n++) {
                    var testLine = line + words[n] + ' ';
                    var metrics = context.measureText(testLine);
                    var testWidth = metrics.width;
                    if (testWidth > canvas.width && n > 0) {
                        line = words[n] + ' ';
                        counter++
                    }
                    else {
                        line = testLine;
                    }
                };

                if(startingPoint=='bottom'){
                    return counter*(parseInt(props.font.sizes[1]));
                }else{
                    return counter*(parseInt(props.font.sizes[0]));
                }
                
            }

            if(startingPoint=='bottom'){  //We must calculate how much space will the text fill in order to place it
               y-=getMeasure('bottom')+(parseInt(props.font.sizes[1])/4); 
            }

            var words = text.split(' ');
            var line = '';

            for(var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > canvas.width && n > 0) {
                    printText(line,x,y);
                    line = words[n] + ' ';
                    y += lineHeight;
                }
                else {
                    line = testLine;
                }
            }
            printText(line,x,y); 

        }
    };

    this.set={
        resolution:function(w,h){
            canvas.setAttribute("width",w);
            canvas.setAttribute("height",h);
        },
        position:function(){
            canvas.style.top=(500-canvas.offsetHeight)/2+'px';
        }
    };

    this.save=function(){
        return canvas.toDataURL();
    };
}