function afficherPage(pageId) {//si on clique sur accueil la page d'accueil s'affiche sinon les stat s'affiche
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');//ajouter à la classe de pageId active
}

function changerEquipe(equipeId) {//presque la meme chose faite ici pour les classes equipe
    console.log("Changement d'équipe vers:", equipeId);
    
    // Cacher toutes les équipes
    document.querySelectorAll('[id="real"], [id="PSG"], [id="bayern"]').forEach(div => {//selectionner tout les id des equipes
        div.classList.remove('equipe-active');//supprimer classe equipe-active à tout les class situées dans les balises div
        div.classList.add('equipe');
    });
    const equipeAffichee=document.getElementById(equipeId)
    if (equipeAffichee) {
        console.log("Équipe trouvée:", equipeAffichee);
        equipeAffichee.classList.remove('equipe');
        equipeAffichee.classList.add('equipe-active');
        
        changerPeriode('mois');
    } else {
        console.log("Équipe NON trouvée:", equipeId);
    }
}
// Fonctions de dessin pour Real
function dessinerperformance_moisreal(){
    const canvas = document.getElementById("performance_real");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);//effacer le canvas avant de redessiner
    const performance = [65, 59, 80, 81, 56, 55, 40, 70, 65, 72, 68, 75];//les valeurs
    const mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Dec"];
    
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - performance[0] * canvas.height / 100);
    
    for(let i = 1; i < 12; i++){
        let x = i * canvas.width / 11;//calcul position x
        let y = canvas.height - performance[i] * canvas.height / 100;//calculer la position y
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    //ajout des points et des labels sur le graphe
    const marge = 50;
    for(let i = 0; i < 12; i++){
        let x = i * canvas.width / 11;
        let y = canvas.height - performance[i] * canvas.height / 100;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);//dessiner un point
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(mois[i], x, canvas.height - marge + 20);//label du mois
        ctx.fillStyle = "red";
        ctx.fillText(performance[i].toString() + "%", x, y - 10);//valeur du pourcentage
        
        ctx.fillStyle = "red";
    }
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Mois", canvas.width / 2, canvas.height - 10);
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Performance (%)", 0, 0);
    ctx.restore();
}
//dessiner le graphe à barre pour les resultats
function dessinerresulat_moisreal(){
    const canvas = document.getElementById('resultat_real');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const donnees = [8, 2, 1];
    const couleurs = ['#415a77', '#778da9', '#b56576'];
    const labels = ['Victoires', 'Nuls', 'Défaites'];
    ctx.clearRect(0, 0, 400, 400);
    
    for (let i = 0; i < 3; i++) {
        const hauteur = donnees[i] * 20; //hauteur proportionnelle aux données
        const x = 80 + i * 100; //position x
        const y = 320 - hauteur; //position calculée depuis le bas
        ctx.fillStyle = couleurs[i];
        ctx.fillRect(x, y, 60, hauteur); //dessine la barre 
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(donnees[i], x + 30, y - 10);//valeur au dessus de la barre
        ctx.font = '14px Arial';
        ctx.fillText(labels[i], x + 30, 350);//label en bas
    }
    ctx.fillStyle = '#333';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Statistiques des Matchs - Janvier', 200, 30);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, 320);
    ctx.lineTo(350, 320);
    ctx.stroke();
}

function dessinerstat_moisreal(){
    const canvas = document.getElementById('stat_real');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const donnees = [12, 19, 3, 5, 2, 3];
    const couleurs = ['#355070', '#6d597a', '#b56576','#e56b6f','#eaac8b','#f4f1de']; 
    const labels = ['Buts', 'Tirs','Passes','Fautes','Corners','Cartons'];
    ctx.clearRect(0, 0, 400, 400);
    
    for (let i = 0; i < 6; i++) {
        const hauteur = donnees[i] * 10;
        const x = 50 + i * 50; 
        const y = 320 - hauteur; 
        ctx.fillStyle = couleurs[i];
        ctx.fillRect(x, y, 40, hauteur); 
        ctx.fillStyle = 'black';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(donnees[i], x + 20, y - 10);
        ctx.font = '10px Arial';
        ctx.fillText(labels[i], x + 20, 350);
    }
    ctx.fillStyle = '#333';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Stats des matchs - Janvier', 200, 30);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(30, 320);
    ctx.lineTo(370, 320);
    ctx.stroke();
}

function dessinerperformance_anneereal(){
    const canvas = document.getElementById("performance_real");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const performance = [68, 65, 78, 82, 58];
    const annee = [2020, 2021, 2022, 2023, 2024];
    
    const marge = 50;//espacement autour du graphe pour les labels , eviter que le graphe touche les bords du canvas
    const largeurUtile = canvas.width - 2 * marge;
    const hauteurUtile = canvas.height - 2 * marge;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(marge, marge);
    ctx.lineTo(marge, canvas.height - marge);
    ctx.lineTo(canvas.width - marge, canvas.height - marge);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for(let i = 0; i < performance.length; i++){
        let x = marge + (i * largeurUtile / (performance.length - 1));
        let y = canvas.height - marge - (performance[i] * hauteurUtile / 100);
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    for(let i = 0; i < performance.length; i++){
        let x = marge + (i * largeurUtile / (performance.length - 1));
        let y = canvas.height - marge - (performance[i] * hauteurUtile / 100);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "black";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(annee[i].toString(), x, canvas.height - marge + 20);
        ctx.fillText(performance[i].toString() + "%", x, y - 10);
        
        ctx.fillStyle = "red";
    }
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Année", canvas.width / 2, canvas.height - 10);
    
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Performance (%)", 0, 0);
    ctx.restore();
}

function dessinerresulat_anneereal(){
    const canvas = document.getElementById('resultat_real');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const donnees = [10, 5, 4];
    const couleurs = ['#415a77', '#778da9', '#e0e1dd']; 
    const labels = ['Victoires', 'Nuls', 'Défaites'];
    ctx.clearRect(0, 0, 400, 400);
    for (let i = 0; i < 3; i++) {
        const hauteur = donnees[i] * 20; 
        const x = 80 + i * 100; 
        const y = 320 - hauteur; 
        ctx.fillStyle = couleurs[i];
        ctx.fillRect(x, y, 60, hauteur); 
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(donnees[i], x + 30, y - 10);
        ctx.font = '14px Arial';
        ctx.fillText(labels[i], x + 30, 350);
    }
    ctx.fillStyle = '#333';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Statistiques des Matchs En 2023', 200, 30);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, 320);
    ctx.lineTo(350, 320);
    ctx.stroke();
}

function dessinerstat_anneereal(){
    const canvas = document.getElementById('stat_real');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const donnees = [145, 95, 25, 42, 18, 32];
    const couleurs = ['#355070', '#6d597a', '#b56576','#e56b6f','#eaac8b','#f4f1de']; 
    const labels = ['Buts', 'Tirs','Passes','Fautes','Corners','Cartons'];
    ctx.clearRect(0, 0, 400, 400);
    
    for (let i = 0; i < 6; i++) {
        const hauteur = donnees[i] * 2;
        const x = 50 + i * 50; 
        const y = 320 - hauteur; 
        ctx.fillStyle = couleurs[i];
        ctx.fillRect(x, y, 40, hauteur); 
        ctx.fillStyle = 'black';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(donnees[i], x + 20, y - 10);
        ctx.font = '10px Arial';
        ctx.fillText(labels[i], x + 20, 350);
    }
    ctx.fillStyle = '#333';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Stats des matchs - 2023', 200, 30);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(30, 320);
    ctx.lineTo(370, 320);
    ctx.stroke();
}