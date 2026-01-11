const CARD_DATA = {
  toName: "Mi bonita",
  fromName: "Amador",
  title: "Una carta para ti",
  message:
`Quisiera que supieras lo especial que te has vuelto para mí.
Una calma bonita aparece cada vez que pienso en ti.
Imaginarte cerca se siente natural, como si siempre hubiera sido así.
Encontrarte fue una coinciden                                                                             cia que agradezco en silencio.
Río más desde que llegaste a mis días.
En tu forma de ser hay algo que me abraza.
Sin buscarlo, empecé a elegirte.

Siento que contigo todo va despacio y sincero.
Entiendo que no hay prisa, solo sentimientos reales.
Realmente me gusta la idea de caminar juntas.

Me quedo cuando pienso en ti.
Imagino un “nosotras” sin miedo.

No sé en qué momento pasó,
O tal vez siempre estuvo ahí.
Verte se volvió parte de mis pensamientos.
Intentarlo contigo se siente bonito.
A tu lado, todo se siente hogar.
💖`
};

const envelope = document.getElementById("envelope");
const typedText = document.getElementById("typedText");
const toName = document.getElementById("toName");
const miniTo = document.getElementById("miniTo");
const fromName = document.getElementById("fromName");
const letterTitle = document.getElementById("letterTitle");

toName.textContent = CARD_DATA.toName;
miniTo.textContent = CARD_DATA.toName;
fromName.textContent = CARD_DATA.fromName;
letterTitle.textContent = CARD_DATA.title;

let open = false;

function typeWriter(text){
  typedText.textContent="";
  let i=0;
  const t=setInterval(()=>{
    typedText.textContent+=text[i];
    i++;
    if(i>=text.length) clearInterval(t);
  },20);
}

envelope.addEventListener("click",()=>{
  if(open) return;
  open=true;
  envelope.classList.add("open");
  setTimeout(()=>typeWriter(CARD_DATA.message),400);
});
