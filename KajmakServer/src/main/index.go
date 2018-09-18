package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

//Kajmak is struct type
type Kajmak struct {
	ID             string `json:"id,omitempty"`
	Name           string `json:"name,omitempty"`
	MilkFrom       string `json:"milkfrom,omitempty"`
	Liters         int    `json:"liters,omitempty"`
	Type           string `json:"type,omitempty"`
	Salt           string `json:"salt,omitempty"`
	CreationDate   string `json:"creation_date,omitempty"`
	ExpirationDate string `json:"expiration_date,omitempty"`
}

//globalna varijabla - treba nam privremeno
var group []Kajmak

//ReadGroup is handler
func ReadGroup(w http.ResponseWriter, req *http.Request) {
	json.NewEncoder(w).Encode(group)
}

//CreateKajmak is handler
//primamo POST body od klijenta i podatke stavljamo u varijablu
func CreateKajmak(w http.ResponseWriter, req *http.Request) {
	var kajmak Kajmak //objekat
	//jer su podaci u req u obliku JSON
	_ = json.NewDecoder(req.Body).Decode(&kajmak)
	//upis podataka u niz
	group = append(group, kajmak)
	//odgovor je niz pretvoren u json
	json.NewEncoder(w).Encode(group)
}

func main() {
	fmt.Println("Starting server at http://localhost:3000...")
	router := mux.NewRouter()

	//group = append(group, Kajmak{ID: "3", Name: "Kajmak1", MilkFrom: "Cow", Liters: 30, Type: "Young", Salt: "Yes", CreationDate: "Mart, 30", ExpirationDate: "May, 30"})
	router.HandleFunc("/group", ReadGroup).Methods("GET")
	router.HandleFunc("/create", CreateKajmak).Methods("POST")

	//osluskivanje na portu 3000
	log.Fatal(http.ListenAndServe(":3000", handlers.CORS(handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD"}), handlers.AllowedOrigins([]string{"*"}))(router)))
}
