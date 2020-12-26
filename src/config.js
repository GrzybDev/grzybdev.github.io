export const API_SERVER = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:8080" : "https://grzybdev.herokuapp.com";

export const firebaseConfig = {
    apiKey: "AIzaSyB_nyC6aAwRL1e-U0qQNgbPipJWzctnCuc",
    authDomain: "grzybdev-portfolio.firebaseapp.com",
    projectId: "grzybdev-portfolio",
    storageBucket: "grzybdev-portfolio.appspot.com",
    messagingSenderId: "1031569808119",
    appId: "1:1031569808119:web:4c93fd67491f41927f51f2",
    measurementId: "G-STQL0LFPN2"
};