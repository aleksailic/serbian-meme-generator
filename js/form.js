$(document).ready(function() {
	//INITIALIZE COLOR PICKERS
	$("#strokecolor").spectrum({
	    color: "#000",
	    change: function(color) {
	        props.stroke=color.toHexString();
	        refreshCanvas();
	    }
	});
	$("#fillcolor").spectrum({
	    color: "#FFF",
	    change: function(color) {
	        props.fill=color.toHexString();
	        refreshCanvas();
	    }
	});

	//INITIALIZE FONT PICKER
	$('#fontSelect').fontSelector({
	        'hide_fallbacks' : true,
	        'initial':'Impact,Charcoal,sans-serif',
	        'selected' : function(style) {
	        	props.font=style;
	        	refreshCanvas(); 
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
		var prop=$(this).attr('name');
		var val=$(this).find(":selected").text();
		props[prop]=val;
		refreshCanvas();
	});

	$("#inputform input[name='first']").bind("input",function(){
		props.lines[0]=$(this).val();
		console.log(props.lines);
		refreshCanvas();
	});
	$("#inputform input[name='second']").bind("input",function(){
		props.lines[1]=$(this).val();
		console.log(props.lines);
		refreshCanvas();
	});
	$("#export").click(function() {
		var dataURL=canvas.toDataURL();
		document.getElementById('canvasimg').src = dataURL;
		changeWindow();
		console.log(dataURL);
	});
});