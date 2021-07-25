var objDados = {
    metodos: [
            {metodo: "<strong>Meditacão:</strong> a meditação é um método muito eficaz para acalmar os nervos. Ela consiste em focar a mente apenas em sua respiração, sem pensar em mais nada. Para poder meditar, você deve posicionar-se de maneira confortável, em um ambiente calmo, é recomendável praticar a meditação todos os dias no mesmo horário. Alguns benefícios da meditação são: maior atenção, diminuição da ansiedade, melhorar a qualidade do sono, redução da intensidade da depressão."},
            {metodo: "<strong>Ecercícios físicos:</strong> praticar exercícios físicos de maneira regular pode reduzir os efeitos dos sintomas da depressão, ansiedade e estresse. Isso acontece pelo fato de que os exercícios físicos alteram as partes do cérebro que controlam seu nível de serotonina e noradrenalina, que aliviam o estresse, ansiedade e depressão. A prática de exercícios físicos também aumentam a autoestima, além de fazer bem para os músculos, ossos e auxiliar na perda de peso. "},
            {metodo: "<strong>Escrever:</strong> escrever o que está sentindo ajuda a neutralizar o sentimento negativo, seja tristeza, ansiedade ou qualquer outra coisa. Ao passar algo para o papel você se sente mais tranquilo e aquele sentimento perde consideravelmente seu peso. É interessante olhar no final do dia as suas anotações e refletir um pouco a respeito."},
            {metodo: "<strong>Chá:</strong> existem chás calmantes que auxiliam no combate de do estresse e ansiedade, esses calmantes são capazes de acalmar o sistema nervoso. Alguns chás calmantes são: chá de pimenta-do-reino, chá de pimenta caiena, chá de hortelã, chá de camomila, chá de alecrim, chá maracujá, entre outros. "},
            {metodo: "<strong>Remédios:</strong> se nenhuma outra opção funcionou, você pode recorrer aos remédios, no entanto, ele é recomendável apenas em casos extremos. Os medicamentos devem ser recomendados por profissionais da área. Alguns remédios calmantes são: Benzodiazepinas, são os tipos mais comuns de remédios para ansiedade, eles diminuem a atividade elétrica do cérebro, em outras palavras, desaceleram as atividades do sistema nervoso. Sertralina, esse remédio é utilizado no tratamento da depressão e possui alguns efeitos colaterais como a falta de apetite, náusea, insônia, diarréia, tontura e alteração da função sexual. "}]
};

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var clients = {};

app.get('/', function(req, res){
  res.send('O servidor está online!');
});

io.on("connection", function (client) {
    client.on("join", function(name){
    	  console.log("Joined: " + name);
        clients[client.id] = name;
        client.emit("update", "Você entrou no servidor.");
        client.broadcast.emit("update", name + " entrou no servidor.")
    });

    client.on("send", function(msg){
    	  console.log("Message: " + msg);
        client.broadcast.emit("chat", clients[client.id], msg);
    });

    client.on("disconnect", function(){
      	if(clients[client.id] != undefined) {
           io.emit("update", clients[client.id] + " saiu do servidor.");
        }
        delete clients[client.id];
    });
});


http.listen(3000, function(){
  console.log('Servidor aberto na porta: 3000');
});
