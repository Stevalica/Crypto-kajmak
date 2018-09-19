import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    templateUrl: './createKajmak.component.html',
    styleUrls: ['./createKajmak.component.css']
})
export class CreateKajmakComponent {
    public kajmak: any;

    public constructor(private http: Http) {
        this.kajmak = {
            "name": "",
            "milkfrom": "",
            "liters": "",
            "type": "",
            "salt": ""
        }
    }
    public CreateData() {
        console.log(this.kajmak);
        //post salje od aplikacije do http klijent servisa
        //nakon sto se subscribe, http klijent servis salje na server
        this.http.post("http://localhost:3000/create", JSON.stringify(this.kajmak)).subscribe(results => {
            //odgovor od servera 
            console.log("U redu");
        });
    }
}