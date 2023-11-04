import { toast } from 'react-hot-toast'

export const postEmailRequest = async(email) =>{
    try {
        const response = await fetch('https://surfs-up.vercel.app/api/subscriber',{
          method: "POST",
          headers: {
            "Content-type": "application/json"
          }, 
          body: JSON.stringify({email})
        })
        const {message} = await response.json()
  
        if (response.status === 201){
          toast(`${message}`,
          {
            style: {
              background: 'rgba(30,130,76,0.7)',
              color: '#fff',
            },
          }
        ) 
        
        } else{
          toast(`${message}`,
            {
              style: {
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
              },
            }
          ) 
        }
  
  
    } catch (error) {
            console.log(error);
            toast("Some error occured. Please try again.",
            {
              style: {
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
              },
            }
          ) 
        }    
      
}