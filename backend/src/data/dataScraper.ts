import axios from 'axios';
import { CommonData } from '../interfaces/scraperinterfaces';
import { sourceLinks } from './links';

async function getDataAirNfts(limit: number, page: number) {
  // airnfts categories: auctions, collections, games, art, photo, music.
  const request = await axios.get(sourceLinks.airNft);

  const response = request.data;
  const nfts = response.nfts;

  const jsonData: { data: CommonData[] } = { data: [] };

  for (let index = 0; index < nfts.length; index++) {
    const item = nfts[index];

    jsonData.data.push({
      price: item.price,
      description: item.description,
      ArtName: item.name,
      ArtistName: item.ownerUsername,
      date: item.createdAt,
      category: item.category,
      image: item.url,
    });

    break;
  }
}

async function getDataRarible() {
  const request = await axios.post(
    sourceLinks.rarible,
    sourceLinks.rariblePost,
  );

  const response = request.data;

  const jsonData: { data: CommonData[] } = { data: [] };

  for (let index = 0; index < response.length; index++) {
    const item = response[index];

    jsonData.data.push({
      price: item.ownership.price,
      description: item.properties.description,
      ArtName: item.properties.name,
      ArtistName:
        item.properties.name.split(' ').length >= 1
          ? item.properties.name.split(' ')[0]
          : '',
      date: item.ownership.date,
      category:
        item.categories.length >= 1
          ? item.categories[0]
          : item.properties.attributes[0].value,
      image: item.properties.mediaEntries[0].url,
    });

    break;
  }
}

async function getDataPortion() {
  const request = await axios.get(sourceLinks.portion);

  const response = request.data;

  const jsonData: { data: CommonData[] } = { data: [] };

  for (let index = 0; index < response.Items.length; index++) {
    const item = response.Items[index];

    jsonData.data.push({
      price: item.listingPrice ? item.listingPrice : 'No Price yet.',
      description: item.Description,
      ArtName: item.artName,
      ArtistName: item.Artist,
      date: item.dt,
      category: '',
      image: `https://s3.amazonaws.com/ipfs.cache.v3/${item.contractID}_small`,
    });

    break;
  }
}

async function getDataNfts() {
  const request = await axios.post(sourceLinks.other, sourceLinks.otherPost);

  const response = request.data;

  const jsonData: { data: CommonData[] } = { data: [] };

  for (let index = 0; index < response.hits.length; index++) {
    const item = response.hits[index];

    jsonData.data.push({
      price: item._source.listing.buyNowPrice,
      description: item._source.description,
      ArtName: item._source.name,
      ArtistName: item._source.listing.owner,
      date: item._source.created_at,
      category: item._source.listing.category,
      image: item._source.image,
    });

    break;
  }
  console.log(jsonData);
}

//getDataAirNfts();
//getDataRarible();
//getDataPortion();
getDataNfts();
