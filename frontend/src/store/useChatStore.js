import {create} from "zustand"
import toast from "react-hot-toast"
import { axiosInstance } from "../lib/axios"



export const useChatStore = create ((set)=>({
    messages: [],
    users:[],
    selectedUser:null,
    isUserLoading:false,
    isMessageLoading: false,



    getUsers: async()=>{
        set({isUserLoading:true});
        try {
            const res=await axiosInstance.get("/message/users");
            set({users:res.data});
        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({isUserLoading: false});
        }
    },

    getMessages: async(userId)=>{
        set({isUserLoading:true});
        try {
            const res=await axiosInstance.get(`/message/${userId}`);
            set({messages:res.data});
        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({isUserLoading: false});
        }
    },

    //todo : optimize this one later 
    setSelectedUser : (selectedUser)=>set({selectedUser}),



}))