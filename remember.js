function capture()
{
    var content = encodeURI(document.getElementById("content").innerHTML);
    history.replaceState(0,0,"#"+content);
}

function setup()
{
    document.getElementById("content").style.height = screen.availHeight + "px";
}
