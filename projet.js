const prompt = require("prompt-sync")()
let player

while (player != "OK") {
        console.log("Vous vous reveillez au bord d'une plage, vous vous sentez perdu et désorienté...");
       player = prompt(" Au loin vous voyez un chateau.Tapez <<OK>> pour vous approcher de ce dernier.")
     }
     while (player != "1" && player != "2") {
        console.log("Vous etes maintenant devant le fameux chateau en question, il est trés grand, et de couleur rouge écarlate, vous vous appercevez que la porte de ce dernier est entre-ouverte. 2 choix s'offrent maintenant à vous , vous pouvez soit vous infiltrer dans le chateau en tappant <<1>> ou aller dans un sentier sombre et perdue à droite du chateau en tappant <<2>>");
        player = prompt("Que faire? <<1>> pour rentrer ou <<2>> pour aller dans le sentier?")
    if (player === "1") {
        console.log("Vous vous retrouvé face à une cérémonie d'un couronnement royal, plusieurs soldats vous remarquent et vous tentez de vous enfuir vainement, la garde royale vous neutralise rapidement car vous avez sécher les cours d'EPS en 4eme et vous finissez dans un cachot. Vous émergez doucement et vous sentez une énorme douleur au crane. Vous avez inspectez pendant plusieurs dizaines de minutes votre céllule et vous avez conclus qu'il n'y a que 2 options. Vous avez remarquez qu'il y a un petit trou dans la grille de ventilation de votre céllule et que peut-etre vous pouvez passer dedans. Votre deuxieme découverte est que le garde semble énervé, vous pouvez peut-etre le provoquer avec des railleries ");
        player = 0
        while (player != "1" && player != "2") {
            player = prompt ("tapez <<1>> pour provoquez le garde ou tapez <<2>> pour passez dans la ventilation.")
        }if (player === "1") {
            console.log(" Le garde prend à coeur vos insultes et dans un exces de rage il ouvre votre céllule pour rentrer avec une épée et vous éxécute sans pitiés ! GAMEOVER");
            break
        }if (player === "2") {
            console.log("Vous avez réussie à sortir par la ventilation et vous vous retrouvé dans la cour royale, il n'il y a personne aux alentours à part un énorme tigre qui dort au millieu de la cour. Vous pouvez soit tenter le tout pour le tout et courrir de toute votre force pour passer par dessus le murret et potentiellement réveiller le tigre et vous faire manger ou marcher pas à pas sans le reveiller mais risquer que quelqu'un vous voit et alerte la garde royale, que faire?");
            player = 0
            while (player != "1" && player != "2") {
                player = prompt("Tapez <<1>> pour courrir ou tapez <<2>> pour marcher furtivement")
            }if (player ==="1") {
                console.log("En courrant vous faites trop de bruit et en quelques seconde le tigre est à vos trousse mais parvenez à passer le murret, quelqu'un vous remarque et alerte la garde mais c'est trop tard, vous etes dejà dans la nature ! YOU WON GG!!!!");
                break
            }if (player === "2") {
                console.log("Vous faites aucun bruits et le tigre ne vous entend mais malheureusement un valet vous remarques et alerte la garde, elle vous attendras de l'autre coté du murret pour vous abattre. GAMEOVER");
                break
            }
        }
        
    
    }if(player === "2"){  
        console.log("Vous vous retrouvez face à un lion enragé, Vous n'avez que 2 choix");
        player = "0"
        while (player != "1" && player != "2") {
        player = prompt("tapez <<1>> pour tenter de le combattre avec un baton trouvé par terre ou tapez <<2>> pour fuir")
        }if (player === "1") {
            console.log("Le lion vous démolie sans difficulté et vous dévore. Vous etes mort.");
            break
        }if (player === "2") {
            console.log("Vous courrez mais le lion vous rattrape aisément , malgrès tout vous voyez un lac , vous sautez dedans et nagez jusqu'as la rive, vous arrivez dans un petit village remplis de monde, ");
            console.log("Il commence à faire tard et un paysant un peu louche vous propose de vous héberger pour la nuit ");
            player = 0
            while (player != "1" && player != "2") {
                player = prompt(" Tapez <<1>> pour accepter ou <<2>> pour refuser ")
                if(player === "1"){
                    console.log("Le paysant vous tue dans votre sommeil. Game Over");
                    break
                }if(player === "2"){
                    console.log("Vous passez la nuit dehors et mourrez de froid. GAME OVER");
                    break
                }
            }
        }
    }
     }
        