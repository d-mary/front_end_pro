$(document).ready(function () {
  $button = $(".js-btn");
  $button.on("click", function () {
    const city = $("#js--city-input").val();
    const weatherResult = $(".js--weather-result");
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&APPID=5d066958a60d315387d9492393935c19";
    $.ajax({
      url: url,
      type: "GET",

      success: (response) => {
        const temp = response.main.temp;
        const pressure = response.main.pressure;
        const description = response.weather[0].description;
        const humidity = response.main.humidity;
        const speed = response.wind.speed;
        const deg = response.wind.deg;
        const icon =
          "https://openweathermap.org/img/w/" +
          response.weather[0].icon +
          ".png";

        weatherResult.html(
          "<p>Температура: " +
            temp +
            "<p>Тиск: " +
            pressure +
            "<p>Опис: " +
            description +
            "<p>Вологість: " +
            humidity +
            "<p>Швидкість вітру: " +
            speed +
            "<p>Напрям вітру: " +
            deg +
            '<p><img src="' +
            icon +
            '" alt="Погодний значок" />'
        );
      },
      error: function () {
        weatherResult.html(
          "<p>Не вдалося отримати погоду для міста " + city + ".</p>"
        );
      },
    });
  });
});
