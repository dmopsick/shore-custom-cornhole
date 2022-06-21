import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import { useState } from 'react';

export default function EmailForm() {
    const [email, setEmail] = useState("");
    const [designDescription, setDesignDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Validate email

        // Send Email

        // Return some response to the user.. snack bar messages?

        alert('Entered email: ' + email);
        alert('Entered Design description: ' + designDescription);
    }

    return (
        <Card
            sx={{ boxShadow: 3 }} 
            style={{
            width: "80%",
            margin: "auto",
            height: "350px",
            paddingTop: "10px",
            textAlign: "left",
            maxWidth: "450px"
    }}>
        <form  onSubmit={handleSubmit}>
            <p 
                style={{
                    textAlign: "left",
                    marginLeft: "20px"
                }}
            >
  
            </p>

            <TextField  
                required
                id="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                placeholder='Enter Your Email Address'
                style={{
                    width: "95%",
                    maxWidth: "400px",
                    marginLeft: "10px"
                }}
            />
            <p 
                style={{
                    textAlign: "left",
                    marginLeft: "20px",
                    maxWidth: "400px"
                }}
            >
                Describe your dream board design
            </p>
            <TextField required
                multiline
                id="designDescription"
                value={designDescription}
                onChange={(e) => setDesignDescription(e.target.value)}
                label="Design Description"
                placeholder="Describe your desired design"
                rows={4}
                style={{
                    width: "95%",
                    maxWidth: "400px",
                    marginLeft: "10px"
                }}    
            />
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <div className="g-recaptcha" data-sitekey="6Lcm2mEgAAAAAOIiEjcY7ERvu8ebFw8j8wy1A_oN"></div>
            
            <div
                style={{
                    textAlign: "center",
                    marginTop: "10px"
                }}
            >
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Submit
                </Button>
            </div>
        </form>
    </Card>
    )
}