import { Component } from "@angular/core";

@Component({
    templateUrl: './listKajmak.component.html',
    styleUrls: ['./listKajmak.component.css']
})
export class ListKajmakComponent {
    pageTitle: string = 'Product List';

    products: any[] = [
        {
            'productID': 1,
            'productName': 'Kajmak1',
            'expDate': 'Okt 25, 2018',
            'price': 5.00,
            'imageUrl': '',
            'description': '',

        },
        {
            'productID': 2,
            'productName': 'Kajmak2',
            'expDate': 'Okt 27, 2018',
            'price': 7.00,
            'imageUrl': '',
            'description': '',
        },
        {
            'productID': 3,
            'productName': 'Kajmak3',
            'expDate': 'Okt 11, 2018',
            'price': 2.00,
            'imageUrl': '',
            'description': '',
        },
    ];


}