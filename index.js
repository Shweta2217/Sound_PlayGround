var totalCards = document.querySelectorAll("h3.sound_name").length;

for (var i = 0; i < totalCards; i++) {
    document.querySelectorAll("h3.sound_name")[i].addEventListener("click", function() {
        var Name = this.innerText;
        console.log(Name);
        switch (Name) {
            case "Bird":
                var bird = new Audio("Sounds/bird.mp3");
                bird.play();
                break;
            case "Car":
                var car = new Audio("Sounds/car.mp3");
                car.play();
                break;
            case "Cat":
                var cat = new Audio("Sounds/cat.mp3");
                cat.play();
                break;
            case "Cock":
                var cock = new Audio("Sounds/cock.mp3");
                cock.play();
                break;
            case "Cow":
                var cow = new Audio("Sounds/cow.mp3");
                cow.play();
                break;
            case "Dog":
                var dog = new Audio("Sounds/dog.mp3");
                dog.play();
                break;
            case "Drop":
                var drop = new Audio("Sounds/drop.mp3");
                drop.play();
                break;
            case "Goat":
                var goat = new Audio("Sounds/goat.mp3");
                goat.play();
                break;
            case "Google":
                var google = new Audio("Sounds/google.mp3");
                google.play();
                break;
            case "Horn":
                var horn = new Audio("Sounds/horn.mp3");
                horn.play();
                break;
            case "Horse":
                var horse = new Audio("Sounds/horse.mp3");
                horse.play();
                break;
            case "Insect":
                var insect = new Audio("Sounds/insect.mp3");
                insect.play();
                break;
            case "Monkey":
                var monkey = new Audio("Sounds/monkey.mp3");
                monkey.play();
                break;
            case "Rain":
                var rain = new Audio("Sounds/rain.mp3");
                rain.play();
                break;
            case "Thunder":
                var thunder = new Audio("Sounds/thunder.mp3");
                thunder.play();
                break;

            default:
                console.log("name")
                break;
        }
    });

}