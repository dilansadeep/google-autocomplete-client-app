const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getPlaces = `${BASE_URL}/predictions`;
export const getGeoCodes = `${BASE_URL}/geocode`;