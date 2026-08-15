let teams = [];
let players = [];
let matches = [];

let openedPlayer = null;
let openedMatchTeam = null;

const purplePlayers = [];

function purpleName(name){
    return purplePlayers.includes(name)
        ? `<span class="purple-name">${name}</span>`
        : name;
}

/* =========================
   8 EQUIPES / 24 JOUEURS
========================= */

for(let i = 1; i <= 8; i++){

    let teamName;

if(i === 1){
    teamName = "Osaka";
}
else if(i === 2){
    teamName = "Bandacala";
}
else if(i === 3){
    teamName = "Los Pinguinos";
}
else if(i === 4){
    teamName = "Grizzly SDBT";
}
else if(i === 5){
    teamName = "Pornstars";
}
else if(i === 6){
    teamName = "Urssaf";
}
else if(i === 7){
    teamName = "Vicious9";
}
else if(i === 8){
    teamName = "Pelada"
}
else{
    teamName = "Team " + i;
}

    let logo = `team${i}.jpg`;

    let teamPlayers = [];

    let nbJoueurs = 3;

if(i === 1) nbJoueurs = 3; // BussGang
if(i === 2) nbJoueurs = 2; // Nexus
if(i === 3) nbJoueurs = 2; // VitriX
if(i === 4) nbJoueurs = 3; // Grizzly SDBT
if(i === 5) nbJoueurs = 2; // Vortex
if(i === 6) nbJoueurs = 3; // CP-0
if(i === 7) nbJoueurs = 3; // NSRP
if(i === 8) nbJoueurs = 2; // Sp4rks 
for(let j = 1; j <= nbJoueurs; j++){

        let playerName;

        if(i === 1){

    if(j === 1) playerName = "Grainut";
    if(j === 2) playerName = "Numb";
    if(j === 3) playerName = "Loic";
    i

}
else if(i === 2){

    if(j === 1) playerName = "Come back";
    if(j === 2) playerName = "Raphaelpro12";
    if(j === 3) playerName = "T2P3";
    

}
else if(i === 3){

    if(j === 1) playerName = "Qualites";
    if(j === 2) playerName = "Shot";
    if(j === 3) playerName = "T3P3";
    

}
else if(i === 4){

    if(j === 1) playerName = "Freezy";
    if(j === 2) playerName = "Youko";
    if(j === 3) playerName = "Wanheda";
    

}
else if(i === 5){

    if(j === 1) playerName = "Suzuki";
    if(j === 2) playerName = "Akra";
    if(j === 3) playerName = "T5P3";
    

}
else if(i === 6){

    if(j === 1) playerName = "Homn";
    if(j === 2) playerName = "Wanheda";
    if(j === 3) playerName = "Marcpoisson";
    

}
else if(i === 7){

    if(j === 1) playerName = "Alwock";
    if(j === 2) playerName = "Ragequit";
    if(j === 3) playerName = "Senzy";
    
   
}
else if(i === 8){

    if(j === 1) playerName = "Yanis";
    if(j === 2) playerName = "Shark";
    if(j === 3) playerName = "T8P3";
    
}
   
else{

    playerName = `T${i}P${j}`;

}

let history = [];

        for(let m = 1; m <= 13; m++){

            history.push({
    match:m,
    opponent:"TBD",
    k:0,
    a:0,
    d:0,
    result:"",
    played:false
});

        }

        players.push({
            name:playerName,
            team:teamName,
            k:0,
            a:0,
            m:0,
            history:history
        });

        teamPlayers.push(playerName);
    }

    teams.push({
    name:teamName,
    logo:logo,
    pts:0,
    roundsWon:0,
    roundsLost:0,
    rd:0,
    players:teamPlayers
});
}

/* =========================
   TOURNOI — ÉLIMINATION DIRECTE
   QUARTS : ALLER + RETOUR
   DEMIS  : ALLER + RETOUR
   FINALE : 1 MATCH
========================= */

matches = [

    /* =====================
       QUARTS DE FINALE
    ===================== */

    {
        id: 1,
        round: "QUARTS",
        series: "QF1",
        leg: "ALLER",

        t1: "Osaka",
        t2: "Pelada",

        s1: 0,
        s2: 0,

        mvp: null
    },

    {
        id: 2,
        round: "QUARTS",
        series: "QF1",
        leg: "RETOUR",

        t1: "Pelada",
        t2: "Osaka",

        s1: 0,
        s2: 0,

        mvp: null
    },


    {
        id: 3,
        round: "QUARTS",
        series: "QF2",
        leg: "ALLER",

        t1: "Bandacala",
        t2: "Vicious9",

        s1: 0,
        s2: 0,

        mvp: null
    },

    {
        id: 4,
        round: "QUARTS",
        series: "QF2",
        leg: "RETOUR",

        t1: "Vicious9",
        t2: "Bandacala",

        s1: 0,
        s2: 0,

        mvp: null
    },


    {
        id: 5,
        round: "QUARTS",
        series: "QF3",
        leg: "ALLER",

        t1: "Los Pinguinos",
        t2: "Urssaf",

        s1: 0,
        s2: 0,

        mvp: null
    },

    {
        id: 6,
        round: "QUARTS",
        series: "QF3",
        leg: "RETOUR",

        t1: "Urssaf",
        t2: "Los Pinguinos",

        s1: 0,
        s2: 0,

        mvp: null
    },


    {
        id: 7,
        round: "QUARTS",
        series: "QF4",
        leg: "ALLER",

        t1: "Grizzly SDBT",
        t2: "Pornstars",

        s1: 0,
        s2: 0,

        mvp: null
    },

    {
        id: 8,
        round: "QUARTS",
        series: "QF4",
        leg: "RETOUR",

        t1: "Pornstars",
        t2: "Grizzly SDBT",

        s1: 0,
        s2: 0,

        mvp: null
    },


    /* =====================
       DEMI-FINALES
    ===================== */

    {
        id: 9,
        round: "DEMIS",
        series: "SF1",
        leg: "ALLER",

        t1: null,
        t2: null,

        s1: 0,
        s2: 0,

        mvp: null
    },

    {
        id: 10,
        round: "DEMIS",
        series: "SF1",
        leg: "RETOUR",

        t1: null,
        t2: null,

        s1: 0,
        s2: 0,

        mvp: null
    },


    {
        id: 11,
        round: "DEMIS",
        series: "SF2",
        leg: "ALLER",

        t1: null,
        t2: null,

        s1: 0,
        s2: 0,

        mvp: null
    },

    {
        id: 12,
        round: "DEMIS",
        series: "SF2",
        leg: "RETOUR",

        t1: null,
        t2: null,

        s1: 0,
        s2: 0,

        mvp: null
    },


    /* =====================
       GRANDE FINALE
    ===================== */

    {
        id: 13,
        round: "FINAL",
        series: "FINAL",
        leg: "FINAL",

        t1: null,
        t2: null,

        s1: 0,
        s2: 0,

        mvp: null
    }

];

/* =========================
   GAGNANT D'UNE CONFRONTATION
========================= */

function getSeriesWinner(series){

    let seriesMatches = matches.filter(
        m => m.series === series
    );

    if(seriesMatches.length !== 2){
        return null;
    }

    // Les deux matchs doivent être terminés
    if(
        seriesMatches[0].s1 === 0 &&
        seriesMatches[0].s2 === 0
    ){
        return null;
    }

    if(
        seriesMatches[1].s1 === 0 &&
        seriesMatches[1].s2 === 0
    ){
        return null;
    }

    let teamA = seriesMatches[0].t1;
    let teamB = seriesMatches[0].t2;

    let scoreA = 0;
    let scoreB = 0;

    seriesMatches.forEach(match => {

        if(match.t1 === teamA){
            scoreA += match.s1;
            scoreB += match.s2;
        }
        else{
            scoreA += match.s2;
            scoreB += match.s1;
        }

    });

    if(scoreA > scoreB){
        return teamA;
    }

    if(scoreB > scoreA){
        return teamB;
    }

    return "DRAW";
}

/* =========================
   MISE À JOUR DU BRACKET
========================= */

function updateBracket(){

    /* =====================
       QUARTS → DEMIS
    ===================== */

    let qf1 = getSeriesWinner("QF1");
    let qf2 = getSeriesWinner("QF2");
    let qf3 = getSeriesWinner("QF3");
    let qf4 = getSeriesWinner("QF4");


    /* =====================
       DEMI-FINALE 1
       QF1 vs QF2
    ===================== */

    if(qf1 && qf1 !== "DRAW" && qf2 && qf2 !== "DRAW"){

        matches[8].t1 = qf1;
        matches[8].t2 = qf2;

        matches[9].t1 = qf2;
        matches[9].t2 = qf1;

    }


    /* =====================
       DEMI-FINALE 2
       QF3 vs QF4
    ===================== */

    if(qf3 && qf3 !== "DRAW" && qf4 && qf4 !== "DRAW"){

        matches[10].t1 = qf3;
        matches[10].t2 = qf4;

        matches[11].t1 = qf4;
        matches[11].t2 = qf3;

    }


    /* =====================
       DEMIS → FINALE
    ===================== */

    let sf1 = getSeriesWinner("SF1");
    let sf2 = getSeriesWinner("SF2");

    if(
        sf1 &&
        sf1 !== "DRAW" &&
        sf2 &&
        sf2 !== "DRAW"
    ){

        matches[12].t1 = sf1;
        matches[12].t2 = sf2;

    }

}

teams.forEach(team => {

    let teamMatches = matches.filter(
        m => m.t1 === team.name || m.t2 === team.name
    );

    team.players.forEach(playerName => {

        let player = players.find(
            p => p.name === playerName
        );

        for(let i = 0; i < teamMatches.length; i++){

            let match = teamMatches[i];

            player.history[i].opponent =
                match.t1 === team.name
                ? match.t2
                : match.t1;
        }
    });
});

/* =========================
   NAVIGATION
========================= */

function show(page){
    document.querySelectorAll(".page")
    .forEach(p => p.classList.remove("active"));

    document.getElementById(page)
    .classList.add("active");
}

/* =========================
   LEADERBOARD
========================= */

function renderPlayers(){

    document.getElementById("playerStats").innerHTML = "";

    let sorted = [...players].sort((a,b)=>{

    let kdA = a.k/(a.m||1);
    let kdB = b.k/(b.m||1);

    if(kdB !== kdA) return kdB - kdA;
    if(b.k !== a.k) return b.k - a.k;
    if(b.a !== a.a) return b.a - a.a;

    return 0;
});

    document.getElementById("playerList").innerHTML =
    sorted.map((p,i)=>{

        let kd = p.k/(p.m||1);

        let kdClass =
            kd >= 2 ? "kd-good" :
            kd >= 1 ? "kd-mid" :
            "kd-bad";

        let rankClass;

        if(i === 0) rankClass = "player-rank1";
        else if(i === 1) rankClass = "player-rank2";
        else if(i === 2) rankClass = "player-rank3";
        else if(i <= 22) rankClass = "player-rank-blue";
        else rankClass = "player-rank-red";

        let teamLogo = teams.find(t => t.name === p.team).logo;

return `
<div class="card ${rankClass}">

    <div style="display:flex;align-items:center;gap:12px;">

        <img src="${teamLogo}"
             style="width:45px;height:45px;border-radius:50%;object-fit:cover;">

        <div>
            ${i+1}. ${purpleName(p.name)} (${p.team})<br>
            K:${p.k} A:${p.a} D:${p.m}<br>

            <span class="${kdClass}">
                KD ${kd.toFixed(2)}
            </span>
        </div>

    </div>

</div>
`;
    }).join("");
}

/* =========================
   STATS
========================= */

function renderStatsMenu(){

    document.getElementById("playerList").innerHTML = "";

    let sorted = [...players].sort((a,b)=>{

    let kdA = a.k/(a.m||1);
    let kdB = b.k/(b.m||1);

    if(kdB !== kdA) return kdB - kdA;
    if(b.k !== a.k) return b.k - a.k;
    if(b.a !== a.a) return b.a - a.a;

    return 0;
});

    document.getElementById("playerStats").innerHTML =
    sorted.map((p,i)=>{

        let rankClass;

        if(i === 0) rankClass = "player-rank1";
        else if(i === 1) rankClass = "player-rank2";
        else if(i === 2) rankClass = "player-rank3";
        else if(i <= 22) rankClass = "player-rank-blue";
        else rankClass = "player-rank-red";

let teamLogo = teams.find(t => t.name === p.team).logo;
       
        return `
        <div class="card clickable ${rankClass} ${openedPlayer === p.name ? 'player-open' : ''}"
             onclick="togglePlayer('${p.name}')">

            <div style="display:flex;align-items:center;gap:12px;">

    <img src="${teamLogo}"
         style="width:45px;height:45px;border-radius:50%;object-fit:cover;">

    <div>
        <b>${i+1}. ${purpleName(p.name)}</b><br>
        (${p.team})
    </div>

</div>

            ${openedPlayer === p.name ? `

                <hr>

                <b>Total :</b><br>
                Kills : ${p.k}<br>
                Assists : ${p.a}<br>
                Deaths : ${p.m}<br><br>

                <b>KD :
                ${(p.k/(p.m||1)).toFixed(2)}
                </b>

                <hr>

                ${p.history.map(match=>`
    <div class="card" style="
    margin-top:10px;
    position:relative;
    overflow:hidden;
    border:2px solid ${
        match.result === "WIN"
            ? "#22c55e"
            : match.result === "LOSS"
                ? "#ef4444"
                : "transparent"
    };
">

    <div style="
        position:absolute;
        inset:0;
        pointer-events:none;
        border-radius:inherit;
        box-shadow:inset 0 0 18px ${
            match.result === "WIN"
                ? "rgba(34,197,94,.45)"
                : match.result === "LOSS"
                    ? "rgba(239,68,68,.45)"
                    : "transparent"
        };
    "></div>

    Match ${match.match}<br>

        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">

    <span>vs ${match.opponent}</span>

    <div style="display:flex;align-items:center;gap:8px;">

        ${
    match.result
    ? `<span style="
        color:${match.result==="WIN" ? "#22c55e" : "#ef4444"};
        font-size:11px;
        font-weight:bold;">
        ${match.result}
      </span>`
    : ""
}

        <img src="${teams.find(t => t.name === match.opponent)?.logo}"
             width="32"
             height="32"
             style="border-radius:50%;object-fit:cover;">

    </div>

</div>

        ${match.k} K<br>
        ${match.a} A<br>
        ${match.d} D
    </div>
`).join("")}

            ` : ""}

        </div>
        `;
    }).join("");
}

/* =========================
   OUVRIR / FERMER STATS
========================= */

function togglePlayer(name){

    if(openedPlayer === name){
        openedPlayer = null;
    }else{
        openedPlayer = name;
    }

    renderStatsMenu();
}

function toggleMatchTeam(teamName){

    if(openedMatchTeam === teamName){
        openedMatchTeam = null;
    }else{
        openedMatchTeam = teamName;
    }

    renderMatches();
}

/* =========================
   TEAMS
========================= */

function renderTeams(){

    document.getElementById("teamList").innerHTML =
    teams.map(t=>`
        <div class="card">
            <img src="${t.logo}" width="35">
            <b>${t.name}</b><br>

            👥 ${t.players.slice(0,3).map(purpleName).join(" • ")}

${t.players[3] ? `<br>🔄 ${purpleName(t.players[3])}` : ""}
        </div>
    `).join("");
}

/* =========================
   AFFICHAGE DU TOURNOI
========================= */

function renderMatches(){

    updateBracket();

    let html = `

        <div class="tournament-title">

            <div class="tournament-icon">
                🏆
            </div>

            <div>
                <h1>TOURNOI #1</h1>
                <span>ÉLIMINATION DIRECTE</span>
            </div>

        </div>

    `;


    /* =====================
       FONCTION CARTE MATCH
    ===================== */

    function renderMatch(match){

        let pending =
            !match.t1 ||
            !match.t2;

        let played =
            match.s1 !== 0 ||
            match.s2 !== 0;

        let winner = null;

        if(played){

            if(match.s1 > match.s2){
                winner = match.t1;
            }
            else if(match.s2 > match.s1){
                winner = match.t2;
            }

        }


        let borderColor =
            !played
                ? "rgba(255,255,255,.10)"
                : winner
                    ? "#22c55e"
                    : "#ef4444";


        return `

        <div class="card tournament-match"
             style="
                border:2px solid ${borderColor};
                box-shadow:0 0 15px ${played ? borderColor : "transparent"};
             ">

            <div class="match-top">

                <span class="match-label">
                    ${match.series}
                </span>

                <span class="match-leg">
                    ${match.leg}
                </span>

            </div>


            <div class="match-team-line">

                <div class="match-team">

                    ${
                        match.t1
                        ? `
                            <img
                                src="${
                                    teams.find(
                                        t => t.name === match.t1
                                    )?.logo
                                }"
                                class="match-logo"
                            >

                            <span>
                                ${match.t1}
                            </span>
                        `
                        :
                        `
                            <span class="tbd">
                                TBD
                            </span>
                        `
                    }

                </div>


                <div class="match-score">

                    ${
                        pending
                        ? "VS"
                        :
                        `
                        <span class="${
                            match.s1 > match.s2
                                ? "score-win"
                                : match.s1 < match.s2
                                    ? "score-lose"
                                    : "score-normal"
                        }">
                            ${match.s1}
                        </span>

                        <span class="score-separator">
                            -
                        </span>

                        <span class="${
                            match.s2 > match.s1
                                ? "score-win"
                                : match.s2 < match.s1
                                    ? "score-lose"
                                    : "score-normal"
                        }">
                            ${match.s2}
                        </span>
                        `
                    }

                </div>


                <div class="match-team right">

                    ${
                        match.t2
                        ? `
                            <span>
                                ${match.t2}
                            </span>

                            <img
                                src="${
                                    teams.find(
                                        t => t.name === match.t2
                                    )?.logo
                                }"
                                class="match-logo"
                            >
                        `
                        :
                        `
                            <span class="tbd">
                                TBD
                            </span>
                        `
                    }

                </div>

            </div>


            ${
                played && winner
                ?
                `
                <div class="match-result win">

                    🟢 ${winner} QUALIFIÉ

                </div>
                `
                :
                `
                <div class="match-result pending">

                    ⏳ ${pending ? "EN ATTENTE" : "À JOUER"}

                </div>
                `
            }


            ${
                match.mvp
                ?
                `
                <div class="match-mvp">

                    <div class="mvp-title">
                        👑 MVP
                    </div>

                    <b>
                        ${purpleName(match.mvp.name)}
                    </b>

                    <div>
                        ${match.mvp.k} K
                        •
                        ${match.mvp.a} A
                        •
                        ${match.mvp.d} D
                        •
                        <span class="mvp-kd">
                            KD ${match.mvp.kd}
                        </span>
                    </div>

                </div>
                `
                :
                ""
            }

        </div>

        `;

    }


    /* =====================
       QUARTS
    ===================== */

    html += `

        <div class="round-title">

            <span>⚔️</span>

            <div>
                <b>QUARTS DE FINALE</b>
                <small>MATCH ALLER + RETOUR</small>
            </div>

        </div>

        <div class="tournament-grid">

    `;

    matches
        .filter(m => m.round === "QUARTS")
        .forEach(match => {

            html += renderMatch(match);

        });

    html += `</div>`;


    /* =====================
       DEMIS
    ===================== */

    html += `

        <div class="round-title">

            <span>⚔️</span>

            <div>
                <b>DEMI-FINALES</b>
                <small>MATCH ALLER + RETOUR</small>
            </div>

        </div>

        <div class="tournament-grid">

    `;

    matches
        .filter(m => m.round === "DEMIS")
        .forEach(match => {

            html += renderMatch(match);

        });

    html += `</div>`;


    /* =====================
       FINALE
    ===================== */

    html += `

        <div class="round-title final-title">

            <span>👑</span>

            <div>
                <b>GRANDE FINALE</b>
                <small>UN SEUL MATCH</small>
            </div>

        </div>

        <div class="final-container">

    `;

    matches
        .filter(m => m.round === "FINAL")
        .forEach(match => {

            html += renderMatch(match);

        });

    html += `</div>`;


    /* =====================
       CHAMPION
    ===================== */

    let final = matches[12];

    if(
        final.s1 !== 0 ||
        final.s2 !== 0
    ){

        let champion =
            final.s1 > final.s2
                ? final.t1
                : final.t2;

        html += `

            <div class="champion-card">

                <div class="champion-crown">
                    🏆
                </div>

                <div class="champion-label">
                    CHAMPION DU TOURNOI
                </div>

                <div class="champion-name">
                    ${champion}
                </div>

            </div>

        `;

    }


    document.getElementById("matchList").innerHTML = html;

}

/* =========================
   RANKINGS
========================= */

function renderRanking(){

    let sorted = [...teams]
.sort((a,b)=>{

    if(b.pts !== a.pts){
        return b.pts - a.pts;
    }

    if(b.rd !== a.rd){
        return b.rd - a.rd;
    }

    return 0;
});

    document.getElementById("rankingList").innerHTML =
    sorted.map((t,i)=>{

        let cls;
        let ptsClass;

        if(i === 0){
            cls = "rank1";
            ptsClass = "rank1-points";
        }
        else if(i === 1){
            cls = "rank2";
            ptsClass = "rank2-points";
        }
        else if(i === 2){
            cls = "rank3";
            ptsClass = "rank3-points";
        }
        else if(i <= 6){
            cls = "rank-blue";
            ptsClass = "rank-blue-points";
        }
        else{
            cls = "rank-red";
            ptsClass = "rank-red-points";
        }

        return `
<div class="card ${cls} ranking-card">

    <div class="ranking-left">
        ${i+1}.
        <img src="${t.logo}" width="25">
        ${t.name}
    </div>

    <div class="ranking-right">
        <span class="${ptsClass}">
            ${t.pts} pts
        </span>

        |

        <span class="${ptsClass}">
            RD ${t.rd >= 0 ? "+" : ""}${t.rd}
        </span>
    </div>

</div>
`;
    }).join("");
}

function updateMatch(matchNumber, score1, score2, stats1, stats2){

    let match = matches[matchNumber - 1];

    if(!match) return;

    if(!match.t1 || !match.t2){
    return;
}

    // Empêche de compter deux fois le même match
    if(match.s1 !== 0 || match.s2 !== 0){
        return;
    }

    // Mise à jour du score
    match.s1 = score1;
    match.s2 = score2;

    // Recherche des équipes
    let team1 = teams.find(t => t.name === match.t1);
    let team2 = teams.find(t => t.name === match.t2);

    // Points championnat
    if(score1 > score2){
        team1.pts += 3;
    }else{
        team2.pts += 3;
    }

    // RD
    team1.rd += score1 - score2;
    team2.rd += score2 - score1;

    team1.roundsWon += score1;
    team1.roundsLost += score2;

    team2.roundsWon += score2;
    team2.roundsLost += score1;

    // Stats équipe 1
    stats1.forEach(stat => {

        let player = players.find(
            p => p.name === stat[0]
        );

        if(!player) return;

        player.k += stat[1];
        player.a += stat[2];
        player.m += stat[3];

        let historyMatch = player.history.find(
            h => h.opponent === team2.name &&
                 !h.played
        );

        if(historyMatch){
            historyMatch.k = stat[1];
            historyMatch.a = stat[2];
            historyMatch.d = stat[3];
            historyMatch.result = score1 === 13 ? "WIN" : "LOSS";
            historyMatch.played = true;
        }
    });

    // Stats équipe 2
    stats2.forEach(stat => {

        let player = players.find(
            p => p.name === stat[0]
        );

        if(!player) return;

        player.k += stat[1];
        player.a += stat[2];
        player.m += stat[3];

        let historyMatch = player.history.find(
            h => h.opponent === team1.name &&
                 !h.played
        );

        if(historyMatch){
            historyMatch.k = stat[1];
            historyMatch.a = stat[2];
            historyMatch.d = stat[3];
            historyMatch.result = score2 === 13 ? "WIN" : "LOSS";
            historyMatch.played = true;
        }
    });

// =========================
// MVP AUTOMATIQUE
// =========================

let allPlayers = [
    ...stats1,
    ...stats2
];

let best = allPlayers[0];

allPlayers.forEach(stat => {

    let bestKD = best[1] / (best[3] || 1);
    let statKD = stat[1] / (stat[3] || 1);

    if(
        statKD > bestKD ||

        (
            statKD === bestKD &&
            stat[1] > best[1]
        ) ||

        (
            statKD === bestKD &&
            stat[1] === best[1] &&
            stat[2] > best[2]
        )

    ){
        best = stat;
    }

});

match.mvp = {
    name: best[0],
    k: best[1],
    a: best[2],
    d: best[3],
    kd: (best[1] / (best[3] || 1)).toFixed(2)
};
   
    updateBracket();

renderPlayers();
renderStatsMenu();
renderMatches();
renderRanking();

}

/* =========================
   INIT
========================= */
function forfeitTeam(teamName){

    matches.forEach((match,index)=>{

        // Ne touche pas aux matchs déjà joués
        if(match.s1 !== 0 || match.s2 !== 0) return;

        if(match.t1 !== teamName && match.t2 !== teamName) return;

        let winner =
            match.t1 === teamName
            ? match.t2
            : match.t1;

        let winnerPlayers = teams.find(t=>t.name===winner).players;

        let loserPlayers = teams.find(t=>t.name===teamName).players;

        if(match.t1 === teamName){

            updateMatch(
                index+1,
                0,
                13,

                loserPlayers.map(p=>[p,0,0,0]),
                winnerPlayers.map(p=>[p,0,0,0])

            );

        }else{

            updateMatch(
                index+1,
                13,
                0,

                winnerPlayers.map(p=>[p,0,0,0]),
                loserPlayers.map(p=>[p,0,0,0])

            );

        }

    });

}

forfeitTeam("Sp4rks");

window.onload = () => {
    renderTeams();
    renderPlayers();
    renderMatches();
    renderRanking();
};
