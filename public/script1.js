var s = 0;
var a = 0;
var b = 0;
var level = 0;
var operacion = 0; 
var count = 10;

function toMenu() {
  count = 10;
  s = 0;
  var start = document.getElementById("start");
  var menu = document.getElementById("menu");
  var menu1 = document.getElementById("menu1");
  var tituloCuento = document.getElementById("tituloCuento");
  start.style.display = "none";
  menu.style.display = "inline";
  menu1.style.display = "none";
  tituloCuento.style.display = "none";
}

function toMenu1(n) {
  operacion = n; 
  count = 10;
  s = 0;
  var start = document.getElementById("start");
  var menu = document.getElementById("menu");
  var menu1 = document.getElementById("menu1");
  var tituloCuento = document.getElementById("tituloCuento");
  var contenidoCuento = document.getElementById("contenido");
  var answer = document.getElementById("answer");
  start.style.display = "none";
  menu.style.display = "none";
  menu1.style.display = "inline"; 
  tituloCuento.style.display = "none";
  contenidoCuento.style.display = "none";
  answer.style.display = "none";  
}

function quiz(n) {
  level = n;
  count = 10;
  var menu = document.getElementById("menu");
  var menu1 = document.getElementById("menu1");
  menu.style.display = "none";
  menu1.style.display = "none"; 
  var tituloCuento = document.getElementById("tituloCuento");    
  var contenidoCuento = document.getElementById("contenido");    
    
  if(operacion === 0){
      if(level === 0){
          tituloCuento.innerHTML = "Caperucita Roja";
          tituloCuento.style.display = "inline";
          contenidoCuento.style.display = "block";
          contenidoCuento.innerHTML = "Había una vez una dulce niña que quería mucho a su madre y a su abuela. Les ayudaba en todo lo que podía y como era tan buena el día de su cumpleaños su abuela le regaló una caperuza roja. Como le gustaba tanto e iba con ella a todas partes, pronto todos empezaron a llamarla Caperucita roja.<br><br>Un día la abuela de Caperucita, que vivía en el bosque, enfermó y la madre de Caperucita le pidió que le llevara una cesta con una torta y un tarro de mantequilla. Caperucita aceptó encantada.<br><br>- Ten mucho cuidado Caperucita, y no te entretengas en el bosque.<br>- ¡Sí mamá!<br><br>La niña caminaba tranquilamente por el bosque cuando el lobo la vio y se acercó a ella. <br><br>- ¿Dónde vas Caperucita?<br>- A casa de mi abuelita a llevarle esta cesta con una torta y mantequilla.<br>- Yo también quería ir a verla…. así que, ¿por qué no hacemos una carrera? Tú ve por ese camino de aquí que yo iré por este otro.<br>- ¡Vale!<br><br>El lobo mandó a Caperucita por el camino más largo y llegó antes que ella a casa de la abuelita. De modo que se hizo pasar por la pequeña y llamó a la puerta. Aunque lo que no sabía es que un cazador lo había visto llegar.<br><br>- ¿Quién es?, contestó la abuelita<br>- Soy yo, Caperucita - dijo el lobo<br>- Que bien hija mía. Pasa, pasa<br><br>El lobo entró, se abalanzó sobre la abuelita y se la comió de un bocado. Se puso su camisón y se metió en la cama a esperar a que llegara Caperucita.<br><br>La pequeña se entretuvo en el bosque cogiendo avellanas y flores y por eso tardó en llegar un poco más. Al llegar llamó a la puerta.<br><br>- ¿Quién es?, contestó el lobo tratando de afinar su voz<br>- Soy yo, Caperucita. Te traigo una torta y un tarrito de mantequilla.<br>- Qué bien hija mía. Pasa, pasa<br><br>Cuando Caperucita entró encontró diferente a la abuelita, aunque no supo bien porqué. <br><br>- ¡Abuelita, qué ojos más grandes tienes!<br>- Sí, son para verte mejor hija mía<br>- ¡Abuelita, qué orejas tan grandes tienes!<br>- Claro, son para oírte mejor…<br>- Pero abuelita, ¡qué dientes más grandes tienes!<br>- ¡¡Son para comerte mejor!!<br><br>En cuanto dijo esto el lobo se lanzó sobre Caperucita y se la comió también. Su estómago estaba tan lleno que el lobo se quedó dormido.<br><br>En ese momento el cazador que lo había visto entrar en la casa de la abuelita comenzó a preocuparse. Había pasado mucho rato y tratándose de un lobo…¡Dios sabía que podía haber pasado! De modo que entró dentro de la casa. Cuando llegó allí y vio al lobo con la panza hinchada se imaginó lo ocurrido, así que cogió su cuchillo y abrió la tripa del animal para sacar a Caperucita y su abuelita. <br><br>- Hay que darle un buen castigo a este lobo, pensó el cazador.<br><br>De modo que le llenó la tripa de piedras y se la volvió a coser. Cuando el lobo despertó de su siesta tenía mucha sed y al acercarse al río, ¡zas! se cayó dentro y se ahogó. <br><br>Caperucita volvió a ver a su madre y su abuelita y desde entonces prometió hacer siempre caso a lo que le dijera su madre.";
      }
      if(level === 1){
          tituloCuento.innerHTML = "Los Tres Chanchitos";
          tituloCuento.style.display = "inline";
          contenidoCuento.style.display = "block";
          contenidoCuento.innerHTML = "Había una vez tres hermanos cerditos que vivían en el bosque. Como el malvado lobo siempre los estaba persiguiendo para comérselos dijo un día el mayor:<br><br>- Tenemos que hacer una casa para protegernos de lobo. Así podremos escondernos dentro de ella cada vez que el lobo aparezca por aquí.<br><br>A los otros dos les pareció muy buena idea, pero no se ponían de acuerdo respecto a qué material utilizar. Al final, y para no discutir, decidieron que cada uno la hiciera de lo que quisiese.<br><br>El más pequeño optó por utilizar paja, para no tardar mucho y poder irse a jugar después.<br><br>El mediano prefirió construirla de madera, que era más resistente que la paja y tampoco le llevaría mucho tiempo hacerla. Pero el mayor pensó que aunque tardara más que sus hermanos, lo mejor era hacer una casa resistente y fuerte con ladrillos.<br><br>- Además así podré hacer una chimenea con la que calentarme en invierno, pensó el cerdito.<br><br>Cuando los tres acabaron sus casas se metieron cada uno en la suya y entonces apareció por ahí el malvado lobo. Se dirigió a la de paja y llamó a la puerta:<br><br>- Anda cerdito se bueno y déjame entrar...<br><br>- ¡No! ¡Eso ni pensarlo!<br><br>- ¡Pues soplaré y soplaré y la casita derribaré!<br><br>Y el lobo empezó a soplar y a estornudar,  la débil casa acabó viniéndose abajo. Pero el cerdito echó a correr y se refugió en la casa de su hermano mediano, que estaba hecha de madera.<br><br>- Anda cerditos sed buenos y dejarme entrar...<br><br>- ¡No! ¡Eso ni pensarlo!, dijeron los dos<br><br>- ¡Pues soplaré y soplaré y la casita derribaré!<br><br>El lobo empezó a soplar y a estornudar y aunque esta vez tuvo que hacer más esfuerzos para derribar la casa, al final la madera acabó cediendo y los cerditos salieron corriendo en dirección hacia la casa de su hermano mayor.<br><br>El lobo estaba cada vez más hambriento así que sopló y sopló con todas sus fuerzas, pero esta vez no tenía nada que hacer porque la casa no se movía ni siquiera un poco.  Dentro los cerditos celebraban la resistencia de la casa de su hermano y cantaban alegres por haberse librado del lobo:<br><br>- ¿Quien teme al lobo feroz? ¡No, no, no!<br><br>Fuera el lobo continuaba soplando en vano, cada vez más enfadado. Hasta que decidió parar para descansar y entonces reparó en que la casa tenía una chimenea.<br><br>- ¡Ja! ¡Pensaban que de mí iban a librarse! ¡Subiré por la chimenea y me los comeré a los tres!<br><br>Pero los cerditos le oyeron, y para darle su merecido llenaron la chimenea de leña y pusieron al fuego un gran caldero con agua.<br><br>Así cuando el lobo cayó por la chimenea el agua estaba hirviendo y se pegó tal quemazo que salió gritando de la casa y no volvió a comer cerditos en  una larga temporada."
      }
      if(level === 2){
          tituloCuento.innerHTML = "El cohete de papel";
          tituloCuento.style.display = "inline";
          contenidoCuento.style.display = "block";
          contenidoCuento.innerHTML = "<p>Había una vez un niño cuya mayor ilusión era tener un cohete y dispararlo hacia la luna, pero tenía tan poco dinero que no podía comprar ninguno. Un día,<strong> junto a la acera descubrió la caja de uno de sus cohetes favoritos</strong>, pero al abrirla descubrió que sólo contenía un pequeño cohete de papel averiado, resultado de un error en la fábrica.</p> <p>El niño se apenó mucho,<strong> pero pensando que por fin tenía un cohete</strong>, comenzó a preparar un escenario para lanzarlo. Durante muchos días recogió papeles de todas las formas y colores, y se dedicó con toda su alma a dibujar, recortar,<strong> pegar y colorear todas las estrellas y planetas para crear un espacio de papel</strong>. Fue un trabajo dificilísimo, pero el resultado final fue tan magnífico que la pared de su habitación parecía una ventana abierta al espacio sideral.<br> Desde entonces el niño disfrutaba cada día jugando con su cohete de papel,<strong> hasta que un compañero visitó su habitación y al ver aquel espectacular escenario</strong>, le propuso cambiárselo por un cohete auténtico que tenía en casa. Aquello casi le volvió loco de alegría, y aceptó el cambio encantado.</p><p>Desde entonces, cada día, al jugar con su cohete nuevo,<strong> el niño echaba de menos su cohete de papel</strong>, con su escenario y sus planetas, porque realmente disfrutaba mucho más jugando con su viejo cohete. Entonces se dio cuenta de que se sentía mucho mejor cuando jugaba con aquellos juguetes que él mismo había construido con esfuerzo e ilusión.</p> <p>Y así,<strong> aquel niño empezó a construir él mismo todos sus juguetes</strong>, y cuando creció, se convirtió en el mejor juguetero del mundo.</p>"
      }      
  }
  
  var menu = document.getElementById("menu");
  var menu1 = document.getElementById("menu1");
  var answer = document.getElementById("answer");
  menu.style.display = "none";
  menu1.style.display = "none";
  answer.style.display = "inline";  
}
