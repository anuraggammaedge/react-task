import React, { useState, useEffect } from "react";

export function uselocalStorage(key) {
  const setItem = (value) => {
    localStorage.setItem(key, value);
  };

  const getItem = () => {
    return localStorage.getItem(key);
  };
  return [setItem, getItem];
}
