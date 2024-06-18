import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Await, Link, Navigate, useNavigate } from 'react-router-dom';
import mainLogo from'../img/beta.png';
import Components_input from '../Components/input'

function Form() {      

    return (
      	//NAVBAR DE REGISTRO
      <div class="min-h-screen flex flex-col" >
        <nav class="relative flex w-full flex-wrap items-center justify-between py-2 lg:py-2" style={{ backgroundColor: '#FFC327'}}>
          <div class="flex w-full flex-wrap items-center justify-between px-3">
            <div class="ms-2">
            <img src={mainLogo} alt="Ejemplo de imagen" />
            </div>
          </div>
        </nav>
      
      <div className="flex flex-col min-h-screen items-center justify-center">
      
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl ">
          
       <div className="p-10">
       <p class="normal-case text-center mx-auto font-bold" >Crea una cuenta Bidcraft</p>
       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
              <div className="mb-2 flex flex-col gap-6">
                <Components_input inputType={"Text"} text={"Nombre Completo"}/>
                <Components_input inputType={"date"} text={"Fecha de nacimiento"}/>
                
              </div>
              <div className="mt-10 mb-2 flex flex-col gap-6">
                <Components_input inputType={"mail"} text={"Correo"}/>
                <Components_input inputType={"password"} text={"Contraseña"}/>
                <Components_input inputType={"password"} text={"Repetir Contraseña"}/>
              </div>
             <div className="mt-10 mb-2 flex flex-col gap-6">
                <Components_input inputType={"phone"} text={"Numero de Teléfono"}/>
              </div>

              <div className="inline-flex items-center">
                <label
                  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                >
                  
                </label>
              </div>

    <p class="normal-case mx-auto text-gray-400 md:text-left">Verificar con</p>
              <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <div class="flex items-center space-x-4">
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="verificar" class="form-radio h-5 w-5 checked:bg-ffc327" />
                            <span class="text-gray-400">Mensaje de Texto</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="verificar" class="form-radio h-5 w-5 checked:bg-ffc327;"  />
                            <span class="text-gray-400">Llamada</span>
                        </label>
                    </div>
                </div>




            <div className='w-full flex justify-between'>  
            <div></div>
         <div >
              <button style={{ backgroundColor: '#FFC327',paddingLeft:'60px',paddingRight:'60px' }}
                className="mt-6   select-none   py-5  text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Siguiente
              </button>
            </div>
              </div>
             
            </form>


       </div>
          
          </div>
          <div className="flex justify-around ">
              <div className="text-sm text-gray-700 py-5 px-10">
                <p>Español(Honduras)                    </p>
              </div>
              <div className="text-sm text-gray-700 py-5 px-10">
                <p> 
                  <a href="">Ayuda    </a>
                  <a href="">Privacidad    </a>
                  <a href="">Terminos    </a>
                  </p>
                
              </div>
            </div>
          
         
        
        </div>
        </div>
    )

}
export default Form