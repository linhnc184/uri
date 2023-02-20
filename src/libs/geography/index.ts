export type Coordinates = {
  lat: number; // latitude
  lon: number; // longitude
  alt?: number; // altitude
}

export type GeographyProperties = Coordinates & {
  crs?: string; // coordinate reference system
  u?: number; // location uncertainty
}

export class Geography {

  private readonly _schemeName = 'geo';
  private _lat: number;
  private _lon: number;
  private _alt: number | undefined;
  private _u: number | undefined;
  private _crs: string | undefined;

  constructor(props: GeographyProperties) {
    this._lat = props.lat;
    this._lon = props.lon;
    this._alt = props.alt;
    this._u = props.u;
    this._crs = props.crs;
  }

  getCoordinates(): Coordinates {
    const coord: Coordinates = {
      lat: this._lat,
      lon: this._lon,
    };

    if (this._alt) {
      coord.alt = this._alt;
    }

    return coord;
  }

  getURI(): string {
    const coorParam = Object.values(this.getCoordinates()).join(',');
    const uncStr = this._u ? `u=${this._u}` : '';
    const crsStr = this._crs ? `crs=${this._crs}` : '';
    const paramsStr = [coorParam, uncStr, crsStr].filter(str => !!str).join(';');

    return `${this._schemeName}:${paramsStr}`;
  }
}
