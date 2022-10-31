window.initMap = () => {
    

    let map;

    const area = document.getElementById("map");// マップを表示させるHTMLの箱
		// マップの中心位置(例:原宿駅)
    const center = {
      lat: 35.673569,
      lng: 139.703887,
      
    };

    //マップ作成
    map = new google.maps.Map(area, {
      center,
      zoom: 19,
      mapId: 'a8f889f6a9971265'

    });  

    //マーカーオプション設定👇追記
    const markerOption = {
        position: center, // マーカーを立てる位置を指定
        map: map, // マーカーを立てる地図を指定
        icon: {
          url: '../images/map_pin.png',// お好みの画像までのパスを指定
          scaledSize: new google.maps.Size(40, 40) 
        },
      }
  
      //マーカー作成
      const marker = new google.maps.Marker(markerOption);
  
}


