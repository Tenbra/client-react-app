
import {Utilisateur, Ajouter} from "./Utilisateur";

import { Swiper, SwiperSlide } from "swiper/react";

import "../static/css/listeUtilisateur.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useState } from "react";

export default function ListeUtilisateur() {

    //Instance de la liste des utilisateurs et son modificateur
    const [users, setUser] = useState([])

    return (
        
        <Swiper
        slidesPerView={"auto"}     // Nombre de slide
        spaceBetween={10}          // Espacement (en px)
        navigation={true}          // Activer les fleches de navigation
        modules={[Navigation]}     // Faire fonctionner le module de navigation
        className="mySwiper"
        >
            <SwiperSlide><Ajouter users={users} setUser={setUser}/></SwiperSlide>

            {/* Créer une slide pour chaque utilisateur */}
            {users.map((user) => (
                <SwiperSlide key={user.email}><Utilisateur user={user}/></SwiperSlide>
            ))}
      </Swiper>
      
    );
  }