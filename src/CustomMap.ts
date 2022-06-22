/// <reference types="@types/google.maps" />

// Instruction to every other class
// on how they can be an argument to 'addMarker'

export interface Mappable {
    markerContent(): string;
    location: {
        lat: number;
        lng: number;
    }
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        })
    };

    addMarker(mappable: Mappable): void {
        // mappable.location
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
    }
}