function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "New Heading";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}
 

function mojaFunkcja(imie) {

   const clients = ["Mango", "Poly","Ajax"];
   let message;
   
    for (const client of clients) {

        if(client === imie) {
            message = "Klient z takim imieniem jest juz w bazie danych!!!";
            break;
        }


        message = "Nie znalezliśmy takiego klienta w bazie danych!!!";

    }  

       console.log(message);

}       


