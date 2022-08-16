function mail(){
    alert("Alrighty then, feel free to hmu on omgodage@gmail.com");
}

function phone(){
    alert("Ahem, i prefer texts instead of calls uwu - 7738114434");
}

function hobbyInfo(){
    let hobby='', info='';

    if(document.getElementById("Reading").checked == true){
        hobby = hobby + ',' +document.getElementById("Reading").value;
        info = info + "\n Reading is the process of taking in the sense or meaning of letters, symbols, etc., especially by sight or touch. For educators and researchers, reading is a multifaceted process involving such areas as word recognition, orthography (spelling), alphabetics, phonics, phonemic awareness, vocabulary, comprehension, fluency, and motivation.\n";
    }
    if(document.getElementById("Travelling").checked == true){
        hobby = hobby + ',' + document.getElementById("Travelling").value;
        info = info + "\n Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements, as in the case of tourism.\n";
    }
    if(document.getElementById("Programming").checked == true){
        hobby = hobby + ',' + document.getElementById("Programming").value;
        info = info + "\n Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms (usually in a chosen programming language, commonly referred to as coding).\n";
    }
    if(document.getElementById("Sports").checked == true){
        hobby = hobby + ',' + document.getElementById("Sports").value;
        info = info + "\n Sport pertains to any form of competitive physical activity or game that aims to use, maintain, or improve physical ability and skills while providing enjoyment to participants and, in some cases, entertainment to spectators. Sports can, through casual or organized participation, improve one's physical health. \n";
    }
    if(document.getElementById("Music").checked == true){
        hobby = hobby + ',' +document.getElementById("Music").value;
        info = info + "\n Music is generally defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm or otherwise expressive content. Exact definitions of music vary considerably around the world, though it is an aspect of all human societies, a cultural universal. While scholars agree that music is defined by a few specific elements, there is no consensus on their precise definitions.\n";
    }
    if(document.getElementById("Movies").checked == true){
        hobby =hobby + ',' + document.getElementById("Movies").value;
        info = info + "\n A film – also called a movie, motion picture, moving picture, picture or photoplay – is a work of visual art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. These images are generally accompanied by sound and, more rarely, other sensory stimulations. \n";
    }
    if(document.getElementById("VidG").checked == true){
        hobby = hobby + ',' +document.getElementById("VidG").value;
        info = info + "\n A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback mostly commonly is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset. Some computer games do not always depend on a graphics display, for example text adventure games and computer chess can be played through teletype printers. Video games are often augmented with audio feedback delivered through speakers or headphones, and sometimes with other types of feedback, including haptic technology.\n";
    }
    if(hobby == ""){
        alert("No hobby was selected");
        document.getElementById("lbl").style.display = 'none';
    }
    else{
        alert("The selected hobbies are: \n" + hobby.substring(1));
        document.getElementById("lbl").style.visibility = 'visible';
        document.getElementById("lbl").innerText = info;
          
    }
}
