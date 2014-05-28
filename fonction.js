$(document).ready(Ready);

function Ready(){
    $("form").submit(Sub); 
}

function Sub(data){
    var cmd = ["hello", "about", "download"];

    $("#text").val(($("#text").val() == "" ? "" : $("#text").val() + "\n") + "User: "+$("#msg").val());

    for (var i = 0, v = 0; i <= 2; i++){
        if ($("#msg").val() == "help"){
            $("#text").val("Help: Commands list" + "\n" + 
                           "hello: returns 'hello world!'" + "\n" + 
                           "about: what about this demo?" + "\n" + 
                           "clear: clear chat");
        }else if ($("#msg").val() == "clear"){
            $("#text").val("");
        }else if ($("#msg").val() == "download"){
            window.location = ""+"demo.zip"+"";
        }else if ($("#msg").val() == cmd[i]){
            $.ajax({
            	type: $(this).attr("method"), 
            	url: $(this).attr("action"), 
            	data: $(this).serialize(), 
            	success: Success});
        }else
            v++;
    }

    if (v == 3){
        $("#text").val(($("#text").val() == "" ? "" : $("#text").val() + "\n") + $("#msg").val() + ": Command invalide");
    }l
    $("#msg").val("");
    return false; 
}

function Success(result){
	var tmp = result;
	if ((tmp.split(//g).length - 1) == 0)
    	$("#text").val(result); 
}
