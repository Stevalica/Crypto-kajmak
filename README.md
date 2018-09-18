# Crypto-kajmak

##Pokretanje aplikacije:
1. otvoriti terminal
2. pozicionirati se u folder repozitorija
3. npm start
4. aplikacija je pokrenuta na stranici localhost:4200

##Pokretanje servera
1. otvoriti novi terminal
2. pozicionirati se u folder KajmakServer koji se nalazi unutar foldera repozitorija
3. postaviti GOPATH i GOBIN:  
		set GOPATH=C:\Users\mcaluk\Desktop\Crypto-kajmak\KajmakServer  
		set GOBIN=C:\Users\mcaluk\Desktop\Crypto-kajmak\KajmakServer\bin  
4. go run src/main/index.go
5. server je pokrenut na stranici localhost:3000

###Ukoliko nedostaje neki od paketa kucati: go get -u nazivPaketa npr.
	go get -u github.com/gorilla/mux