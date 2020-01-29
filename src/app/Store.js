export class Store {
    constructor() {
        this.city;
        this.countrCode;
        this.defaultCity = 'Madrid';
        this.defalutCountry = 'es';
    }

    getLocationDate() {
       if(localStorage.getItem('city') === null) {
           this.city = this.defaultCity;
       } else {
            this.city = localStorage.getItem('city');
       }

       if(localStorage.getItem('countrCode') === null) {
        this.countrCode = this.defalutCountry;
    } else {
         this.countrCode = localStorage.getItem('countrCode');
    }
    return {
        city: this.city,
        countrCode: this.countrCode
    }
    }
    setLocationData(city, countrCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countrCode', countrCode);
    }
}