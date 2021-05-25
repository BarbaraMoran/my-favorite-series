"use strict";const formEl=document.querySelector(".js-form"),inputEl=document.querySelector(".js-input"),btnEl=document.querySelector(".js-button"),showsList=document.querySelector(".js-list"),favShowsList=document.querySelector(".js-fav-list"),deleteIconEls=document.querySelectorAll(".js-icon");function submitPrevent(e){e.preventDefault()}function getUserSearch(){return inputEl.value}console.log(deleteIconEls),formEl.addEventListener("submit",submitPrevent);let apiData=[],userFavShows=[],keptFavData=[];function getApiData(){const e=getUserSearch();fetch("//api.tvmaze.com/search/shows?q="+e).then((function(e){return e.json()})).then((function(e){apiData=e,renderTvShows()}))}function renderTvShows(){showsList.innerHTML="";let e="";for(const s of apiData){e+=void 0===userFavShows.find(e=>e.show.id===s.show.id)?`<li class= "show-list__item item-color js-card" data-id="${s.show.id}">`:`<li class= "show-list__item fav-color js-card" data-id="${s.show.id}">`,null===s.show.image?e+='<img class="item__picture js-picture" src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/>':e+=`<img class="item__picture js-picture" src= "${s.show.image.medium}"/>`,e+=`<h3>${s.show.name}</h3>`,e+="</li>"}showsList.innerHTML=e,addCardListeners()}function addCardListeners(){const e=document.querySelectorAll(".js-card");for(const s of e)s.addEventListener("click",handleFavBtn)}function handleFavBtn(e){const s=e.currentTarget,t=parseInt(s.dataset.id);if(void 0===userFavShows.find(e=>e.show.id===t)){const e=apiData.find(e=>e.show.id===t);userFavShows.push(e)}else userFavShows=userFavShows.filter(e=>e.show.id!==t);lS(userFavShows)}function lS(e){localStorage.setItem("userFavShows",JSON.stringify(e));let s=JSON.parse(localStorage.getItem("userFavShows"));renderTvShows(),renderFavSection(s)}function renderFavSection(e){favShowsList.innerHTML="";let s="";for(const t of e)s+=`<li class= "show-list__item js-card" data-id="${t.show.id}">`,null===t.show.image?s+='<img class="item__picture js-picture" src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/>':s+=`<img class="item__picture js-picture" src= "${t.show.image.medium}"/>`,s+=`<h3 class= "favorite-show-title">${t.show.name}</h3>`,s+=`<img class="icon js-icon" data-id="${t.show.id}" src="./assets/images/274c.png" />`,s+="</li>";favShowsList.innerHTML='<h2 class="favorites-section__title">Mis series favoritas</h2>'+s}function recoverFavorites(){if(null!==JSON.parse(localStorage.getItem("userFavShows"))){let e=JSON.parse(localStorage.getItem("userFavShows"));userFavShows=e,renderFavSection(userFavShows)}}btnEl.addEventListener("click",getApiData),document.addEventListener("load",recoverFavorites());for(const e of deleteIconEls)e.addEventListener("click",prueba);function prueba(e){selectedIcon=e.CurrentTarget,console.log("holis")}function handleFavIcon(e){const s=e.currentTarget,t=parseInt(s.dataset.id);void 0!==userFavShows.find(e=>e.show.id===t)&&(userFavShows=userFavShows.filter(e=>e.show.id!==t)),console.log("hola"),lS(userFavShows)}