function createObject(name, subs) {
  const persona = {
    nombre: name,
    subscriptores: subs,
    hash: name.length * subs,
    getStatus: function () {
      const mensaje = `El canal de ${name} tiene ${subs} subscriptores`;
      return mensaje;
    },
  };
  return persona;
}

let persona = createObject("Luca", 100);
console.log(persona.getStatus());
