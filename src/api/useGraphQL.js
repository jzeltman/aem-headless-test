/*
Copyright 2020 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import { useState, useEffect } from 'react';
const { AEMHeadless } = require('@adobe/aem-headless-client-js')

const {
  REACT_APP_PUBLIC_URI,
  REACT_APP_GRAPHQL_ENDPOINT,
  REACT_APP_AUTHORIZATION,
  REACT_APP_DEV_TOKEN
} = process.env;

/**
 * Custom React Hook to perform a GraphQL query
 * @param query - GraphQL query
 * @param path - Persistent query path
 */
export default function useGraphQL(query, path) {
  let [data, setData] = useState(null);
  let [errors, setErrors] = useState(null);

  useEffect(() => {
    const config = {
      serviceURL: REACT_APP_PUBLIC_URI,
      endpoint: REACT_APP_GRAPHQL_ENDPOINT,
    };
    if (REACT_APP_AUTHORIZATION) {
      if (REACT_APP_AUTHORIZATION.includes(":")) config.auth = REACT_APP_AUTHORIZATION.split(":");
      else config.auth = REACT_APP_AUTHORIZATION;
    }
    if (REACT_APP_DEV_TOKEN) config.auth = REACT_APP_DEV_TOKEN;

    const sdk = new AEMHeadless(config);
    const request = query ? sdk.runQuery.bind(sdk) : sdk.runPersistedQuery.bind(sdk);

    request(query || path)
      .then(({ data, errors }) => {
        if (errors) setErrors(mapErrors(errors));
        if (data) setData(data);
      })
      .catch((error) => {
        setErrors(error);
      });
  }, [query, path]);

  return { data, errors }
}

/**
 * concatenate error messages into a single string.
 * @param {*} errors
 */
export function mapErrors(errors) {
  return errors.map((error) => error.message ? error.message : error).join(",");
}