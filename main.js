let pronoun = ['the', 'our', 'of'];
let adj = ['great', 'big', 'intelligent'];
let noun = ['racoon', 'batman', 'homero'];
let ext = ['.com','.cl','.dev'];

let combinaciones = '';

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < ext.length; l++) {
                let combinacion = pronoun[i] + adj[j] + noun[k] + ext[l];
                combinaciones += combinacion;
                console.log(combinacion);
            }
        }
    }
}





