import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useAsyncStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const asyncStorageItem = await AsyncStorage.getItem(itemName);

        let parsedItem;

        if (!asyncStorageItem) {
          await AsyncStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(asyncStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [initialValue, itemName]);

  const saveItem = async (newItem) => {
    try {
      await AsyncStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem); 
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useAsyncStorage };