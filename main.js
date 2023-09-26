let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #c6282c;'> </span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #c6282c;">Soy programadora y brindo soporte técnico a equipos de cómputo.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
