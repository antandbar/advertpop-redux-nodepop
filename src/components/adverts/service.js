import client from '../../api/client';

const advertsBaseUrl = '/apiv1/ads';

export const getAdverts = () => {
  const url = advertsBaseUrl;
  return client.get(url);
};

export const getTags = () => {
  const url = `${advertsBaseUrl}/tagslist`;
  return client.get(url);
};
export const getAdvert = advertId => {
  const url = `${advertsBaseUrl}/${advertId}`;
  return client.get(url);
};

export const deleteAdvert = advertId => {
  const url = `${advertsBaseUrl}/${advertId}`;
  return client.delete(url);
};

export const createAdvert = advert => {
  const url = advertsBaseUrl;
  return client.post(url, advert);
};
