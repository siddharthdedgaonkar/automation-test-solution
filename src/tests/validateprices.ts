import axios from 'axios'
const pricePayload = require('../resources/prices.data.json');

export class ValidateAirlineFilter {
    

    validatePriceFilter = async (startPrice:string, endPrice:string) =>  {
        const data = JSON.stringify({
            "operationName": "SearchOnResultPage",
            "variables": {
              "adults": 1,
              "cabinClass": "ECONOMY",
              "childAges": [],
              "direct": false,
              "filters": [
                {
                    "code": "PRICE",
                    "value": "<START_PRICE>,<STOP_PRICE>"
                }
              ],
              "routes": [
                {
                    "origin": "PAR",
                    "destination": "BOM",
                    "departureDate": "2023-10-26"
                }
              ],
              "sortTypeCode": "RECOMMENDATION"
            },
            "query": "query SearchOnResultPage($routes: [Route!]!, $cabinClass: CabinClass, $direct: Boolean, $carrierCodes: [String], $adults: Int!, $childAges: [Int], $offset: Int, $sortTypeCode: String, $filters: [Filter!], $validWithVoucher: Boolean) {\n  search(routes: $routes, cabinClass: $cabinClass, direct: $direct, carrierCodes: $carrierCodes, adults: $adults, childAges: $childAges, offset: $offset, sortTypeCode: $sortTypeCode, filters: $filters, validWithVoucher: $validWithVoucher) {\n    availableFilters {\n      code\n      group\n      label\n      ... on RangeFilter {\n        __typename\n        code\n        group\n        label\n        max\n        min\n        type\n      }\n      ... on SelectionFilter {\n        __typename\n        code\n        group\n        label\n        isMultiChoice\n        options {\n          label\n          value\n          __typename\n        }\n        type\n      }\n      __typename\n    }\n    availableSortTypes {\n      code\n      name\n      __typename\n    }\n    carrierCodes\n    carrierNames\n    flights {\n      ...Flights\n      __typename\n    }\n    flightsCount\n    filteredFlightsCount\n    quickSortPrices {\n      carrierPromo {\n        value\n        currency {\n          code\n          __typename\n        }\n        __typename\n      }\n      cheapTrip {\n        value\n        currency {\n          code\n          __typename\n        }\n        __typename\n      }\n      shortTrip {\n        value\n        currency {\n          code\n          __typename\n        }\n        __typename\n      }\n      recommendation {\n        value\n        currency {\n          code\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    resultSetMetaData {\n      priceRange {\n        min\n        max\n        __typename\n      }\n      travelTimeRange {\n        min\n        max\n        __typename\n      }\n      marketingCarriers {\n        code\n        name\n        __typename\n      }\n      __typename\n    }\n    routes {\n      origin {\n        code\n        name\n        cityCode\n        cityName\n        countryCode\n        countryName\n        continentCode\n        continentName\n        __typename\n      }\n      destination {\n        code\n        name\n        cityCode\n        cityName\n        countryCode\n        countryName\n        continentCode\n        continentName\n        __typename\n      }\n      departureAt\n      departureDate\n      departureTimeOfDay\n      __typename\n    }\n    searchPath\n    sponsoredTrips {\n      ...Flights\n      __typename\n    }\n    travelers {\n      ageType\n      __typename\n    }\n    type\n    tripCampaigns {\n      campaignImageUrlDesktop\n      campaignImageUrlMobile\n      selectionKey\n      __typename\n    }\n    validWithVoucher\n    __typename\n  }\n}\n\nfragment Flights on Trip {\n  id\n  tripId\n  isVI\n  includedCabinBaggage {\n    includedPersonalItem\n    size3d {\n      height\n      length\n      width\n      __typename\n    }\n    ...IncludedCabinBaggage\n    __typename\n  }\n  includedCheckedBaggage {\n    ...IncludedCheckedBaggage\n    __typename\n  }\n  bounds {\n    boundId: id\n    includedCabinBaggage {\n      ...IncludedCabinBaggage\n      __typename\n    }\n    includedCheckedBaggage {\n      ...IncludedCheckedBaggage\n      __typename\n    }\n    segments {\n      ... on TripSegment {\n        __typename\n        segmentId: id\n        aircraftType\n        arrivedAt\n        includedCabinBaggage {\n          ...IncludedCabinBaggage\n          __typename\n        }\n        includedCheckedBaggage {\n          ...IncludedCheckedBaggage\n          __typename\n        }\n        cabinClassName\n        departuredAt\n        destination {\n          code\n          name\n          cityCode\n          cityName\n          __typename\n        }\n        duration\n        equipmentCode\n        flightNumber\n        marketingCarrier {\n          code\n          name\n          __typename\n        }\n        numberOfTechnicalStops\n        operatingCarrier {\n          code\n          name\n          __typename\n        }\n        operatingInformation\n        origin {\n          code\n          name\n          cityCode\n          cityName\n          __typename\n        }\n        segmentDetails {\n          paxType\n          numberOfSeatsLeft\n          __typename\n        }\n      }\n      ... on EventSegment {\n        __typename\n        segmentId: id\n        types\n        duration\n      }\n      __typename\n    }\n    __typename\n  }\n  availableExtraProducts {\n    ...AvailableExtraProducts\n    __typename\n  }\n  includedExtraProducts {\n    id\n    texts {\n      name\n      productSummaryAlternativeName\n      readMoreText\n      receiptText\n      salesAbstract\n      __typename\n    }\n    __typename\n  }\n  selectionKey\n  type\n  tripCharacteristics\n  tripTravelers: travelers {\n    id\n    ageType\n    __typename\n  }\n  paymentMethodPrices {\n    ...PaymentMethodPrices\n    __typename\n  }\n  travelerPrices {\n    ...TravelerPrices\n    __typename\n  }\n  travelerPricesWithoutPaymentDiscounts {\n    price {\n      markup {\n        value\n        __typename\n      }\n      price {\n        value\n        currency {\n          code\n          __typename\n        }\n        __typename\n      }\n      vat {\n        value\n        __typename\n      }\n      __typename\n    }\n    taxesAndFees {\n      category\n      taxes {\n        code\n        title\n        amount {\n          value\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    travelerId\n    __typename\n  }\n  tripTags\n  systems\n  voucherAmount {\n    value\n    __typename\n  }\n  shareableUrl\n  __typename\n}\n\nfragment IncludedCabinBaggage on IncludedCabinBaggage {\n  pieces\n  weight\n  weightUnit\n  __typename\n}\n\nfragment IncludedCheckedBaggage on IncludedCheckedBaggage {\n  pieces\n  weight\n  weightUnit\n  __typename\n}\n\nfragment AvailableExtraProducts on ExtraProduct {\n  configuration {\n    productPreSelection\n    __typename\n  }\n  productId: id\n  name\n  selectedWithTrip\n  sellSpecification {\n    ... on SellSpecificationTravelerNew {\n      sellPriceTravelers {\n        price {\n          price {\n            value\n            __typename\n          }\n          markup {\n            value\n            __typename\n          }\n          vat {\n            value\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    ... on SellSpecificationNoneNew {\n      price {\n        price {\n          value\n          currency {\n            code\n            exponent\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    ... on SellSpecificationBaggageNew {\n      sellPriceBaggage {\n        maxWeight\n        numberOfUnits\n        weightUnit\n        price {\n          price {\n            value\n            currency {\n              code\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment PaymentMethodPrices on PaymentMethodPrice {\n  name\n  price {\n    value\n    __typename\n  }\n  type\n  __typename\n}\n\nfragment TravelerPrices on TravelerPrice {\n  id\n  price {\n    markup {\n      value\n      __typename\n    }\n    price {\n      value\n      currency {\n        code\n        __typename\n      }\n      __typename\n    }\n    vat {\n      value\n      __typename\n    }\n    __typename\n  }\n  taxesAndFees {\n    category\n    taxes {\n      code\n      title\n      amount {\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  travelerId\n  __typename\n}\n"
          });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://www.flightnetwork.com/graphql/SearchOnResultPage',
            headers: { 
              'Content-Type': 'application/json', 
              'Cookie': 'f5avraaaaaaaaaaaaaaaa_session_=AELMNFOPBJELFDAKLFKFOFFOELKCMNMEHKMOJEPJPEAFGAJFMOFBHLGLHIANLLEMHOIDAFJBMECBDLANHHBANMDBMKBCPFKBHLGAPGJOKJDAKMKKOOJGJABBIBPEMDNA; JSESSIONID=!J3UDiNHnmI5hyUXBRyvihatdR4wzUa1BgU0KvqeJ0K3OhAUshAIPiya24GA/iQ6AGISTh3HOYNADH3wf7vX6e2kH9gpNFluwArBQENjAMfjwnAlxtQ==; TS01f21d64=013505d875355d4564f2f72962efe5e50f5ec7406ea9e4768a4e8e4dacb960eaa5b19e98d9fe908ee7fc5029be23c0c7ba534cab1634efe195fe6d5aaee82b559fc1d2410a0769ade012983dc47cb06adb4a70de640705d1737f8904c8e410664d9ba2e646c74bf36a7082cea5eca1cb7eabc50bbd145eb20063c93360f976f4ab45c6188b6116b24b69eebbc6695907726e39a652; ibe.ccid=c6beb87e-c649-4f55-b85e-8f434dd86b61; ibe.s=GI1SA9KK-ofo6ks; ibe.sc=CA'
            },
            data: data.replace('<START_PRICE>', startPrice).replace('<STOP_PRICE>', endPrice)
        };

        const resp = await axios.request(config);
        // console.log(resp.data.data.search.flights[2].bounds[0].segments[0].operatingCarrier.name);
        // if (resp.status == 200){
        //     console.log(`Good response`);
        // }
        const price = resp.data.data.search.flights[1].travelerPrices[0].price.price.value;
   
        return { price };    
    }
}

for ( let price of pricePayload ){
    console.log(`Request -  Price Range: ${price.value.split(',')[0]} | ${price.value.split(',')[1]}`);
   new ValidateAirlineFilter().validatePriceFilter(price.value.split(',')[0], price.value.split(',')[1]).then( (flightPrice)=>{
        console.log(`flight price: `, flightPrice.price);
    });
    
}
