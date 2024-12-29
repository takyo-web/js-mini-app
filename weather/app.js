document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = ''; // ここにAPIキーを入力してください
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // 現在の天気情報を取得する
        const currentWeatherResponse = await axios.get(currentWeatherUrl);
        const currentWeatherData = currentWeatherResponse.data;

        // 地域名と気温と天気を表示させる
        document.getElementById('weatherInfo').innerHTML = `
            <h2>Weather in ${currentWeatherData.name}</h2>
            <p>Temperature: ${currentWeatherData.main.temp}°C</p>
            <p>Weather: ${currentWeatherData.weather[0].description}</p>
        `;

        // 5日間の天気予報を取得する
        const forecastResponse = await axios.get(forecastUrl);
        const forecastData = forecastResponse.data;

        // 1日の気温推移データを抽出する
        const todayForecast = forecastData.list.slice(0, 8); // 最初の8つのデータポイントを使用する（＊3時間ごと）

        const labels = todayForecast.map(item => {
            const date = new Date(item.dt * 1000); // UNIXタイムスタンプを人間が読める形式に変換する
            return `${date.getHours()}:00`; // 時間部分を抽出する
        });
        const temperatures = todayForecast.map(item => item.main.temp); // 気温データを抽出する

        // Chart.jsを使用してグラフとしてデータを表示させる
        const ctx = document.getElementById('weatherChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels, // X軸のラベル（時間）
                datasets: [{
                    label: 'Temperature (°C)',
                    data: temperatures, // Y軸のデータ（気温）
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Temperature (°C)'
                        }
                    }
                }
            }
        });

    } catch (error) {
        console.error('Error fetching the weather data', error);
        document.getElementById('weatherInfo').innerHTML = `<p style="color: red;">Oops, error fetching the weather data.<br> Please try again.</p>`;
    }
});
