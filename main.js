Webcam.set({
    width:500,
    height:450,
    image_format:"png",
    png_quality:90
})

Webcam.attach("#camera")

function take_Photo(){
    Webcam.set(function(data_url){
        document.getElementById("result").innerHTML = "<img id='resultimg' src='"+data_url+"'>"
    })
}

var teach_machine = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NYtGXo7UQ/model.json")

//add the TeachableMachine