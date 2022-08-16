import React from "react";

const Nothing = () => {
  //API call
  //example 1:---
  // function fetchUserData(){
  //   fetch('https://swapi.dev/api/films/')
  //         .then((response) => {
  //           return response.json();
  //       })
  //       .then((data)=>{
  //           const transformData = data.results.map((imtem) => {
  //              return {
  //                  id: item.id,
  //                  title : item.title
  //              }
  //           })

  //           setUserdate(transformData);
  //       })
  // }

  //Example two:-----------------
  // async function fetchUserdate() {
  //   const response = await fetch("https://swapi.dev/api/films/");
  //   const data = await respnse.jsone();
  //   const transformData = data.results.map((imtem) => {
  //     return {
  //       id: item.id,
  //       title: item.title,
  //     };
  //   });

  //   setUserdate(transformData);
  // }

  //Example three---------------------------------
  // async function fetchUserData() {
  //   try{
  //     const response = await fetch("https://swapi.dev/api/films/");

  //     if (!response.ok) {
  //       throw new Error('Something went wrong')
  //     }
  //     const data = await respnse.jsone();

  //     const transformedMovies = data.results.map((mdate)=> {
  //       return {
  //         id:mdate.id,
  //         title: mdate.title
  //       }
  //     })

  //   } catch(error){
  //     setError(error.message)
  //   }

  // }

  return (
    <div>
      <label>Nothing on this page</label>
    </div>
  );
};

export default Nothing;
