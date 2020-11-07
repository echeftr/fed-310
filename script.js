/* "Guess the number" - game,

Aan deze eisen moet jouw project voldoen:

Als gebruiker wil ik een initieel bericht zien in die de gebruiker begroet en vraagt om zijn of haar naam. "Welkom! Wat is je naam?" Hoe vraag je de gebruiker om input?

Input van de gebruiker in de browser

Als gebruiker wil ik mijn naam kunnen invoeren in de browser en op enter drukken.

Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht terug zien: "Hey [naam]"

Als gebruiker wil ik na de begroeting met mijn naam gevraagd worden om een nieuwe input met een cijfer. e.g: "Voer een nummer in van 0 tot 25 om te beginnen met raden..."

Als spelmaker wil ik dat de gebruiker wel een reeële kans heeft om te winnen. Daarom pak ik een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random()

Als gebruiker wil ik een nummer in kunnen voeren, dmv een prompt en vervolgens op enter klikken.

Als gebruiker wil ik een negatief bericht zien dmv een alert() als ik het nummer verkeerd heb geraden e.g. "Dat is niet correct" . Daarna wil ik gevraagd worden om opnieuw te raden.

Als gebruiker wil ik een positief bericht ontvangen dmv een alert() als ik het nummer goed heb geraden. e.g: "Gefeliciteerd je hebt gewonnen". Het spel is nu af.

Als gebruiker wil ik een bericht zien als het spel af is. "e.g: Dag [naam]. Tot de volgende keer" */




let name = prompt('Welkom bij "Guess the number" game! Wat is je naam?', "John");
alert(`Hoi ${name}!`);

let winNum = 2;
let inputNum;

alert('Voer een nummer in van 0 tot 25 om te beginnen met raden...');

while (inputNum !== winNum) {
  inputNum = parseInt(prompt("Voer een nummer in.."));
  alert("Je gok is:" + inputNum);
  if (inputNum > winNum) {
    alert("Helaas, je getal is te hoog. Probeer het opnieuw:");
  } else if (inputNum < winNum) {
    alert("Helaaaas, je getal is te laag. Probeer het opnieuw:");
  } else {
    alert("Je hebt gewonnen! Het getal was inderdaad: " + inputNum);
    alert(
      "We sluiten de game af. Om opnieuw te spelen druk op F5. Bedankt voor het spelen " + name + ", tot de volgende keer!"
    );
  }
} 


/* Bonus 
Een gebruiker krijgt maximaal 5 pogingen om het getal te raden.
Als gebruiker wil ik na elke poging een nieuw bericht zien die mij verteld hoeveel pogingen ik nog over heb.
Als gebruiker wil ik een bericht zien als ik helemaal geen pogingen meer over heb. Het spel is nu af.
Zelf de range bepalen waaruit de gebruiker gaat raden.
Als gebruiker wil ik bij de start van het spel gevraagd worden wat het kleinste en het grootste nummer is dat ik wil raden.
Als gebruiker speel ik nu het spel met de nummer-range die ik heb aangegeven bij de start van het spel. */

// Bonus niet gemaakt.