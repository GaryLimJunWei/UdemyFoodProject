import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Ikw2BERlSZIblxeFrBHK5tl1-tL_6cYwGBGGgECZ57dkEN2QeOmPmcw_pZSS1l88tjKm7arpK6mMUXUikQfkFiwct5aMfoHLMwnnyb5Besvlbw0-vuGEqyhFY6XkXXYx'
    }
});

