import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { selectOrCreateRenderHostElement } from "@angular/core/src/linker/view_utils";
 
@Component({
    selector: 'app-listcomponent',
    templateUrl: './listKajmak.component.html',
    styleUrls: ['./listKajmak.component.css']
})
export class ListKajmakComponent implements OnInit {
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
}