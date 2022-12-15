const quizDate = [
    {
        id:0,
        pos: [135.8797731, 33.550702],
        answer:"日本初の民間ロケット射場",
        question:"和歌山県の串本で建設が進んでいる施設は?",
        options:["民間ロケット射場","大型天体望遠鏡","海中公園"],
        infos:"スペースポート紀伊という、小型ロケットで人工衛星を打ち上げる事を目的とした日本初の民間施設"
    },
    {
        id:1,
        pos:[135.3098865,34.2093468],
        answer:"たま駅長",
        question:"和歌山電鐵の貴志駅長として、世界から注目された猫の名前は?",
        options:["たま","ニタマ","よんたま"]
    },
    {
        id:2,
        pos:[135.8854176,33.6753247],
        answer:"133m",
        question:"落差が日本一の那智の滝、その落差は何メートル?",
        options:["105m","209m","133m"]
    },
    {
        id:3,
        pos:[135.5760981,34.2162333],
        answer:"弘法大師 空海",
        question:"高野山は816年、だれによって開山されたでしょうか?",
        options:["弘法大師 空海","日蓮","南方熊楠"]
    }
]

window.onload = () => {

    mapboxgl.accessToken = "pk.eyJ1Ijoia2l0YTgwOSIsImEiOiJjbDl3aDI2dW0wMGhwM25wZ3F1dzY0dWpoIn0.FpW_DVS6BBOo502F5coh7w";

    const quiz_maker = [];

    const bounds = [
        [134.992446,33.349458],
        [136.136398,34.490504]
    ];

    map.current = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [135.450539, 33.926839],
        zoom: 7.5,
        maxBounds: bounds
    });

    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
        'icon-image': '{icon}',
        'icon-allow-overlap': true
        }
        });
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });

    let canvas = document.getElementById('quiz');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    document.addEventListener('keypress', SetQuizDisp);
}
function SetQuizDisp(){

    //let canvas = document.getElementById('quiz');
}
function SetQuizMarker(map) {

    const quiz_maker = [];

    for (let quiz = 0; quiz < quizDate.length; quiz++) {
        const x = quizDate[quiz]['pos'][0]
        const y = quizDate[quiz]['pos'][1]
        console.log(quizDate[quiz]);
        quiz_maker.push(
            new QuziMarker(x, y, quiz).setLngLat([x, y]).addTo(map)
        )
    }
}
class QuziMarker extends mapboxgl.Marker {
    constructor(quiz_id) {
        super()
        this.quiz_id = quiz_id
    }
    _onMapClick(e) {
        const targetElement = e.originalEvent.target;
        const element = this._element;

        if (targetElement === element || element.contains((targetElement))) {

        }
    }
}
// extend mapboxGL Marker so we can pass in an onClick handler
class ClickableMarker extends mapboxgl.Marker {
    // new method onClick, sets _handleClick to a function you pass in
    onClick(handleClick) {
        this._handleClick = handleClick;
        return this;
    }
    // the existing _onMapClick was there to trigger a popup
    // but we are hijacking it to run a function we define
    _onMapClick(e) {
        const targetElement = e.originalEvent.target;
        const element = this._element;
        if (this._handleClick && (targetElement === element || element.contains((targetElement)))) {
            this._handleClick();
        }
    }
};