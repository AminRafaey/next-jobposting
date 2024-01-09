import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import axios from "axios";

const jwtClient = new google.auth.JWT(
  "nextjs-jobposting@nextjs-jobposting.iam.gserviceaccount.com",
  // @ts-ignore
  null,
  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCHQrFs+QLIN0/m\ne/DYtGZlwSC+ZsbZcdPjS56YUf7DLgkeuWMD316Aws/hcdhzCbf6pOIA38GPiZjt\ntl6e5M3TFjZRMVt5158UGz7Kh6rleS57X8Ep06BlNoLUXpgxUJ0E+NQBoG17LkT5\nqLbZTfjiMZhJOpm+Ri9oXtDZgRf7aGFtRQ6hV8ynGP4N1nYJc9xrDir4wN+uZTFR\nBekbVMvtkHq/QS4msEdIBZsPg07uMDVCV7WadKTQbngCCdyve5FAWQYh7hc6Ep5Y\nOq2OSHl24to5kwQ6SucvYaEvqxOsA1Q/PkPwnffMSM3WIDBs2b3oLGk11mVzYLK8\n6LiqMl5FAgMBAAECggEADfiDB/zuXyIWGXngG29YC5biRsL/M1LRA8SkmcS6Wjbv\n5TcDyvtwMOouUPG9MstPBU9bh/iUmbqoy5YkeX1WOcEtFL99hye7fCGrn31aLFU9\nylYjxv9fV/pEks0/I1+ECxFCdfU36bBn78Y6i1Zvkw7JVSL9jKGGNbMOwlsq+szG\nSyVrA5mDphSziRCSAfUKhK5b4ZyH6+wuKvZOHvYqH/v0vW32eBJWA+XUnsujKzAn\nhyNIaUD4NzqY4xz2Ly46oY161Uozah9M8xTvdy45PialepALZQn/bHAaspDtN+Tp\nwev2BHnkxg+/e+FDlEEak50eBRFGnbKp3Hvp8S1ZfwKBgQC8bRmGkUElLkvQYqoB\nBnq8NT2/VfyTgzd9MD91N2HTKuQ6FhtYqWwzwsxrbxySVVCNCtlSCV6eXZlHhmWQ\nv58CwmHA+ysKEYuZhzjlXibWr+ntqC5ATGSnItPG+CrVBv3aMgndV2vA/yu8W8EH\nNiCOLUhTo8fpZBjQNxiP750WUwKBgQC3xJkMRP0/6JRwnCl5FRYdWlHqQnvuNdOv\njyfrqG/ohjxbos/TaHKoux1E216dBnjghhmzluIR6aWT6AEA+0X+2lb8owNxPTmV\nJ8Rc5hNWSAhGBREpq61KY3djrkWNW6rYXvdm2lkmwvVdBz+/ePFqmVas+fOrrjca\nkgyz/GH2BwKBgQC786euj12IFPIS3xftBeWPrxv0q3TSP+Utvt7NsXynAvW86yhD\n/FuuFfWKhL7fSLKcveGg7y+ukHbA3dKZ3EpkmjigIun/lRjHABdE0/Gx3K9fHI9m\nG82a2iadJhazf9HfwGIOo5EcZmvd6zhUVS2MJKcspwZWTD5kE1Ew4jazeQKBgATB\ncbR/lI4y1qSTZf9cLFZWIAiP7+UaP4ArlDzk/wBleOpmLDqsWUtEjF1bz/cAU+B7\nl+6t2OvdwAsz1dLQrd8Kh3XCQjSMARF7FfnRem6hLpWhS/BoIPPr3wsVV3dxB9rR\nmlVvER+PrAncRioOVzELBtMzJLsspwBpByshPOfBAoGBALGyy7+w2OTfqgM5VaYr\nqDfC+lGwmbnOSANQSwvvz50db+vFjRPikFi6G+bmKhThzGIg9Rq8siaF+xoJ9qzY\nRdTrYWWzbMnVSR+em2xfwI+vbm5Rn5Mxo65cV5phX0fTjaMSRjTd8ldxvOmaATju\nh86vLuYMAMiTxGaCQcxHOOtl\n-----END PRIVATE KEY-----\n",
  ["https://www.googleapis.com/auth/indexing"],
  null
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  jwtClient.authorize(function (err, tokens: any) {
    if (err) {
      return;
    }
    const options = {
      url: `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=https://next-jobposting.vercel.app/`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access_token}`,
      },
    };
    // let re
    axios(options)
      .then((response) => {
        // Handle the response
        console.log('ssssss',response.data);
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
      });
  });
  res.status(200).json({ status: "OK" });
}
