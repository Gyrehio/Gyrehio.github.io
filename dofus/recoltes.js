var ressourcesPaysan = ["Blé","Orge","Avoine","Houblon","Lin","Seigle","Riz","Malt","Chanvre","Maïs","Millet","Frostiz","Quisnoa"];
var minLevelsPaysan = [0, 20, 40, 60, 80, 100, 100, 120, 140, 160, 180, 200, 200];
var ressourcesAlchimiste = ["Ortie","Sauge","Trèfle à 5 feuilles","Menthe Sauvage","Orchidée Freyesque","Edelweiss","Graine de Pandouille","Ginseng","Belladone","Mandragore","Perce-Neige","Salikrone","Tulipe en Papier"];
var minLevelsAlchimiste = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 200];
var ressourcesPecheur = ["Goujon","Greuvette","Truite","Crabe Sourimi","Poisson-Chaton","Poisson Pané","Carpe d'Iem","Sardine Brillante","Brochet","Kralamoure","Anguille","Dorade Grise","Perche","Raie Bleue","Lotte","Requin Marteau-Faucille","Bar Rikain","Morue","Tanche","Espadon","Poiskaille","Patelle","Pichon d'Encre"];
var minLevelsPecheur = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 200, 200];
var ressourcesBucheron = ["Frêne","Chataîgnier","Noyer","Chêne","Bombu","Érable","Pin","Oliviolet","If","Bambou","Merisier","Noisetier","Ébène","Kalyptus","Charme","Bambou Sombre","Orme","Bambou Sacré","Tremble","Aquajou"];
var minLevelsBucheron = [0, 20, 40, 60, 70, 80, 90, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 200];
var ressourcesMineur = ["Fer","Cuivre","Bronze","Kobalte","Manganèse","Étain","Silicate","Argent","Bauxite","Or","Dolomite","Cendrepierre","Obsidienne","Écume de mer","Cristal pliable","Cristal liquide"];
var minLevelsMineur = [0, 20, 40, 60, 80, 100, 100, 120, 140, 160, 180, 180, 200, 200, 200, 200];

var jobs = document.querySelector("#metiers");
var level = document.querySelector("#niveau");

jobs.addEventListener("change", function() {
    var content = document.querySelector(".content");
    let niveau = document.querySelector("#niveau").value;

    // Affichage tableau métier
    if (content) {
        if (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }
    }
    let table = document.createElement("table");
    // ENTETE
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerText = "Nom de la ressource";
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.innerText = "Minimum";
    tr.appendChild(th2);
    let th3 = document.createElement("th");
    th3.innerText = "Maximum";
    tr.appendChild(th3);
    let th4 = document.createElement("th");
    th4.innerText = "Moyenne";
    tr.appendChild(th4);
    let th5 = document.createElement("th");
    th5.innerText = "Prix/unité";
    tr.appendChild(th5);
    let th6 = document.createElement("th");
    th6.innerText = "Prix moyen/récolte";
    tr.appendChild(th6);
    let th7 = document.createElement("th");
    th7.innerText = "Nombre de ressources";
    tr.appendChild(th7);
    let th8 = document.createElement("th");
    th8.innerText = "Prix total";
    tr.appendChild(th8);
    table.appendChild(tr);
    // SUITE
    switch(document.querySelector("#metiers").value) {
        case "Paysan":
            for (let i = 0; i < ressourcesPaysan.length; i++) {
                if (niveau >= minLevelsPaysan[i]) {
                    let tr = document.createElement("tr");
                    // NOM RESSOURCE
                    let td = document.createElement("td");
                    td.innerText = ressourcesPaysan[i];
                    tr.appendChild(td);
                    // MINIMUM
                    let td2 = document.createElement("td");
                    let niveauMin = minLevelsPaysan[i];
                    if (niveau - niveauMin == 0 && niveau == 200) {
                        td2.innerText = 1;
                    } else if (niveau < 30) {
                        td2.innerText = 1;
                    } else if (niveau < 60) {
                        td2.innerText = 2;
                    } else if (niveau < 90) {
                        td2.innerText = 3;
                    } else if (niveau < 120) {
                        td2.innerText = 4;
                    } else if (niveau < 150) {
                        td2.innerText = 5;
                    } else if (niveau < 180) {
                        td2.innerText = 6;
                    } else {
                        td2.innerText = 7;
                    }
                    tr.appendChild(td2);
                    // MAXIMUM
                    let td3 = document.createElement("td");
                    if (niveau - niveauMin == 0 && niveau == 200) {
                        td3.innerText = 1
                    } else if (niveau - niveauMin < 10) {
                        td3.innerText = 7;
                    } else if (niveau - niveauMin < 20) {
                        td3.innerText = 8
                    } else if (niveau - niveauMin < 30) {
                        td3.innerText = 9
                    } else if (niveau - niveauMin < 40) {
                        td3.innerText = 10
                    } else if (niveau - niveauMin < 50) {
                        td3.innerText = 11
                    } else if (niveau - niveauMin < 60) {
                        td3.innerText = 12
                    } else if (niveau - niveauMin < 70) {
                        td3.innerText = 13
                    } else if (niveau - niveauMin < 80) {
                        td3.innerText = 14
                    } else if (niveau - niveauMin < 90) {
                        td3.innerText = 15
                    } else if (niveau - niveauMin < 100) {
                        td3.innerText = 16
                    } else if (niveau - niveauMin < 110) {
                        td3.innerText = 17
                    } else if (niveau - niveauMin < 120) {
                        td3.innerText = 18
                    } else if (niveau - niveauMin < 130) {
                        td3.innerText = 19
                    } else if (niveau - niveauMin < 140) {
                        td3.innerText = 20
                    } else if (niveau - niveauMin < 150) {
                        td3.innerText = 21
                    } else if (niveau - niveauMin < 160) {
                        td3.innerText = 22
                    } else if (niveau - niveauMin < 170) {
                        td3.innerText = 23
                    } else if (niveau - niveauMin < 180) {
                        td3.innerText = 24
                    } else if (niveau - niveauMin < 190) {
                        td3.innerText = 25
                    } else if (niveau - niveauMin < 200) {
                        td3.innerText = 26
                    } else {
                        td3.innerText = 27
                    }
                    tr.appendChild(td3);
                    // MOYENNE
                    let td4 = document.createElement("td");
                    tr.appendChild(td4);
                    td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                    // PRIX/UNITE + PRIX MOYEN/RECOLTE
                    let td5 = document.createElement("td");
                    let input = document.createElement("input");
                    input.type = "number";
                    input.min = 1;
                    input.value = 1;
                    input.classList.add("entry-price");
                    input.id = "pricePaysan";

                    input.addEventListener("change", function() {
                        let td6 = td5.nextSibling;
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                        let td8 = td7.nextSibling;
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                    });

                    td5.appendChild(input);
                    tr.appendChild(td5);

                    let td6 = document.createElement("td");
                    tr.appendChild(td6);
                    td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                    // NOMBRE DE RESSOURCES + TOTAL
                    let td7 = document.createElement("td");
                    let inp = document.createElement("input");
                    inp.type = "number";
                    inp.min = 0;
                    inp.value = 0;
                    inp.classList.add("entry-number");

                    inp.addEventListener("change", function() {
                        let td8 = td7.nextSibling;
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                    });

                    td7.appendChild(inp);
                    tr.appendChild(td7);

                    let td8 = document.createElement("td");
                    tr.appendChild(td8);
                    td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);

                    // FERMETURE
                    table.appendChild(tr);
                }
            };
            table.classList.add("display");
            document.querySelector(".content").appendChild(table);
            break;
            case "Alchimiste":
                for (let i = 0; i < ressourcesAlchimiste.length; i++) {
                    if (niveau >= minLevelsAlchimiste[i]) {
                        let tr = document.createElement("tr");
                        // NOM RESSOURCE
                        let td = document.createElement("td");
                        td.innerText = ressourcesAlchimiste[i];
                        tr.appendChild(td);
                        // MINIMUM
                        let td2 = document.createElement("td");
                        let niveauMin = minLevelsAlchimiste[i];
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td2.innerText = 1;
                        } else if (niveau < 30) {
                            td2.innerText = 1;
                        } else if (niveau < 60) {
                            td2.innerText = 2;
                        } else if (niveau < 90) {
                            td2.innerText = 3;
                        } else if (niveau < 120) {
                            td2.innerText = 4;
                        } else if (niveau < 150) {
                            td2.innerText = 5;
                        } else if (niveau < 180) {
                            td2.innerText = 6;
                        } else {
                            td2.innerText = 7;
                        }
                        tr.appendChild(td2);
                        // MAXIMUM
                        let td3 = document.createElement("td");
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td3.innerText = 1
                        } else if (niveau - niveauMin < 10) {
                            td3.innerText = 7;
                        } else if (niveau - niveauMin < 20) {
                            td3.innerText = 8
                        } else if (niveau - niveauMin < 30) {
                            td3.innerText = 9
                        } else if (niveau - niveauMin < 40) {
                            td3.innerText = 10
                        } else if (niveau - niveauMin < 50) {
                            td3.innerText = 11
                        } else if (niveau - niveauMin < 60) {
                            td3.innerText = 12
                        } else if (niveau - niveauMin < 70) {
                            td3.innerText = 13
                        } else if (niveau - niveauMin < 80) {
                            td3.innerText = 14
                        } else if (niveau - niveauMin < 90) {
                            td3.innerText = 15
                        } else if (niveau - niveauMin < 100) {
                            td3.innerText = 16
                        } else if (niveau - niveauMin < 110) {
                            td3.innerText = 17
                        } else if (niveau - niveauMin < 120) {
                            td3.innerText = 18
                        } else if (niveau - niveauMin < 130) {
                            td3.innerText = 19
                        } else if (niveau - niveauMin < 140) {
                            td3.innerText = 20
                        } else if (niveau - niveauMin < 150) {
                            td3.innerText = 21
                        } else if (niveau - niveauMin < 160) {
                            td3.innerText = 22
                        } else if (niveau - niveauMin < 170) {
                            td3.innerText = 23
                        } else if (niveau - niveauMin < 180) {
                            td3.innerText = 24
                        } else if (niveau - niveauMin < 190) {
                            td3.innerText = 25
                        } else if (niveau - niveauMin < 200) {
                            td3.innerText = 26
                        } else {
                            td3.innerText = 27
                        }
                        tr.appendChild(td3);
                        // MOYENNE
                        let td4 = document.createElement("td");
                        tr.appendChild(td4);
                        td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                        // PRIX/UNITE + PRIX MOYEN/RECOLTE
                        let td5 = document.createElement("td");
                        let input = document.createElement("input");
                        input.type = "number";
                        input.min = 1;
                        input.value = 1;
                        input.classList.add("entry-price");
    
                        input.addEventListener("change", function() {
                            let td6 = td5.nextSibling;
                            td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td5.appendChild(input);
                        tr.appendChild(td5);
    
                        let td6 = document.createElement("td");
                        tr.appendChild(td6);
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));
    
                        // NOMBRE DE RESSOURCES + TOTAL
                        let td7 = document.createElement("td");
                        let inp = document.createElement("input");
                        inp.type = "number";
                        inp.min = 0;
                        inp.value = 0;
                        inp.classList.add("entry-number");
    
                        inp.addEventListener("change", function() {
                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td7.appendChild(inp);
                        tr.appendChild(td7);
    
                        let td8 = document.createElement("td");
                        tr.appendChild(td8);
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
    
                        // FERMETURE
                        table.appendChild(tr);
                    }
                };
            table.classList.add("display");
            document.querySelector(".content").appendChild(table);
            break;
            case "Pêcheur":
                for (let i = 0; i < ressourcesPecheur.length; i++) {
                    if (niveau >= minLevelsPecheur[i]) {
                        let tr = document.createElement("tr");
                        // NOM RESSOURCE
                        let td = document.createElement("td");
                        td.innerText = ressourcesPecheur[i];
                        tr.appendChild(td);
                        // MINIMUM
                        let td2 = document.createElement("td");
                        let niveauMin = minLevelsPecheur[i];
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td2.innerText = 1;
                        } else if (niveau < 30) {
                            td2.innerText = 1;
                        } else if (niveau < 60) {
                            td2.innerText = 2;
                        } else if (niveau < 90) {
                            td2.innerText = 3;
                        } else if (niveau < 120) {
                            td2.innerText = 4;
                        } else if (niveau < 150) {
                            td2.innerText = 5;
                        } else if (niveau < 180) {
                            td2.innerText = 6;
                        } else {
                            td2.innerText = 7;
                        }
                        tr.appendChild(td2);
                        // MAXIMUM
                        let td3 = document.createElement("td");
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td3.innerText = 1
                        } else if (niveau - niveauMin < 10) {
                            td3.innerText = 7;
                        } else if (niveau - niveauMin < 20) {
                            td3.innerText = 8
                        } else if (niveau - niveauMin < 30) {
                            td3.innerText = 9
                        } else if (niveau - niveauMin < 40) {
                            td3.innerText = 10
                        } else if (niveau - niveauMin < 50) {
                            td3.innerText = 11
                        } else if (niveau - niveauMin < 60) {
                            td3.innerText = 12
                        } else if (niveau - niveauMin < 70) {
                            td3.innerText = 13
                        } else if (niveau - niveauMin < 80) {
                            td3.innerText = 14
                        } else if (niveau - niveauMin < 90) {
                            td3.innerText = 15
                        } else if (niveau - niveauMin < 100) {
                            td3.innerText = 16
                        } else if (niveau - niveauMin < 110) {
                            td3.innerText = 17
                        } else if (niveau - niveauMin < 120) {
                            td3.innerText = 18
                        } else if (niveau - niveauMin < 130) {
                            td3.innerText = 19
                        } else if (niveau - niveauMin < 140) {
                            td3.innerText = 20
                        } else if (niveau - niveauMin < 150) {
                            td3.innerText = 21
                        } else if (niveau - niveauMin < 160) {
                            td3.innerText = 22
                        } else if (niveau - niveauMin < 170) {
                            td3.innerText = 23
                        } else if (niveau - niveauMin < 180) {
                            td3.innerText = 24
                        } else if (niveau - niveauMin < 190) {
                            td3.innerText = 25
                        } else if (niveau - niveauMin < 200) {
                            td3.innerText = 26
                        } else {
                            td3.innerText = 27
                        }
                        tr.appendChild(td3);
                        // MOYENNE
                        let td4 = document.createElement("td");
                        tr.appendChild(td4);
                        td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                        // PRIX/UNITE + PRIX MOYEN/RECOLTE
                        let td5 = document.createElement("td");
                        let input = document.createElement("input");
                        input.type = "number";
                        input.min = 1;
                        input.value = 1;
                        input.classList.add("entry-price");
    
                        input.addEventListener("change", function() {
                            let td6 = td5.nextSibling;
                            td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td5.appendChild(input);
                        tr.appendChild(td5);
    
                        let td6 = document.createElement("td");
                        tr.appendChild(td6);
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));
    
                        // NOMBRE DE RESSOURCES + TOTAL
                        let td7 = document.createElement("td");
                        let inp = document.createElement("input");
                        inp.type = "number";
                        inp.min = 0;
                        inp.value = 0;
                        inp.classList.add("entry-number");
    
                        inp.addEventListener("change", function() {
                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td7.appendChild(inp);
                        tr.appendChild(td7);
    
                        let td8 = document.createElement("td");
                        tr.appendChild(td8);
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
    
                        // FERMETURE
                        table.appendChild(tr);
                    }
                };
            table.classList.add("display");
            document.querySelector(".content").appendChild(table);
            break;
            case "Bûcheron":
                for (let i = 0; i < ressourcesBucheron.length; i++) {
                    if (niveau >= minLevelsBucheron[i]) {
                        let tr = document.createElement("tr");
                        // NOM RESSOURCE
                        let td = document.createElement("td");
                        td.innerText = ressourcesBucheron[i];
                        tr.appendChild(td);
                        // MINIMUM
                        let td2 = document.createElement("td");
                        let niveauMin = minLevelsBucheron[i];
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td2.innerText = 1;
                        } else if (niveau < 30) {
                            td2.innerText = 1;
                        } else if (niveau < 60) {
                            td2.innerText = 2;
                        } else if (niveau < 90) {
                            td2.innerText = 3;
                        } else if (niveau < 120) {
                            td2.innerText = 4;
                        } else if (niveau < 150) {
                            td2.innerText = 5;
                        } else if (niveau < 180) {
                            td2.innerText = 6;
                        } else {
                            td2.innerText = 7;
                        }
                        tr.appendChild(td2);
                        // MAXIMUM
                        let td3 = document.createElement("td");
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td3.innerText = 1
                        } else if (niveau - niveauMin < 10) {
                            td3.innerText = 7;
                        } else if (niveau - niveauMin < 20) {
                            td3.innerText = 8
                        } else if (niveau - niveauMin < 30) {
                            td3.innerText = 9
                        } else if (niveau - niveauMin < 40) {
                            td3.innerText = 10
                        } else if (niveau - niveauMin < 50) {
                            td3.innerText = 11
                        } else if (niveau - niveauMin < 60) {
                            td3.innerText = 12
                        } else if (niveau - niveauMin < 70) {
                            td3.innerText = 13
                        } else if (niveau - niveauMin < 80) {
                            td3.innerText = 14
                        } else if (niveau - niveauMin < 90) {
                            td3.innerText = 15
                        } else if (niveau - niveauMin < 100) {
                            td3.innerText = 16
                        } else if (niveau - niveauMin < 110) {
                            td3.innerText = 17
                        } else if (niveau - niveauMin < 120) {
                            td3.innerText = 18
                        } else if (niveau - niveauMin < 130) {
                            td3.innerText = 19
                        } else if (niveau - niveauMin < 140) {
                            td3.innerText = 20
                        } else if (niveau - niveauMin < 150) {
                            td3.innerText = 21
                        } else if (niveau - niveauMin < 160) {
                            td3.innerText = 22
                        } else if (niveau - niveauMin < 170) {
                            td3.innerText = 23
                        } else if (niveau - niveauMin < 180) {
                            td3.innerText = 24
                        } else if (niveau - niveauMin < 190) {
                            td3.innerText = 25
                        } else if (niveau - niveauMin < 200) {
                            td3.innerText = 26
                        } else {
                            td3.innerText = 27
                        }
                        tr.appendChild(td3);
                        // MOYENNE
                        let td4 = document.createElement("td");
                        tr.appendChild(td4);
                        td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                        // PRIX/UNITE + PRIX MOYEN/RECOLTE
                        let td5 = document.createElement("td");
                        let input = document.createElement("input");
                        input.type = "number";
                        input.min = 1;
                        input.value = 1;
                        input.classList.add("entry-price");
    
                        input.addEventListener("change", function() {
                            let td6 = td5.nextSibling;
                            td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td5.appendChild(input);
                        tr.appendChild(td5);
    
                        let td6 = document.createElement("td");
                        tr.appendChild(td6);
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));
    
                        // NOMBRE DE RESSOURCES + TOTAL
                        let td7 = document.createElement("td");
                        let inp = document.createElement("input");
                        inp.type = "number";
                        inp.min = 0;
                        inp.value = 0;
                        inp.classList.add("entry-number");
    
                        inp.addEventListener("change", function() {
                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td7.appendChild(inp);
                        tr.appendChild(td7);
    
                        let td8 = document.createElement("td");
                        tr.appendChild(td8);
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
    
                        // FERMETURE
                        table.appendChild(tr);
                    }
                };
            table.classList.add("display");
            document.querySelector(".content").appendChild(table);
            break;
            case "Mineur":
                for (let i = 0; i < ressourcesMineur.length; i++) {
                    if (niveau >= minLevelsMineur[i]) {
                        let tr = document.createElement("tr");
                        // NOM RESSOURCE
                        let td = document.createElement("td");
                        td.innerText = ressourcesMineur[i];
                        tr.appendChild(td);
                        // MINIMUM
                        let td2 = document.createElement("td");
                        let niveauMin = minLevelsMineur[i];
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td2.innerText = 1;
                        } else if (niveau < 30) {
                            td2.innerText = 1;
                        } else if (niveau < 60) {
                            td2.innerText = 2;
                        } else if (niveau < 90) {
                            td2.innerText = 3;
                        } else if (niveau < 120) {
                            td2.innerText = 4;
                        } else if (niveau < 150) {
                            td2.innerText = 5;
                        } else if (niveau < 180) {
                            td2.innerText = 6;
                        } else {
                            td2.innerText = 7;
                        }
                        tr.appendChild(td2);
                        // MAXIMUM
                        let td3 = document.createElement("td");
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td3.innerText = 1
                        } else if (niveau - niveauMin < 10) {
                            td3.innerText = 7;
                        } else if (niveau - niveauMin < 20) {
                            td3.innerText = 8
                        } else if (niveau - niveauMin < 30) {
                            td3.innerText = 9
                        } else if (niveau - niveauMin < 40) {
                            td3.innerText = 10
                        } else if (niveau - niveauMin < 50) {
                            td3.innerText = 11
                        } else if (niveau - niveauMin < 60) {
                            td3.innerText = 12
                        } else if (niveau - niveauMin < 70) {
                            td3.innerText = 13
                        } else if (niveau - niveauMin < 80) {
                            td3.innerText = 14
                        } else if (niveau - niveauMin < 90) {
                            td3.innerText = 15
                        } else if (niveau - niveauMin < 100) {
                            td3.innerText = 16
                        } else if (niveau - niveauMin < 110) {
                            td3.innerText = 17
                        } else if (niveau - niveauMin < 120) {
                            td3.innerText = 18
                        } else if (niveau - niveauMin < 130) {
                            td3.innerText = 19
                        } else if (niveau - niveauMin < 140) {
                            td3.innerText = 20
                        } else if (niveau - niveauMin < 150) {
                            td3.innerText = 21
                        } else if (niveau - niveauMin < 160) {
                            td3.innerText = 22
                        } else if (niveau - niveauMin < 170) {
                            td3.innerText = 23
                        } else if (niveau - niveauMin < 180) {
                            td3.innerText = 24
                        } else if (niveau - niveauMin < 190) {
                            td3.innerText = 25
                        } else if (niveau - niveauMin < 200) {
                            td3.innerText = 26
                        } else {
                            td3.innerText = 27
                        }
                        tr.appendChild(td3);
                        // MOYENNE
                        let td4 = document.createElement("td");
                        tr.appendChild(td4);
                        td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                        // PRIX/UNITE + PRIX MOYEN/RECOLTE
                        let td5 = document.createElement("td");
                        let input = document.createElement("input");
                        input.type = "number";
                        input.min = 1;
                        input.value = 1;
                        input.classList.add("entry-price");
    
                        input.addEventListener("change", function() {
                            let td6 = td5.nextSibling;
                            td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td5.appendChild(input);
                        tr.appendChild(td5);
    
                        let td6 = document.createElement("td");
                        tr.appendChild(td6);
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));
    
                        // NOMBRE DE RESSOURCES + TOTAL
                        let td7 = document.createElement("td");
                        let inp = document.createElement("input");
                        inp.type = "number";
                        inp.min = 0;
                        inp.value = 0;
                        inp.classList.add("entry-number");
    
                        inp.addEventListener("change", function() {
                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td7.appendChild(inp);
                        tr.appendChild(td7);
    
                        let td8 = document.createElement("td");
                        tr.appendChild(td8);
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
    
                        // FERMETURE
                        table.appendChild(tr);
                    }
                };
            table.classList.add("display");
            content.appendChild(table);
            break;
    }
});

level.addEventListener("change", function() {
    var content = document.querySelector(".content");
    let niveau = document.querySelector("#niveau").value;

    
    // Affichage tableau métier
    if (content) {
        if (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }
    }
    let table = document.createElement("table");
    // ENTETE
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerText = "Nom de la ressource";
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.innerText = "Minimum";
    tr.appendChild(th2);
    let th3 = document.createElement("th");
    th3.innerText = "Maximum";
    tr.appendChild(th3);
    let th4 = document.createElement("th");
    th4.innerText = "Moyenne";
    tr.appendChild(th4);
    let th5 = document.createElement("th");
    th5.innerText = "Prix/unité";
    tr.appendChild(th5);
    let th6 = document.createElement("th");
    th6.innerText = "Prix moyen/récolte";
    tr.appendChild(th6);
    let th7 = document.createElement("th");
    th7.innerText = "Nombre de ressources";
    tr.appendChild(th7);
    let th8 = document.createElement("th");
    th8.innerText = "Prix total";
    tr.appendChild(th8);
    table.appendChild(tr);
    // SUITE
    switch(document.querySelector("#metiers").value) {
        case "Paysan":
            for (let i = 0; i < ressourcesPaysan.length; i++) {
                if (niveau >= minLevelsPaysan[i]) {
                    let tr = document.createElement("tr");
                    // NOM RESSOURCE
                    let td = document.createElement("td");
                    td.innerText = ressourcesPaysan[i];
                    tr.appendChild(td);
                    // MINIMUM
                    let td2 = document.createElement("td");
                    let niveauMin = minLevelsPaysan[i];
                    if (niveau - niveauMin == 0 && niveau == 200) {
                        td2.innerText = 1;
                    } else if (niveau < 30) {
                        td2.innerText = 1;
                    } else if (niveau < 60) {
                        td2.innerText = 2;
                    } else if (niveau < 90) {
                        td2.innerText = 3;
                    } else if (niveau < 120) {
                        td2.innerText = 4;
                    } else if (niveau < 150) {
                        td2.innerText = 5;
                    } else if (niveau < 180) {
                        td2.innerText = 6;
                    } else {
                        td2.innerText = 7;
                    }
                    tr.appendChild(td2);
                    // MAXIMUM
                    let td3 = document.createElement("td");
                    if (niveau - niveauMin == 0 && niveau == 200) {
                        td3.innerText = 1
                    } else if (niveau - niveauMin < 10) {
                        td3.innerText = 7;
                    } else if (niveau - niveauMin < 20) {
                        td3.innerText = 8
                    } else if (niveau - niveauMin < 30) {
                        td3.innerText = 9
                    } else if (niveau - niveauMin < 40) {
                        td3.innerText = 10
                    } else if (niveau - niveauMin < 50) {
                        td3.innerText = 11
                    } else if (niveau - niveauMin < 60) {
                        td3.innerText = 12
                    } else if (niveau - niveauMin < 70) {
                        td3.innerText = 13
                    } else if (niveau - niveauMin < 80) {
                        td3.innerText = 14
                    } else if (niveau - niveauMin < 90) {
                        td3.innerText = 15
                    } else if (niveau - niveauMin < 100) {
                        td3.innerText = 16
                    } else if (niveau - niveauMin < 110) {
                        td3.innerText = 17
                    } else if (niveau - niveauMin < 120) {
                        td3.innerText = 18
                    } else if (niveau - niveauMin < 130) {
                        td3.innerText = 19
                    } else if (niveau - niveauMin < 140) {
                        td3.innerText = 20
                    } else if (niveau - niveauMin < 150) {
                        td3.innerText = 21
                    } else if (niveau - niveauMin < 160) {
                        td3.innerText = 22
                    } else if (niveau - niveauMin < 170) {
                        td3.innerText = 23
                    } else if (niveau - niveauMin < 180) {
                        td3.innerText = 24
                    } else if (niveau - niveauMin < 190) {
                        td3.innerText = 25
                    } else if (niveau - niveauMin < 200) {
                        td3.innerText = 26
                    } else {
                        td3.innerText = 27
                    }
                    tr.appendChild(td3);
                    // MOYENNE
                    let td4 = document.createElement("td");
                    tr.appendChild(td4);
                    td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                    // PRIX/UNITE + PRIX MOYEN/RECOLTE
                    let td5 = document.createElement("td");
                    let input = document.createElement("input");
                    input.type = "number";
                    input.min = 1;
                    input.value = 1;
                    input.classList.add("entry-price");

                    input.addEventListener("change", function() {
                        let td6 = td5.nextSibling;
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                        let td8 = td7.nextSibling;
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                    });

                    td5.appendChild(input);
                    tr.appendChild(td5);

                    let td6 = document.createElement("td");
                    tr.appendChild(td6);
                    td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                    // NOMBRE DE RESSOURCES + TOTAL
                    let td7 = document.createElement("td");
                    let inp = document.createElement("input");
                    inp.type = "number";
                    inp.min = 0;
                    inp.value = 0;
                    inp.classList.add("entry-number");

                    inp.addEventListener("change", function() {
                        let td8 = td7.nextSibling;
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                    });

                    td7.appendChild(inp);
                    tr.appendChild(td7);

                    let td8 = document.createElement("td");
                    tr.appendChild(td8);
                    td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);

                    // FERMETURE
                    table.appendChild(tr);
                }
            };
            table.classList.add("display");
            document.querySelector(".content").appendChild(table);
            break;
            case "Alchimiste":
                for (let i = 0; i < ressourcesAlchimiste.length; i++) {
                    if (niveau >= minLevelsAlchimiste[i]) {
                        let tr = document.createElement("tr");
                        // NOM RESSOURCE
                        let td = document.createElement("td");
                        td.innerText = ressourcesAlchimiste[i];
                        tr.appendChild(td);
                        // MINIMUM
                        let td2 = document.createElement("td");
                        let niveauMin = minLevelsAlchimiste[i];
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td2.innerText = 1;
                        } else if (niveau < 30) {
                            td2.innerText = 1;
                        } else if (niveau < 60) {
                            td2.innerText = 2;
                        } else if (niveau < 90) {
                            td2.innerText = 3;
                        } else if (niveau < 120) {
                            td2.innerText = 4;
                        } else if (niveau < 150) {
                            td2.innerText = 5;
                        } else if (niveau < 180) {
                            td2.innerText = 6;
                        } else {
                            td2.innerText = 7;
                        }
                        tr.appendChild(td2);
                        // MAXIMUM
                        let td3 = document.createElement("td");
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td3.innerText = 1
                        } else if (niveau - niveauMin < 10) {
                            td3.innerText = 7;
                        } else if (niveau - niveauMin < 20) {
                            td3.innerText = 8
                        } else if (niveau - niveauMin < 30) {
                            td3.innerText = 9
                        } else if (niveau - niveauMin < 40) {
                            td3.innerText = 10
                        } else if (niveau - niveauMin < 50) {
                            td3.innerText = 11
                        } else if (niveau - niveauMin < 60) {
                            td3.innerText = 12
                        } else if (niveau - niveauMin < 70) {
                            td3.innerText = 13
                        } else if (niveau - niveauMin < 80) {
                            td3.innerText = 14
                        } else if (niveau - niveauMin < 90) {
                            td3.innerText = 15
                        } else if (niveau - niveauMin < 100) {
                            td3.innerText = 16
                        } else if (niveau - niveauMin < 110) {
                            td3.innerText = 17
                        } else if (niveau - niveauMin < 120) {
                            td3.innerText = 18
                        } else if (niveau - niveauMin < 130) {
                            td3.innerText = 19
                        } else if (niveau - niveauMin < 140) {
                            td3.innerText = 20
                        } else if (niveau - niveauMin < 150) {
                            td3.innerText = 21
                        } else if (niveau - niveauMin < 160) {
                            td3.innerText = 22
                        } else if (niveau - niveauMin < 170) {
                            td3.innerText = 23
                        } else if (niveau - niveauMin < 180) {
                            td3.innerText = 24
                        } else if (niveau - niveauMin < 190) {
                            td3.innerText = 25
                        } else if (niveau - niveauMin < 200) {
                            td3.innerText = 26
                        } else {
                            td3.innerText = 27
                        }
                        tr.appendChild(td3);
                        // MOYENNE
                        let td4 = document.createElement("td");
                        tr.appendChild(td4);
                        td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                        // PRIX/UNITE + PRIX MOYEN/RECOLTE
                        let td5 = document.createElement("td");
                        let input = document.createElement("input");
                        input.type = "number";
                        input.min = 1;
                        input.value = 1;
                        input.classList.add("entry-price");
    
                        input.addEventListener("change", function() {
                            let td6 = td5.nextSibling;
                            td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td5.appendChild(input);
                        tr.appendChild(td5);
    
                        let td6 = document.createElement("td");
                        tr.appendChild(td6);
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));
    
                        // NOMBRE DE RESSOURCES + TOTAL
                        let td7 = document.createElement("td");
                        let inp = document.createElement("input");
                        inp.type = "number";
                        inp.min = 0;
                        inp.value = 0;
                        inp.classList.add("entry-number");
    
                        inp.addEventListener("change", function() {
                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td7.appendChild(inp);
                        tr.appendChild(td7);
    
                        let td8 = document.createElement("td");
                        tr.appendChild(td8);
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
    
                        // FERMETURE
                        table.appendChild(tr);
                    }
                };
            table.classList.add("display");
            document.querySelector(".content").appendChild(table);
            break;
            case "Pêcheur":
                for (let i = 0; i < ressourcesPecheur.length; i++) {
                    if (niveau >= minLevelsPecheur[i]) {
                        let tr = document.createElement("tr");
                        // NOM RESSOURCE
                        let td = document.createElement("td");
                        td.innerText = ressourcesPecheur[i];
                        tr.appendChild(td);
                        // MINIMUM
                        let td2 = document.createElement("td");
                        let niveauMin = minLevelsPecheur[i];
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td2.innerText = 1;
                        } else if (niveau < 30) {
                            td2.innerText = 1;
                        } else if (niveau < 60) {
                            td2.innerText = 2;
                        } else if (niveau < 90) {
                            td2.innerText = 3;
                        } else if (niveau < 120) {
                            td2.innerText = 4;
                        } else if (niveau < 150) {
                            td2.innerText = 5;
                        } else if (niveau < 180) {
                            td2.innerText = 6;
                        } else {
                            td2.innerText = 7;
                        }
                        tr.appendChild(td2);
                        // MAXIMUM
                        let td3 = document.createElement("td");
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td3.innerText = 1
                        } else if (niveau - niveauMin < 10) {
                            td3.innerText = 7;
                        } else if (niveau - niveauMin < 20) {
                            td3.innerText = 8
                        } else if (niveau - niveauMin < 30) {
                            td3.innerText = 9
                        } else if (niveau - niveauMin < 40) {
                            td3.innerText = 10
                        } else if (niveau - niveauMin < 50) {
                            td3.innerText = 11
                        } else if (niveau - niveauMin < 60) {
                            td3.innerText = 12
                        } else if (niveau - niveauMin < 70) {
                            td3.innerText = 13
                        } else if (niveau - niveauMin < 80) {
                            td3.innerText = 14
                        } else if (niveau - niveauMin < 90) {
                            td3.innerText = 15
                        } else if (niveau - niveauMin < 100) {
                            td3.innerText = 16
                        } else if (niveau - niveauMin < 110) {
                            td3.innerText = 17
                        } else if (niveau - niveauMin < 120) {
                            td3.innerText = 18
                        } else if (niveau - niveauMin < 130) {
                            td3.innerText = 19
                        } else if (niveau - niveauMin < 140) {
                            td3.innerText = 20
                        } else if (niveau - niveauMin < 150) {
                            td3.innerText = 21
                        } else if (niveau - niveauMin < 160) {
                            td3.innerText = 22
                        } else if (niveau - niveauMin < 170) {
                            td3.innerText = 23
                        } else if (niveau - niveauMin < 180) {
                            td3.innerText = 24
                        } else if (niveau - niveauMin < 190) {
                            td3.innerText = 25
                        } else if (niveau - niveauMin < 200) {
                            td3.innerText = 26
                        } else {
                            td3.innerText = 27
                        }
                        tr.appendChild(td3);
                        // MOYENNE
                        let td4 = document.createElement("td");
                        tr.appendChild(td4);
                        td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                        // PRIX/UNITE + PRIX MOYEN/RECOLTE
                        let td5 = document.createElement("td");
                        let input = document.createElement("input");
                        input.type = "number";
                        input.min = 1;
                        input.value = 1;
                        input.classList.add("entry-price");
    
                        input.addEventListener("change", function() {
                            let td6 = td5.nextSibling;
                            td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td5.appendChild(input);
                        tr.appendChild(td5);
    
                        let td6 = document.createElement("td");
                        tr.appendChild(td6);
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));
    
                        // NOMBRE DE RESSOURCES + TOTAL
                        let td7 = document.createElement("td");
                        let inp = document.createElement("input");
                        inp.type = "number";
                        inp.min = 0;
                        inp.value = 0;
                        inp.classList.add("entry-number");
    
                        inp.addEventListener("change", function() {
                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td7.appendChild(inp);
                        tr.appendChild(td7);
    
                        let td8 = document.createElement("td");
                        tr.appendChild(td8);
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
    
                        // FERMETURE
                        table.appendChild(tr);
                    }
                };
            table.classList.add("display");
            document.querySelector(".content").appendChild(table);
            break;
            case "Bûcheron":
                for (let i = 0; i < ressourcesBucheron.length; i++) {
                    if (niveau >= minLevelsBucheron[i]) {
                        let tr = document.createElement("tr");
                        // NOM RESSOURCE
                        let td = document.createElement("td");
                        td.innerText = ressourcesBucheron[i];
                        tr.appendChild(td);
                        // MINIMUM
                        let td2 = document.createElement("td");
                        let niveauMin = minLevelsBucheron[i];
                        if (niveau - niveauMin == 0  && niveau == 200) {
                            td2.innerText = 1;
                        } else if (niveau < 30) {
                            td2.innerText = 1;
                        } else if (niveau < 60) {
                            td2.innerText = 2;
                        } else if (niveau < 90) {
                            td2.innerText = 3;
                        } else if (niveau < 120) {
                            td2.innerText = 4;
                        } else if (niveau < 150) {
                            td2.innerText = 5;
                        } else if (niveau < 180) {
                            td2.innerText = 6;
                        } else {
                            td2.innerText = 7;
                        }
                        tr.appendChild(td2);
                        // MAXIMUM
                        let td3 = document.createElement("td");
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td3.innerText = 1
                        } else if (niveau - niveauMin < 10) {
                            td3.innerText = 7;
                        } else if (niveau - niveauMin < 20) {
                            td3.innerText = 8
                        } else if (niveau - niveauMin < 30) {
                            td3.innerText = 9
                        } else if (niveau - niveauMin < 40) {
                            td3.innerText = 10
                        } else if (niveau - niveauMin < 50) {
                            td3.innerText = 11
                        } else if (niveau - niveauMin < 60) {
                            td3.innerText = 12
                        } else if (niveau - niveauMin < 70) {
                            td3.innerText = 13
                        } else if (niveau - niveauMin < 80) {
                            td3.innerText = 14
                        } else if (niveau - niveauMin < 90) {
                            td3.innerText = 15
                        } else if (niveau - niveauMin < 100) {
                            td3.innerText = 16
                        } else if (niveau - niveauMin < 110) {
                            td3.innerText = 17
                        } else if (niveau - niveauMin < 120) {
                            td3.innerText = 18
                        } else if (niveau - niveauMin < 130) {
                            td3.innerText = 19
                        } else if (niveau - niveauMin < 140) {
                            td3.innerText = 20
                        } else if (niveau - niveauMin < 150) {
                            td3.innerText = 21
                        } else if (niveau - niveauMin < 160) {
                            td3.innerText = 22
                        } else if (niveau - niveauMin < 170) {
                            td3.innerText = 23
                        } else if (niveau - niveauMin < 180) {
                            td3.innerText = 24
                        } else if (niveau - niveauMin < 190) {
                            td3.innerText = 25
                        } else if (niveau - niveauMin < 200) {
                            td3.innerText = 26
                        } else {
                            td3.innerText = 27
                        }
                        tr.appendChild(td3);
                        // MOYENNE
                        let td4 = document.createElement("td");
                        tr.appendChild(td4);
                        td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                        // PRIX/UNITE + PRIX MOYEN/RECOLTE
                        let td5 = document.createElement("td");
                        let input = document.createElement("input");
                        input.type = "number";
                        input.min = 1;
                        input.value = 1;
                        input.classList.add("entry-price");
    
                        input.addEventListener("change", function() {
                            let td6 = td5.nextSibling;
                            td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td5.appendChild(input);
                        tr.appendChild(td5);
    
                        let td6 = document.createElement("td");
                        tr.appendChild(td6);
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));
    
                        // NOMBRE DE RESSOURCES + TOTAL
                        let td7 = document.createElement("td");
                        let inp = document.createElement("input");
                        inp.type = "number";
                        inp.min = 0;
                        inp.value = 0;
                        inp.classList.add("entry-number");
    
                        inp.addEventListener("change", function() {
                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td7.appendChild(inp);
                        tr.appendChild(td7);
    
                        let td8 = document.createElement("td");
                        tr.appendChild(td8);
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
    
                        // FERMETURE
                        table.appendChild(tr);
                    }
                };
            table.classList.add("display");
            document.querySelector(".content").appendChild(table);
            break;
            case "Mineur":
                for (let i = 0; i < ressourcesMineur.length; i++) {
                    if (niveau >= minLevelsMineur[i]) {
                        let tr = document.createElement("tr");
                        // NOM RESSOURCE
                        let td = document.createElement("td");
                        td.innerText = ressourcesMineur[i];
                        tr.appendChild(td);
                        // MINIMUM
                        let td2 = document.createElement("td");
                        let niveauMin = minLevelsMineur[i];
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td2.innerText = 1;
                        } else if (niveau < 30) {
                            td2.innerText = 1;
                        } else if (niveau < 60) {
                            td2.innerText = 2;
                        } else if (niveau < 90) {
                            td2.innerText = 3;
                        } else if (niveau < 120) {
                            td2.innerText = 4;
                        } else if (niveau < 150) {
                            td2.innerText = 5;
                        } else if (niveau < 180) {
                            td2.innerText = 6;
                        } else {
                            td2.innerText = 7;
                        }
                        tr.appendChild(td2);
                        // MAXIMUM
                        let td3 = document.createElement("td");
                        if (niveau - niveauMin == 0 && niveau == 200) {
                            td3.innerText = 1
                        } else if (niveau - niveauMin < 10) {
                            td3.innerText = 7;
                        } else if (niveau - niveauMin < 20) {
                            td3.innerText = 8
                        } else if (niveau - niveauMin < 30) {
                            td3.innerText = 9
                        } else if (niveau - niveauMin < 40) {
                            td3.innerText = 10
                        } else if (niveau - niveauMin < 50) {
                            td3.innerText = 11
                        } else if (niveau - niveauMin < 60) {
                            td3.innerText = 12
                        } else if (niveau - niveauMin < 70) {
                            td3.innerText = 13
                        } else if (niveau - niveauMin < 80) {
                            td3.innerText = 14
                        } else if (niveau - niveauMin < 90) {
                            td3.innerText = 15
                        } else if (niveau - niveauMin < 100) {
                            td3.innerText = 16
                        } else if (niveau - niveauMin < 110) {
                            td3.innerText = 17
                        } else if (niveau - niveauMin < 120) {
                            td3.innerText = 18
                        } else if (niveau - niveauMin < 130) {
                            td3.innerText = 19
                        } else if (niveau - niveauMin < 140) {
                            td3.innerText = 20
                        } else if (niveau - niveauMin < 150) {
                            td3.innerText = 21
                        } else if (niveau - niveauMin < 160) {
                            td3.innerText = 22
                        } else if (niveau - niveauMin < 170) {
                            td3.innerText = 23
                        } else if (niveau - niveauMin < 180) {
                            td3.innerText = 24
                        } else if (niveau - niveauMin < 190) {
                            td3.innerText = 25
                        } else if (niveau - niveauMin < 200) {
                            td3.innerText = 26
                        } else {
                            td3.innerText = 27
                        }
                        tr.appendChild(td3);
                        // MOYENNE
                        let td4 = document.createElement("td");
                        tr.appendChild(td4);
                        td4.innerText = (parseInt(td4.previousSibling.innerText)+parseInt(td4.previousSibling.previousSibling.innerText))/2;
                        // PRIX/UNITE + PRIX MOYEN/RECOLTE
                        let td5 = document.createElement("td");
                        let input = document.createElement("input");
                        input.type = "number";
                        input.min = 1;
                        input.value = 1;
                        input.classList.add("entry-price");
    
                        input.addEventListener("change", function() {
                            let td6 = td5.nextSibling;
                            td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));

                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td5.appendChild(input);
                        tr.appendChild(td5);
    
                        let td6 = document.createElement("td");
                        tr.appendChild(td6);
                        td6.innerText = parseInt(parseInt(td6.previousSibling.firstChild.value) * parseFloat(td6.previousSibling.previousSibling.innerText));
    
                        // NOMBRE DE RESSOURCES + TOTAL
                        let td7 = document.createElement("td");
                        let inp = document.createElement("input");
                        inp.type = "number";
                        inp.min = 0;
                        inp.value = 0;
                        inp.classList.add("entry-number");
    
                        inp.addEventListener("change", function() {
                            let td8 = td7.nextSibling;
                            td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
                        });
    
                        td7.appendChild(inp);
                        tr.appendChild(td7);
    
                        let td8 = document.createElement("td");
                        tr.appendChild(td8);
                        td8.innerText = parseInt(td8.previousSibling.previousSibling.previousSibling.firstChild.value) * parseInt(td8.previousSibling.firstChild.value);
    
                        // FERMETURE
                        table.appendChild(tr);
                    }
                };
            table.classList.add("display");
            content.appendChild(table);
            break;
    }
});

var save = document.querySelector("#save");
save.addEventListener("click", function() {
    switch(document.querySelector("#metiers").value) {
        case "Paysan":
            let tabPaysan = [];
            if (localStorage.paysan != null) {
                var storedPaysan = JSON.parse(localStorage.paysan);
            }
            document.querySelectorAll(".entry-price").forEach(e => {
                tabPaysan.push(e.value);
            });
            if (tabPaysan.length < ressourcesPaysan.length) {
                let index = tabPaysan.length;
                for (let i = index; i < ressourcesPaysan.length; i++) {
                    if (storedPaysan) {
                        tabPaysan.push(storedPaysan[i]);
                    } else {
                        tabPaysan.push("0");
                    }
                }
            }
            localStorage.setItem("paysan", JSON.stringify(tabPaysan));
            break;
        case "Alchimiste":
            let tabAlchimiste = [];
            if (localStorage.alchimiste != null) {
                var storedAlchimiste = JSON.parse(localStorage.alchimiste);
            }
            document.querySelectorAll(".entry-price").forEach(e => {
                tabAlchimiste.push(e.value);
            });
            if (tabAlchimiste.length < ressourcesAlchimiste.length) {
                let index = tabAlchimiste.length;
                for (let i = index; i < ressourcesAlchimiste.length; i++) {
                    if (storedAlchimiste) {
                        tabAlchimiste.push(storedAlchimiste[i]);
                    } else {
                        tabAlchimiste.push("0");
                    }
                }
            }
            localStorage.setItem("alchimiste", JSON.stringify(tabAlchimiste));
            break;
        case "Pêcheur":
            let tabPecheur = [];
            if (localStorage.pecheur != null) {
                var storedPecheur = JSON.parse(localStorage.pecheur);
            }
            document.querySelectorAll(".entry-price").forEach(e => {
                tabPecheur.push(e.value);
            });
            if (tabPecheur.length < ressourcesPecheur.length) {
                let index = tabPecheur.length;
                for (let i = index; i < ressourcesPecheur.length; i++) {
                    if (storedPecheur) {
                        tabPecheur.push(storedPecheur[i]);
                    } else {
                        tabPecheur.push("0");
                    }
                }
            }
            localStorage.setItem("pecheur", JSON.stringify(tabPecheur));
            break;
        case "Bûcheron":
            let tabBucheron = [];
            if (localStorage.bucheron != null) {
                var storedBucheron = JSON.parse(localStorage.bucheron);
            }
            document.querySelectorAll(".entry-price").forEach(e => {
                tabBucheron.push(e.value);
            });
            if (tabBucheron.length < ressourcesBucheron.length) {
                let index = tabBucheron.length;
                for (let i = index; i < ressourcesBucheron.length; i++) {
                    if (storedBucheron) {
                        tabBucheron.push(storedBucheron[i]);
                    } else {
                        tabBucheron.push("0");
                    }
                }
            }
            localStorage.setItem("bucheron", JSON.stringify(tabBucheron));
            break;
        case "Mineur":
        let tabMineur = [];
        if (localStorage.mineur != null) {
            var storedMineur = JSON.parse(localStorage.mineur);
        }
        document.querySelectorAll(".entry-price").forEach(e => {
            tabMineur.push(e.value);
        });
        if (tabMineur.length < ressourcesMineur.length) {
            let index = tabMineur.length;
            for (let i = index; i < ressourcesMineur.length; i++) {
                if (storedMineur) {
                    tabMineur.push(storedMineur[i]);
                } else {
                    tabMineur.push("0");
                }
            }
        }
        localStorage.setItem("mineur", JSON.stringify(tabMineur));
        break;
    }
});

var load = document.querySelector("#load");
load.addEventListener("click", function() {
    switch(document.querySelector("#metiers").value) {
        case "Paysan":
            let tabPaysan = JSON.parse(localStorage.paysan);
            var cpt = 0;
            document.querySelectorAll(".entry-price").forEach(e => {
                e.value = tabPaysan[cpt];
                cpt++;
            });
            break;
        case "Alchimiste":
            let tabAlchimiste = JSON.parse(localStorage.alchimiste);
            var cpt = 0;
            document.querySelectorAll(".entry-price").forEach(e => {
                e.value = tabAlchimiste[cpt];
                cpt++;
            });
            break;
        case "Pêcheur":
            let tabPecheur = JSON.parse(localStorage.pecheur);
            var cpt = 0;
            document.querySelectorAll(".entry-price").forEach(e => {
                e.value = tabPecheur[cpt];
                cpt++;
            });
            break;
        case "Bûcheron":
            let tabBucheron = JSON.parse(localStorage.bucheron);
            var cpt = 0;
            document.querySelectorAll(".entry-price").forEach(e => {
                e.value = tabBucheron[cpt];
                cpt++;
            });
            break;
        case "Mineur":
            let tabMineur = JSON.parse(localStorage.mineur);
            var cpt = 0;
            document.querySelectorAll(".entry-price").forEach(e => {
                e.value = tabMineur[cpt];
                cpt++;
            });
            break;
    }
})