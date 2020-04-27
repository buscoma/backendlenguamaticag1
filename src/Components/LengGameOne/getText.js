export default () => {

  const texts = [
    "pregunta 1",
    "pregunta 2",
    "Pregunta 3",
  ];
  
  return texts[Math.floor(Math.random()*texts.length)];

}