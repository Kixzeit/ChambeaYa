<template>
  <div>
      <header>
        <div class="icon__menu">
          <i class="fa-solid fa-bars " id="btn_open"></i>
        </div>
      </header>
      <div class="menu__side" id="menu_side">
        <div class="name__page">
          <!-- aqui iria el logo -->
          <i class="fa-solid fa-user-alien"></i>
          <h4>ChambeaYa!</h4>
        </div>
        <!-- menu de opciones -->
        <div class="options__menu">
          <!-- aqui van los links -->
          <a href="" class="selected">
            <div class="option">
              <!-- aqui va el icono : ejemplo el del home  le colocamos title:home -->
              <i class="fa-solid fa-house" title="Home"></i>
              <h4>Home</h4>
            </div>
          </a>
          <a href="">
            <div class="option">
              <!-- aqui va el icono : ejemplo el del home  le colocamos title:home -->
              <i class="fa-solid fa-user"></i>
              <h4>Perfil</h4>
            </div>
          </a>
          <a href="">
            <div class="option">
              <!-- aqui va el icono : ejemplo el del home  le colocamos title:home -->
              <i class="fa-solid fa-address-card"></i>
              <h4>Documento Oficial</h4>
            </div>
          </a>
          <a href="">
            <div class="option">
              <!-- aqui va el icono : ejemplo el del home  le colocamos title:home -->
              <h4>Anuncio</h4>
            </div>
          </a>
          <a href="">
            <div class="option">
              <!-- aqui va el icono : ejemplo el del home  le colocamos title:home -->
              <h4>ine</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>


<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: sans-serif;
  }

  body {
    margin-left: 80px;
    margin-top: 80px;
    transition: margin-left 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  header {
    width: 100%;
    height: 80px;
    background-color: blueviolet;
    /* 
    propiedades par que sea transparente, cuando tenga internet se las agrego    
    */
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 200;
  }

  .icon__menu {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(10px);
  }

  .icon__menu i {
    font-size: 20px;
    cursor: pointer;
    position: absolute;
  }

  .menu__side {
    width: 80px;
    height: 100%;
    background-color: coral;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 18px;
    z-index: 300;
    overflow: hidden;
    overflow-y: scroll;
    border-right: 20px solid coral;
    transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  /* hide scrollbar */
  .menu__side::-webkit-scrollbar {
    display: none;
  }

  .menu__side {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .name__page {
    padding: 20px 30px;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .name__page i {
    width: 20px;
    margin-right: 20px;
  }

  .options__menu {
    padding: 20px 30px;
    position: absolute;
    top: 80px;
  }

  .options__menu a {
    color: #ddd;
    cursor: default;
    display: block;
    position: relative;
    transition: all 300ms;
  }

  .options__menu a:hover {
    color: #fff;
  }

  .options__menu .option {
    padding: 20px 0;
    display: flex;
    align-items: center;
    position: relative;
  }

  .options__menu .option i {
    width: 20px;
    margin-right: 20px;
    cursor: pointer;
  }

  .options__menu .option h4 {
    font-weight: 300;
    cursor: pointer;
  }

  a.selected {
    color: #fff;
  }

  a.selected::before {
    content: "";
    width: 3px;
    height: 80%;
    background-color: #fff;
    position: absolute;
    top: 10%;
    left: -30px;
  }

  /* use in js action */

  .body_move {
    margin-left: 250px;
  }

  .menu__side_move {
    width: 250px;
  }

  @media screen and (max-width: 768px) {
    .body_move {
      margin-left: 0px;
    }

    .menu__side_move {
      width: 80px;
      left: -80px;
    }
  }
</style>

