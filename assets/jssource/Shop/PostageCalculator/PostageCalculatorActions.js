// @flow
export const types = {
    POSTAGE_REQUEST: 'POSTAGE_REQUEST',
    POSTAGE_REPLY: 'POSTAGE_REPLY',
    POSTAGE_ERROR: 'POSTAGE_ERROR',
    SET_COUNTRY: 'SET_COUNTRY',
    SET_POSTCODE: 'SET_POSTCODE',
};

export const actionCreators = {
    setCountry: (country) => ({
        type: types.SET_COUNTRY,
        payload: country,
    }),
    setPostcode: (postcode) => ({
        type: types.SET_POSTCODE,
        payload: postcode,
    }),
    postage: () => (dispatch, getState) => {
        const state = getState();
        /*

        api key f5cd8bd5-6a76-46ea-9978-a5248607c6b4
        $apiKey = 'your_api_key';

// Define the service input parameters
$destinationCountryCode = 'NZ';
$parcelWeightInKGs = 1.0;

// Set the query params
$queryParams = array(
  "country_code" => $destinationCountryCode,
  "weight" => $parcelWeightInKGs
);
$urlPrefix = 'digitalapi.auspost.com.au';
$postageTypesURL = 'https://' . $urlPrefix . '/postage/parcel/international/service.json?' .
curl_setopt($ch, CURLOPT_HTTPHEADER, array('AUTH-KEY: ' . $apiKey));

GET /postage/parcel/international/service.json?country_code=NZ&weight=1.0 HTTP/1.1
Host: digitalapi.auspost.com.au
User-Agent: Curl
AUTH-KEY: your_api_key

{
  "services": {
    "service": [
      {
        "code": "INT_PARCEL_COR_OWN_PACKAGING",
        "name": "Courier",
        "price": "85.13",
        "max_extra_cover": 5000,
        "options": {
          "option": [
            {
              "code": "INT_TRACKING",
              "name": "Tracking"
            },
            {
              "code": "INT_SMS_TRACK_ADVICE",
              "name": "SMS track advice"
            },
            {
              "code": "INT_EXTRA_COVER",
              "name": "Extra Cover"
            }
          ]
        }
      },
      {
        "code": "INT_PARCEL_EXP_OWN_PACKAGING",
        "name": "Express",
        "price": "40.13",
        "max_extra_cover": 5000,
        "options": {
          "option": [
            {
              "code": "INT_TRACKING",
              "name": "Tracking"
            },
            {
              "code": "INT_SIGNATURE_ON_DELIVERY",
              "name": "Signature on delivery"
            },
            {
              "code": "INT_SMS_TRACK_ADVICE",
              "name": "SMS track advice"
            },
            {
              "code": "INT_EXTRA_COVER",
              "name": "Extra Cover"
            }
          ]
        }
      },
      {
        "code": "INT_PARCEL_STD_OWN_PACKAGING",
        "name": "Standard",
        "price": "31.40",
        "max_extra_cover": 5000,
        "options": {
          "option": [
            {
              "code": "INT_TRACKING",
              "name": "Tracking"
            },
            {
              "code": "INT_EXTRA_COVER",
              "name": "Extra Cover"
            },
            {
              "code": "INT_SIGNATURE_ON_DELIVERY",
              "name": "Signature on delivery"
            },
            {
              "code": "INT_SMS_TRACK_ADVICE",
              "name": "SMS track advice"
            }
          ]
        }
      },
      {
        "code": "INT_PARCEL_AIR_OWN_PACKAGING",
        "name": "Economy Air Parcels",
        "price": "23.77",
        "max_extra_cover": 500,
        "options": {
          "option": [
            {
              "code": "INT_EXTRA_COVER",
              "name": "Extra Cover"
            },
            {
              "code": "INT_SIGNATURE_ON_DELIVERY",
              "name": "Signature on delivery"
            }
          ]
        }
      }
    ]
  }
}


GET /postage/parcel/international/calculate.json?country_code=NZ&weight=1.0&service_code=INT_PARCEL_STD_OWN_PACKAGING
HTTP/1.1
Host: digitalapi.auspost.com.au
User-Agent: Curl
AUTH-KEY: your_api_key

{
  "postage_result": {
    "service": "Standard",
    "total_cost": "31.40",
    "costs": {
      "cost": {
        "item": "Standard",
        "cost": "31.40"
      }
    }
  }
}

apiKey = 'your_api_key';

// Define the service input parameters
$destinationCountryCode = 'NZ';
$parcelWeightInKGs = 1.0;

// Set the query params
$queryParams = array(
  "country_code" => $destinationCountryCode,
  "weight" => $parcelWeightInKGs,
  "service_code" => "INT_PARCEL_STD_OWN_PACKAGING"
);

// Set the URL for the International Parcel Calculation service
$urlPrefix = 'digitalapi.auspost.com.au';
$calculateRateURL = 'https://' . $urlPrefix . '/postage/parcel/international/calculate.json?' .
http_build_query($queryParams);


DOMESTIC
$apiKey = 'your_api_key';

// Define the service input parameters
$fromPostcode = '2000';
$toPostcode = '3000';
$parcelLengthInCMs = 22;
$parcelWidthInCMs = 16;
$parcelHeighthInCMs = 7.7;
$parcelWeightInKGs = 1.5;

// Set the query params
$queryParams = array(
  "from_postcode" => $fromPostcode,
  "to_postcode" => $toPostcode,
  "length" => $parcelLengthInCMs,
  "width" => $parcelWidthInCMs,
  "height" => $parcelHeighthInCMs,
  "weight" => $parcelWeightInKGs
);

// Set the URL for the Domestic Parcel Size service
$urlPrefix = 'digitalapi.auspost.com.au';
$postageTypesURL = 'https://' . $urlPrefix . '/postage/parcel/domestic/service.json?' .
http_build_query($queryParams);
GET /postage/parcel/domestic/service.json?length=22&width=16&height=7.7&weight=1.5&from_postcode=2000&to_postcode=3000
HTTP/1.1
Host: digitalapi.auspost.com.au
User-Agent: Curl
AUTH-KEY: your_api_key
{
  "services": {
    "service": [
      {
        "code": "AUS_PARCEL_EXPRESS",
        "name": "Express Post",
        "price": "24.05",
        "max_extra_cover": 300,
        "options": {
          "option": [
            {
              "code": "AUS_SERVICE_OPTION_STANDARD",
              "name": "Standard Service",
              "suboptions": {
                "option": {
                  "code": "AUS_SERVICE_OPTION_EXTRA_COVER",
                  "name": "Extra Cover",
                  "max_extra_cover": 300
                }
              }
            },
            {
              "code": "AUS_SERVICE_OPTION_SIGNATURE_ON_DELIVERY",
              "name": "Signature on Delivery",
              "suboptions": {
                "option": {
                  "code": "AUS_SERVICE_OPTION_EXTRA_COVER",
                  "name": "Extra Cover",
                  "max_extra_cover": 5000
                }
              }
            }
          ]
        }
      },
      {
        "code": "AUS_PARCEL_EXPRESS_SATCHEL_3KG",
        "name": "Express Post Medium (3Kg) Satchel",
        "price": "14.80",
        "max_extra_cover": 300,
        "options": {
          "option": [
            {
              "code": "AUS_SERVICE_OPTION_STANDARD",
              "name": "Standard Service",
              "suboptions": {
                "option": {
                  "code": "AUS_SERVICE_OPTION_EXTRA_COVER",
                  "name": "Extra Cover",
                  "max_extra_cover": 300
                }
              }
            },
            {
              "code": "AUS_SERVICE_OPTION_SIGNATURE_ON_DELIVERY",
              "name": "Signature on Delivery",
              "suboptions": {
                "option": {
                  "code": "AUS_SERVICE_OPTION_EXTRA_COVER",
                  "name": "Extra Cover",
                  "max_extra_cover": 5000
                }
              }
            }
          ]
        }
      },
      {
        "code": "AUS_PARCEL_REGULAR",
        "name": "Parcel Post",
        "price": "15.05",
        "max_extra_cover": 300,
        "options": {
          "option": [
            {
              "code": "AUS_SERVICE_OPTION_STANDARD",
              "name": "Standard Service",
              "suboptions": {
                "option": {
                  "code": "AUS_SERVICE_OPTION_EXTRA_COVER",
                  "name": "Extra Cover",
                  "max_extra_cover": 300
                }
              }
            },
            {
              "code": "AUS_SERVICE_OPTION_SIGNATURE_ON_DELIVERY",
              "name": "Signature on Delivery",
              "suboptions": {
                "option": {
                  "code": "AUS_SERVICE_OPTION_EXTRA_COVER",
                  "name": "Extra Cover",
                  "max_extra_cover": 5000
                }
              }
            }
          ]
        }
      },
      {
        "code": "AUS_PARCEL_REGULAR_SATCHEL_3KG",
        "name": "Parcel Post Medium Satchel",
        "price": "13.40",
        "max_extra_cover": 300,
        "options": {
          "option": [
            {
              "code": "AUS_SERVICE_OPTION_STANDARD",
              "name": "Standard Service",
              "suboptions": {
                "option": {
                  "code": "AUS_SERVICE_OPTION_EXTRA_COVER",
                  "name": "Extra Cover",
                  "max_extra_cover": 300
                }
              }
            },
            {
              "code": "AUS_SERVICE_OPTION_SIGNATURE_ON_DELIVERY",
              "name": "Signature on Delivery",
              "suboptions": {
                "option": {
                  "code": "AUS_SERVICE_OPTION_EXTRA_COVER",
                  "name": "Extra Cover",
                  "max_extra_cover": 5000
                }
              }
            }
          ]
        }
      }
    ]
  }
}

$apiKey = 'your_api_key';

// Define the service input parameters
$fromPostcode = '2000';
$toPostcode = '3000';
$parcelLengthInCMs = 22;
$parcelWidthInCMs = 16;
$parcelHeighthInCMs = 7.7;
$parcelWeightInKGs = 1.5;

// Set the query params
$queryParams = array(
  "from_postcode" => $fromPostcode,
  "to_postcode" => $toPostcode,
  "length" => $parcelLengthInCMs,
  "width" => $parcelWidthInCMs,
  "height" => $parcelHeighthInCMs,
  "weight" => $parcelWeightInKGs,
  "service_code" => 'AUS_PARCEL_REGULAR'
);

// Set the URL for the Domestic Parcel Calculation service
$urlPrefix = 'digitalapi.auspost.com.au';
$calculateRateURL = 'https://' . $urlPrefix . '/postage/parcel/domestic/calculate.json?' .
http_build_query($queryParams);

// Calculate the final domestic parcel delivery price
curl_setopt($ch, CURLOPT_URL, $calculateRateURL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('AUTH-KEY: ' . $apiKey));
$rawBody = curl_exec($ch);

GET /postage/parcel/domestic/calculate.json?length=22&width=16&height=7.7&weight=1.5&from_postcode=2000&to_postcode=3000&service_code=AUS_PARCEL_REGULAR
HTTP/1.1
Host: digitalapi.auspost.com.au
User-Agent: Curl
AUTH-KEY: your_api_key

{
  "postage_result": {
    "service": "Parcel Post",
    "delivery_time": "Delivered in 4 business days",
    "total_cost": "15.05",
    "costs": {
      "cost": {
        "item": "Parcel Post",
        "cost": "15.05"
      }
    }
  }
}
        */
        return true;
    },
};
