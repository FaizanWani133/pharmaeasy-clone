import * as types from "./actionTypes";
import React, { useEffect, useState } from "react";
import axios from "axios";



export const cartInitialState = {
  totalCount: 0,
  totalAmount: 0,
  cartItems: [],
};
axios.get("http://localhost:3001/Cart").then(res=>{
    
    cartInitialState.totalCount = res.data
})


const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case types.GET_TOTAL:
      let { totalAmount, totalCount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { newPrice, amount } = cartItem;
          const itemTotal = newPrice * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalCount: 0,
          totalAmount: 0,
        }
      );
      totalAmount = parseFloat(totalAmount.toFixed(2));
      return { ...state, totalAmount, totalCount };

    case types.UPDATE:
      let tempCartInc = state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, amount: action.payload.amount };
        }
        return cartItem;
      });
      return { ...state, cartItems: tempCartInc };
    default:
      return state;
    case types.REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };
      case types.ADD_ITEM:
        console.log("from redux",action.payload)
        return{
            ...state,
            cartItems:[...state.cartItems,action.payload]
        }
        case types.SET_CART:
            return{
                ...state,
                cartItems:action.payload
            }
    
  }
};
export default cartReducer;
