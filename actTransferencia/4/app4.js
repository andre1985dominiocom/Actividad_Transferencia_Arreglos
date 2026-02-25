import ls from 'prompt-sync';
const cs = ls();

let celular = {
    marca : "Samsung",
    modelo : 2025,
    año : 2025,
    estado : "bueno"
}

for (const cel in celular) {
    console.log(cel);
}