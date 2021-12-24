<template>
  <div class="w-full">
    <hero>
      <div class="flex flex-col">
        <h1 class="text-xl font-semibold">Carmelo Soul Kitchen</h1>
        <p>Via Verga, 38/41 Ruvo di Puglia</p>
        <div class="flex space-x-4 mt-6">
          <a
            href="tel://+390809141491"
            target="_blank"
            class="flex items-center space-x-2"
          >
            <img
              src="/phone.png"
              alt="phone"
              class="
                w-8
                h-8
                p-2
                bg-white
                flex
                justify-center
                items-center
                rounded-full
              "
            />
            <span class="text-sm">Chiama</span>
          </a>
          <a
            href="https://wa.me/393477979762"
            target="_blank"
            class="flex items-center space-x-2"
          >
            <i class="mdi mdi-whatsapp text-2xl text-white"></i>
            <span class="text-sm">WhatsApp</span>
          </a>
        </div>
      </div>
    </hero>
    <div class="container -mt-30">
      <GMap
        ref="gMap"
        language="it"
        :cluster="{ options: { styles: clusterStyle } }"
        :center="{ lat: location.lat, lng: location.lng }"
        :options="{
          fullscreenControl: false,
          styles: mapStyle,
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
        }"
        :zoom="16"
      >
        <GMapMarker
          :position="{ lat: location.lat, lng: location.lng }"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{ maxWidth: 200 }">
            <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code>
          </GMapInfoWindow>
        </GMapMarker>
        <GMapCircle :options="circleOptions" />
      </GMap>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentLocation: {},
    circleOptions: {},
    location: {
      lat: 41.1152289,
      lng: 16.4915326,
    },
    pins: {
      selected: 'data:image/png;base64,iVBORw0KGgo...',
      notSelected: 'data:image/png;base64,iVBORw0KGgo...',
    },
    mapStyle: [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative.country',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#a0a4a5',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#62838e',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#dde3e3',
          },
        ],
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#3f4a51',
          },
          {
            weight: '0.30',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'poi.attraction',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.government',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi.place_of_worship',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.school',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.sports_complex',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: '-100',
          },
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#bbcacf',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            lightness: '0',
          },
          {
            color: '#bbcacf',
          },
          {
            weight: '0.50',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#a9b4b8',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
          {
            invert_lightness: true,
          },
          {
            saturation: '-7',
          },
          {
            lightness: '3',
          },
          {
            gamma: '1.80',
          },
          {
            weight: '0.01',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#a3c7df',
          },
        ],
      },
    ],
    clusterStyle: [
      {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
        width: 56,
        height: 56,
        textColor: '#fff',
      },
    ],
  }),
}
</script>

<style></style>
