import colors from "../../config/colors"
export const menuItems = [

    {
        title:"My Listings",
        icon:{
            name: 'format-list-bulleted',
            backgroundColor:colors.danger
        }
    },
    {
        title:"My Messages",
        icon:{
            name: 'email',
            backgroundColor:colors.secondary
        },
        targetScreen:"Message"

        
    }
]