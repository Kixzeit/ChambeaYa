<template>
  <footer>
    <div class="container-footer-all">
      <div class="container-body">
        <div class="colum1">
          <h1>Mas informacion de ChambeaYa!</h1>

          <p>
            Esta compañia se dedica a la alta y baja de anuncios de personas
            que desean publicar sus servicios dentro de la plataforma para darse 
            a conocer dentro del pueblo mexicano.
          </p>
          <h4>Objetivo De ChambeaYa!</h4>
          <p>Motivar a la gente trabajadora para que puedan expandir sus fronteras
            y ampliar su lista de clientes a traves de nuestra plataforma de trabajo.
          </p>

        </div>

        <div class="colum2">
          <h1>Redes Sociales</h1>

          <div class="row">
            <img  src="@/assets/icon/facebook.png" class="img-footer" style="width: 15%;height: 15%;" />
            <a href="">Siguenos en Facebook</a>
          </div>
          <div class="row">
            <img src="@/assets/icon/twitter.png" class="img-footer" style="width: 15%;height: 15%;"  />
            <a href="">Siguenos en Twitter</a>
          </div>
          <div class="row">
            <img src="@/assets/icon/instagram.png" class="img-footer" style="width: 15%;height: 15%;" />
            <a href="">Siguenos en Instagram</a>
          </div>
        </div>

        <div class="colum3">
          <h1>Informacion Contactos</h1>

          <div class="row2">
            <img src="@/assets/icon/house.png" class="img-footer" style="width: 15%;height: 15%;" />
            <label
              >CDMX oficina 20</label
            >
          </div>

          <div class="row2">
            <img src="@/assets/icon/smartphone.png" class="img-footer" style="width: 15%;height: 15%;" />
            <label>444 600 41 36</label>
          </div>

          <div class="row2">
            <img src="@/assets/icon/contact.png" class="img-footer" style="width: 15%;height: 15%;" />
            <label>Chambeaya@gmail.com</label>
          </div>
        </div>
      </div>
    </div>

    <div class="container-footer">
      <div class="footer">
        <div class="copyright">
          © 2023 Todos los Derechos Reservados | <a href="">ChambeaYa!</a>
        </div>

        <div class="information">
          <a href="">Informacion Compañia</a> |
          <a href="">Privacion y Politica</a> |
          <a href="">Terminos y Condiciones</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: sans-serif;
}

footer {
  width: 100%;
  background: #202020;
  color: white;
}

.container-footer-all {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 40px;
}

.container-body {
  display: flex;
  justify-content: space-between;
}

.colum1 {
  max-width: 400px;
}

.colum1 h1 {
  font-size: 22px;
}

.colum1 p {
  font-size: 14px;
  color: #c7c7c7;
  margin-top: 20px;
}

.colum2 {
  max-width: 400px;
}

.colum2 h1 {
  font-size: 22px;
}

.row {
  margin-top: 20px;
  display: flex;
}

.img-footer {
  width: 36px;
  height: 36px;
}

.row label {
  margin-top: 10px;
  margin-left: 20px;
  color: #c7c7c7;
}

.colum3 {
  max-width: 400px;
}

.colum3 h1 {
  font-size: 22px;
}

.row2 {
  margin-top: 20px;
  display: flex;
}

.row2 img {
  width: 36px;
  height: 36px;
}

.row2 label {
  margin-top: 10px;
  margin-left: 20px;
  max-width: 140px;
}

.container-footer {
  width: 100%;
  background: #101010;
}

.footer {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.copyright {
  color: #c7c7c7;
}

.copyright a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.information a {
  text-decoration: none;
  color: #c7c7c7;
}

@media screen and (max-width: 1100px) {
  .container-body {
    flex-wrap: wrap;
  }

  .colum1 {
    max-width: 100%;
  }

  .colum2,
  .colum3 {
    margin-top: 40px;
  }
}
</style>
