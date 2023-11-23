import axios from "axios";
import React,{ReactNode} from "react";
import { createContext } from "react";
import { API_categories } from "../../utils/consts";
export const categoryContext = createContext<any>(null)
interface IaddCategory{
    children: ReactNode;
}
export function addCategory({children}:IaddCategory){
async function getCategories(){
    let res = await axios.get(API_categories)
    console.log(res)
    return (
        <categoryContext.Provider value={{ getCategories }}>
          {children}
        </categoryContext.Provider>)
}
}


