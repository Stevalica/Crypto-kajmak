import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    templateUrl: './mixKajmak.component.html',
    styleUrls: ['./mixKajmak.component.css']
})
export class MixKajmakComponent {
    public products: any;

    public constructor(private http: Http, private router: Router, private location: Location) {
        this.products = [];
    }

    public ngOnInit() {
        this.location.subscribe(() => {
            this.getProducts();
        });
        this.getProducts();
    }

    private getProducts() {
        console.log("Pozvano");
        this.http.get("http://localhost:3000/group")
            .map(result => result.json())
            .subscribe(result => {
                console.log(result);
                this.products = result;
                console.log(this.products);
        });
    }

    public MixKajmak() {
        console.log("Kliknuto");
    }
}