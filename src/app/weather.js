export class Weather {
  constructor(city, countryCode) {
    this.appyKey = "d4c3616ace82a1c186dd0e884c61bbba";
    this.city = city;
    this.countryCode = countryCode;
  }
  async getWather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.appyKey}&units=metric`;
    // console.log(URI);
    //indicamos que va a tomar tiempo consultar la API
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  //Metodo para cambiar la ciudad
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}

/* api.openweathermap.org/data/2.5/weather?q=León,Mx&appid=d4c3616ace82a1c186dd0e884c61bbba */
